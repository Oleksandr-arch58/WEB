@echo off
REM ==================== БЫСТРЫЙ СТАРТ - ИНСТРУКЦИЯ ====================
REM Этот файл объясняет как запустить backend

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                     БЫСТРЫЙ СТАРТ                              ║
echo ║              MLBB INFO - Система аутентификации               ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

echo ТРЕБОВАНИЯ:
echo   ✓ Node.js 14+ (https://nodejs.org/)
echo   ✓ npm (устанавливается с Node.js)
echo.

echo УСТАНОВКА И ЗАПУСК:
echo.
echo Вариант 1: Использовать этот скрипт (рекомендуется)
echo   1. Двойной клик на run-server.bat
echo   2. Дождитесь сообщения "Готово к использованию!"
echo   3. Откройте http://localhost:3000 в браузере
echo.

echo Вариант 2: Команды в PowerShell
echo   1. Откройте PowerShell в этой папке
echo   2. Введите: npm install
echo   3. Введите: npm start
echo.

echo Вариант 3: Команды в командной строке (cmd)
echo   1. Откройте командную строку в этой папке
echo   2. Введите: npm install
echo   3. Введите: npm start
echo.

echo ════════════════════════════════════════════════════════════════
echo.
echo СТРУКТУРА ПРОЕКТА:
echo   server.js              - Backend сервер (Express)
echo   db/users.json          - Файл с пользователями (БД)
echo   login.html             - Страница входа/регистрации
echo   admin.html             - Админ-панель для просмотра БД
echo   index.html + др.       - Защищённые страницы сайта
echo.

echo ПОСЛЕ ЗАПУСКА СЕРВЕРА:
echo   1. Откройте    http://localhost:3000
echo   2. Или         file:///c:/UTM%202%20курс/Web/lab4/login.html
echo   3. Зарегистрируйтесь или войдите
echo   4. Администратор: http://localhost:3000/admin.html
echo.

echo ════════════════════════════════════════════════════════════════
echo.
echo РЕШЕНИЕ ПРОБЛЕМ:
echo.
echo "Node.js не установлен" → https://nodejs.org/ → установите
echo "Port 3000 уже занят"   → Измените PORT в server.js
echo "CORS ошибка"           → Убедитесь что backend запущен
echo.

echo Для подробной информации читайте README.md
echo.
pause
