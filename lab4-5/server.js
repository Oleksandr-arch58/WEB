// ==================== MLBB INFO BACKEND - SQL VERSION ====================
// Express сервер с SQLite БД (через sql.js) для аутентификации пользователей

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const initSqlJs = require('sql.js');

const app = express();
const PORT = 3000;

// ==================== MIDDLEWARE ====================

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// ==================== БД SQL.js ====================

const DB_PATH = path.join(__dirname, 'db', 'database.db');
let SQL;
let db;
let dbInstance;

// Инициализация БД
async function initDB() {
  SQL = await initSqlJs();
  
  if (fs.existsSync(DB_PATH)) {
    // Загружаем существующую БД
    const fileBuffer = fs.readFileSync(DB_PATH);
    dbInstance = new SQL.Database(fileBuffer);
    console.log('✅ БД загружена из файла');
  } else {
    // Создаём новую БД
    dbInstance = new SQL.Database();
    console.log('✅ Новая БД создана');
  }

  // Создаём таблицу users если её нет
  dbInstance.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      login TEXT UNIQUE NOT NULL,
      passwordHash TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log('✅ Таблица users готова');
  saveDB();
}

function saveDB() {
  const data = dbInstance.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

// ==================== ХЕШИРОВАНИЕ ПАРОЛЕЙ ====================

function hashPassword(password) {
  return crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');
}

// ==================== API ENDPOINTS ====================

// 1. РЕГИСТРАЦИЯ
app.post('/api/auth/register', (req, res) => {
  const { login, password } = req.body;

  // Валидация
  if (!login || login.trim().length < 3) {
    return res.status(400).json({ 
      success: false, 
      message: 'Логин должен содержать минимум 3 символа' 
    });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ 
      success: false, 
      message: 'Пароль должен содержать минимум 6 символов' 
    });
  }

  try {
    // Нормализуем логин: trim + toLowerCase
    const normalizedLogin = login.trim().toLowerCase();

    // Проверка на существование
    const stmt = dbInstance.prepare(`SELECT login FROM users WHERE login = ?`);
    stmt.bind([normalizedLogin]);
    if (stmt.step()) {
      stmt.free();
      return res.status(400).json({ 
        success: false, 
        message: 'Пользователь с таким логином уже существует' 
      });
    }
    stmt.free();

    // Хеширование пароля
    const passwordHash = hashPassword(password);

    // Вставка в БД
    const insertStmt = dbInstance.prepare(`INSERT INTO users (login, passwordHash) VALUES (?, ?)`);
    insertStmt.bind([normalizedLogin, passwordHash]);
    insertStmt.step();
    insertStmt.free();

    // Получаем ID последней вставки
    const idStmt = dbInstance.prepare(`SELECT last_insert_rowid() as id`);
    idStmt.step();
    const row = idStmt.getAsObject();
    idStmt.free();

    saveDB();

    return res.status(201).json({ 
      success: true, 
      message: 'Регистрация успешна!',
      user: {
        id: row.id,
        login: login.trim()
      }
    });
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Ошибка при регистрации' 
    });
  }
});

// 2. ВХОД
app.post('/api/auth/login', (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Заполните логин и пароль' 
    });
  }

  try {
    // Нормализуем логин: trim + toLowerCase
    const normalizedLogin = login.trim().toLowerCase();

    const stmt = dbInstance.prepare(`SELECT id, login, passwordHash FROM users WHERE login = ?`);
    stmt.bind([normalizedLogin]);

    if (!stmt.step()) {
      stmt.free();
      return res.status(404).json({ 
        success: false, 
        message: 'Пользователь не найден' 
      });
    }

    const user = stmt.getAsObject();
    stmt.free();

    const passwordHash = hashPassword(password);
    if (passwordHash !== user.passwordHash) {
      return res.status(401).json({ 
        success: false, 
        message: 'Неверный пароль' 
      });
    }

    // Успешный вход - создаём токен
    const token = crypto.randomBytes(32).toString('hex');
    
    return res.json({ 
      success: true, 
      message: 'Успешный вход!',
      token: token,
      user: {
        id: user.id,
        login: user.login
      }
    });
  } catch (error) {
    console.error('Ошибка входа:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Ошибка сервера' 
    });
  }
});

// 3. ПРОВЕРКА ТОКЕНА
app.post('/api/auth/verify', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Токен не предоставлен' 
    });
  }

  if (token.length === 64) {
    return res.json({ 
      success: true, 
      message: 'Токен валиден' 
    });
  } else {
    return res.status(401).json({ 
      success: false, 
      message: 'Неверный токен' 
    });
  }
});

// 4. ПОЛУЧИТЬ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ (админ)
app.get('/api/admin/users', (req, res) => {
  try {
    const stmt = dbInstance.prepare(`SELECT id, login, passwordHash, createdAt FROM users ORDER BY id DESC`);
    const users = [];
    
    while (stmt.step()) {
      users.push(stmt.getAsObject());
    }
    stmt.free();

    const safeUsers = users.map(u => ({
      id: u.id,
      login: u.login,
      createdAt: u.createdAt,
      passwordHashFirst8: u.passwordHash.substring(0, 8) + '...'
    }));

    res.json({ 
      success: true, 
      total: users.length,
      users: safeUsers 
    });
  } catch (error) {
    console.error('Ошибка получения пользователей:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Ошибка сервера' 
    });
  }
});

// 5. УДАЛИТЬ ПОЛЬЗОВАТЕЛЯ (админ)
app.delete('/api/admin/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const stmt = dbInstance.prepare(`DELETE FROM users WHERE id = ?`);
    stmt.bind([userId]);
    stmt.step();
    stmt.free();

    saveDB();

    return res.json({ 
      success: true, 
      message: 'Пользователь удалён'
    });
  } catch (error) {
    console.error('Ошибка удаления:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Ошибка при удалении' 
    });
  }
});

// 6. ЭКСПОРТИРОВАТЬ БД (JSON)
app.get('/api/admin/export', (req, res) => {
  try {
    const stmt = dbInstance.prepare(`SELECT * FROM users ORDER BY id DESC`);
    const users = [];
    
    while (stmt.step()) {
      users.push(stmt.getAsObject());
    }
    stmt.free();

    res.setHeader('Content-Disposition', 'attachment; filename="users_export.json"');
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  } catch (error) {
    console.error('Ошибка экспорта:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Ошибка при экспорте' 
    });
  }
});

// ==================== ОБСЛУЖИВАНИЕ СТАТИЧЕСКИХ ФАЙЛОВ ====================

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// ==================== ЗАПУСК СЕРВЕРА ====================

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   MLBB INFO BACKEND - SQL VERSION       ║
╠════════════════════════════════════════╣
║   🌐 Адрес: http://localhost:${PORT}       ║
║   📁 БД: SQLite - ${DB_PATH}  ║
║   ✅ Готово к использованию!             ║
╚════════════════════════════════════════╝
    `);
  });
}).catch(err => {
  console.error('❌ Ошибка инициализации БД:', err);
  process.exit(1);
});

// ==================== ОБРАБОТКА ОШИБОК ====================

process.on('unhandledRejection', (reason, promise) => {
  console.error('Необработанное отклонение:', reason);
});
