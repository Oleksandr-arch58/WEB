#!/bin/bash
# ==================== MLBB INFO BACKEND LAUNCHER ====================
# Этот скрипт запускает backend сервер на Linux/macOS

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                                                                ║"
echo "║   MLBB INFO BACKEND - LAUNCHER                                ║"
echo "║   Система аутентификации с хранением на диске                 ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Проверка наличия Node.js
if ! command -v node &> /dev/null; then
    echo "❌ ОШИБКА: Node.js не установлен!"
    echo ""
    echo "Установите Node.js с https://nodejs.org/"
    echo "или используйте пакетный менеджер:"
    echo "  Ubuntu/Debian: sudo apt install nodejs npm"
    echo "  macOS: brew install node"
    echo ""
    exit 1
fi

# Проверка версии Node.js
echo "✅ Node.js найден:"
node --version
npm --version
echo ""

# Переход в директорию проекта
cd "$(dirname "$0")"
echo "📁 Рабочая директория: $(pwd)"
echo ""

# Проверка package.json
if [ ! -f "package.json" ]; then
    echo "❌ ОШИБКА: package.json не найден!"
    echo "Убедитесь, что вы запустили скрипт из папки lab4"
    exit 1
fi

# Проверка и создание папки БД
if [ ! -d "db" ]; then
    echo "📁 Создаю папку db/..."
    mkdir -p db
fi

if [ ! -f "db/users.json" ]; then
    echo "📝 Создаю файл БД db/users.json..."
    echo "[]" > db/users.json
fi

# Установка зависимостей если их нет
if [ ! -d "node_modules" ]; then
    echo "📥 Установка зависимостей (первый запуск, может занять время)..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ ОШИБКА при установке зависимостей!"
        exit 1
    fi
fi

# Запуск сервера
echo ""
echo "🚀 Запуск сервера..."
echo ""
node server.js

# Если сервер упал
echo ""
echo "❌ Сервер остановлен"
echo ""
