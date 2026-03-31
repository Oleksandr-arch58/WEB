// ==================== ЗАЩИТА СТРАНИЦ (BACKEND ВЕРСИЯ) ====================
// Проверяет наличие authToken перед доступом к защищённым страницам

(function() {
  // Получить токен
  const token = localStorage.getItem('authToken');
  const currentUser = localStorage.getItem('currentUser');
  
  console.log('🛡️ Guard проверка:', {
    token: token ? '✅ Есть' : '❌ Нет',
    user: currentUser ? '✅ Есть' : '❌ Нет'
  });
  
  // Если токена НЕТ ИЛИ нет пользователя
  if (!token || !currentUser) {
    // Получить текущий URL (без domain)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    console.log('⚠️ Не авторизован. Текущая страница:', currentPage);
    
    // Не перенаправляем если уже на странице login или admin
    if (currentPage !== 'login.html' && currentPage !== '' && currentPage !== 'admin.html') {
      console.log('🔄 Перенаправление на login.html...');
      // Перенаправить на login.html с параметром returnTo (куда вернуть после входа)
      window.location.href = `login.html?returnTo=${encodeURIComponent(currentPage)}`;
    }
  } else {
    console.log('✅ Авторизация подтверждена');
  }
})();
