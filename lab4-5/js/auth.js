// ==================== СИСТЕМА АУТЕНТИФИКАЦИИ С BACKEND ====================
// Все функции работают с REST API на сервере

const API_URL = 'http://localhost:3000/api/auth';

// ==================== УПРАВЛЕНИЕ ТОКЕНОМ ====================

function setAuthToken(token) {
  localStorage.setItem('authToken', token);
  console.log('✅ Токен сохранён');
}

function getAuthToken() {
  return localStorage.getItem('authToken');
}

function clearAuthToken() {
  localStorage.removeItem('authToken');
  console.log('❌ Токен удалён');
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch (e) {
    return null;
  }
}

function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
  console.log('👤 Пользователь:', user.login);
}

// ==================== РЕГИСТРАЦИЯ ====================

async function registerUser(login, password) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Ошибка при регистрации'
      };
    }

    return {
      success: true,
      message: data.message || 'Регистрация успешна!'
    };
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    return {
      success: false,
      message: 'Ошибка сервера. Убедитесь, что backend запущен на http://localhost:3000'
    };
  }
}

// ==================== ВХОД ====================

async function loginUser(login, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Ошибка при входе'
      };
    }

    // Сохраняем токен и пользователя
    setAuthToken(data.token);
    setCurrentUser(data.user);

    return {
      success: true,
      message: data.message || 'Успешный вход!'
    };
  } catch (error) {
    console.error('Ошибка входа:', error);
    return {
      success: false,
      message: 'Ошибка сервера. Убедитесь, что backend запущен на http://localhost:3000'
    };
  }
}

// ==================== ВЫХОД ====================

function logoutUser() {
  clearAuthToken();
  localStorage.removeItem('currentUser');
}

// ==================== ПРОВЕРКА СЕССИИ ====================

function isAuthenticated() {
  return getAuthToken() !== null;
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

console.log('✅ Auth система инициализирована (работает с backend)');
