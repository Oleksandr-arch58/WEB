@echo off
REM ==================== MLBB INFO BACKEND LAUNCHER ====================
REM Этот скрипт запускает backend сервер на Windows

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                    MLBB INFO BACKEND SERVER                   ║
echo ║            Авторизация с базой данных SQL                    ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Проверка наличия Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ ОШИБКА: Node.js не установлен!
    echo.
    echo Установите Node.js с https://nodejs.org/
    pause
    exit /b 1
)

REM Переход в директорию проекта
cd /d "%~dp0"
echo 📁 Директория: %cd%
echo.

REM Проверка package.json
if not exist "package.json" (
    echo ❌ ОШИБКА: package.json не найден!
    pause
    exit /b 1
)

REM Проверка и создание папки БД
if not exist "db" (
    echo 📁 Создаю папку db/...
    mkdir db
)

REM Установка зависимостей если их нет
if not exist "node_modules" (
    echo 📥 Устанавливаю зависимости npm (первый запуск) ...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo ❌ ОШИБКА при установке зависимостей!
        pause
        exit /b 1
    )
)

echo.
echo ✅ Все OK! Версия Node.js:
node --version
echo.
echo 🚀 ЗАПУСК СЕРВЕРА
echo 📍 Адрес: http://localhost:3000/login.html
echo 🛑 Остановка: нажмите Ctrl + C
echo.
echo ════════════════════════════════════════════════════════════════
echo.

REM Запуск сервера
node server.js

REM Если сервер упал или остановлен
echo.
echo ════════════════════════════════════════════════════════════════
echo ❌ Сервер остановлен
echo.
pause
exit /b 0
