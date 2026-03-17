console.log("Страница гайдов загружена");

// Данные героев (добавьте своих героев здесь)
const heroes = {
  assassin: [
    { name: "Hayabusa", image: "images/Heroes/hayabusa.jpg", description: "Chase/Burst" },
    { name: "Joy", image: "images/Heroes/joy.jpg", description: "Chase/Damage" },
    { name: "Akai", image: "images/Heroes/akai.jpg", description: "Guard/Crowd Control" },
    { name: "Saber", image: "images/Heroes/saber.jpg", description: "Charge/Finisher" },
    { name: "Alucard", image: "images/Heroes/alucard.jpg", description: "Chase/Damage" },
    { name: "Karina", image: "images/Heroes/karina.jpg", description: "Finisher/Magic Damage" },
    { name: "Natalia", image: "images/Heroes/natalia.jpg", description: "Chase/Finisher" },
    { name: "Yi Sun-shin", image: "images/Heroes/yisun-shin.jpg", description: "Finisher/Chase" },
    { name: "Fanny", image: "images/Heroes/fanny.jpg", description: "Chase/Finisher" },
    { name: "Lancelot", image: "images/Heroes/lancelot.jpg", description: "Chase/Burst" },
    { name: "Helcurt", image: "images/Heroes/helcurt.jpg", description: "Push/Burst" },
    { name: "Gusion", image: "images/Heroes/gusion.jpg", description: "Burst/Magic Damage" },
    { name: "Selena", image: "images/Heroes/selena.jpg", description: "Initiator/Finisher" },
    { name: "Hanzo", image: "images/Heroes/hanzo.jpg", description: "Burst/Poke" },
    { name: "Harley", image: "images/Heroes/harley.jpg", description: "Burst/Poke" },
    { name: "Benedetta", image: "images/Heroes/benedetta.jpg", description: "Chase/Burst" },
    { name: "Aamon", image: "images/Heroes/aamon.jpg", description: "Chase/Magic Damage" },
    { name: "Julian", image: "images/Heroes/julian.jpg", description: "Chase/Magic Damage" },
    { name: "Nolan", image: "images/Heroes/nolan.jpg", description: "Chase/Burst" },
    { name: "Suyou", image: "images/Heroes/suyou.jpg", description: "Chase/Burst" },
    { name: "Ling", image: "images/Heroes/ling.jpg", description: "Chase/Burst" }
  ],
  tank: [
    { name: "Tigreal", image: "images/Heroes/tigreal.jpg", description: "Crowd Control" },
    { name: "Akai", image: "images/Heroes/akai.jpg", description: "Guard/Crowd Control" },
    { name: "Franco", image: "images/Heroes/franco.jpg", description: "Initiator/Control" },
    { name: "Minotaur", image: "images/Heroes/minotaur.jpg", description: "Crowd Control" },
    { name: "Johnson", image: "images/Heroes/johnson.jpg", description: "Support/Crowd Control" },
    { name: "Hylos", image: "images/Heroes/hylos.jpg", description: "Guard/Initiator" },
    { name: "Belerick", image: "images/Heroes/belerick.jpg", description: "Crowd Control/Regen" },
    { name: "Khufra", image: "images/Heroes/khufra.jpg", description: "Initiator/Crowd Control" },
    { name: "Gatotkaca", image: "images/Heroes/gatotkaca.jpg", description: "Crowd Control/Burst" },
    { name: "Grock", image: "images/Heroes/grock.jpg", description: "Crowd Control/Initiator" },
    { name: "Uranus", image: "images/Heroes/uranus.jpg", description: "Regen" },
    { name: "Atlas", image: "images/Heroes/atlas.jpg", description: "Crowd Control/Initiator" },
    { name: "Barats", image: "images/Heroes/barats.jpg", description: "Damage/Crowd Control" },
    { name: "Edith", image: "images/Heroes/edith.jpg", description: "Control/Burst" },
    { name: "Baxia", image: "images/Heroes/baxia.jpg", description: "Support/Damage" },
    { name: "Esmeralda", image: "images/Heroes/esmeralda.jpg", description: "Regen/Mixed Damage" },
    { name: "Gloo", image: "images/Heroes/gloo.jpg", description: "Regen/Control" },
    { name: "Chip", image: "images/Heroes/chip.jpg", description: "Support/Crowd Control" }
  ],
  support: [
    { name: "Rafaela", image: "images/Heroes/rafaela.jpg", description: "Regen/Guard" },
    { name: "Lolita", image: "images/Heroes/lolita.jpg", description: "Guard/Crowd Control" },
    { name: "Estes", image: "images/Heroes/estes.jpg", description: "Regen/Guard" },
    { name: "Diggie", image: "images/Heroes/diggie.jpg", description: "Guard/Poke" },
    { name: "Angela", image: "images/Heroes/angela.jpg", description: "Guard/Support" },
    { name: "Kaja", image: "images/Heroes/kaja.jpg", description: "Control/Charge" },
    { name: "Faramis", image: "images/Heroes/faramis.jpg", description: "Guard/Charge" },
    { name: "Carmilla", image: "images/Heroes/carmilla.jpg", description: "Crowd Control/Damage" },
    { name: "Mathilda", image: "images/Heroes/mathilda.jpg", description: "Initiator/Guard" },
    { name: "Floryn", image: "images/Heroes/floryn.jpg", description: "Poke/Guard" },
    { name: "Kalea", image: "images/Heroes/kalea.jpg", description: "Control/Regen" },
    { name: "Marcel", image: "images/Heroes/marcel.jpg", description: "Crowd Control/Support" }
  ],
  marksman: [
    { name: "Layla", image: "images/Heroes/layla.jpg", description: "Finisher/Damage" },
    { name: "Miya", image: "images/Heroes/miya.jpg", description: "Finisher/Damage" },
    { name: "Bruno", image: "images/Heroes/bruno.jpg", description: "Finisher/Burst" },
    { name: "Clint", image: "images/Heroes/clint.jpg", description: "Finisher/Burst" },
    { name: "Moskov", image: "images/Heroes/moscov.jpg", description: "Finisher/Chase" },
    { name: "Karrie", image: "images/Heroes/karrie.jpg", description: "Finisher/Damage" },
    { name: "Irithel", image: "images/Heroes/irithel.jpg", description: "Finisher/Burst" },
    { name: "Lesley", image: "images/Heroes/lesley.jpg", description: "Finisher/Burst" },
    { name: "Hanabi", image: "images/Heroes/hanabi.jpg", description: "Finisher/Damage" },
    { name: "Claude", image: "images/Heroes/claude.jpg", description: "Burst/Chase" },
    { name: "Kimmy", image: "images/Heroes/kimmy.jpg", description: "Damage/Magic Damage" },
    { name: "Granger", image: "images/Heroes/granger.jpg", description: "Burst/Finisher" },
    { name: "Wanwan", image: "images/Heroes/wanwan.jpg", description: "Finisher/Burst" },
    { name: "Popol and Kupa", image: "images/Heroes/popol and kupa.jpg", description: "Push/Burst" },
    { name: "Beatrix", image: "images/Heroes/beatrix.jpg", description: "Finisher/Damage" },
    { name: "Natan", image: "images/Heroes/natan.jpg", description: "Burst/Magic Damage" },
    { name: "Melissa", image: "images/Heroes/melissa.jpg", description: "Finisher/Damage" },
    { name: "Ixia", image: "images/Heroes/ixia.jpg", description: "Finisher/Damage" },
    { name: "Brody", image: "images/Heroes/brody.jpg", description: "Burst/Finisher" },
    { name: "Obsidia", image: "images/Heroes/obsidia.jpg", description: "Finisher/Damage" }
  ],
  fighter: [
    { name: "Alucard", image: "images/Heroes/alucard.jpg", description: "Chase/Damage" },
    { name: "Balmond", image: "images/Heroes/balmond.jpg", description: "Damage/Regen" },
    { name: "Zilong", image: "images/Heroes/zilong.jpg", description: "Chase/Damage" },
    { name: "Freya", image: "images/Heroes/freya.jpg", description: "Chase/Damage" },
    { name: "Chou", image: "images/Heroes/chou.jpg", description: "Chase/Control" },
    { name: "Sun", image: "images/Heroes/sun.jpg", description: "Push/Damage" },
    { name: "Alpha", image: "images/Heroes/alpha.jpg", description: "Charge/Damage" },
    { name: "Ruby", image: "images/Heroes/ruby.jpg", description: "Crowd Control/Regen" },
    { name: "Hilda", image: "images/Heroes/hilda.jpg", description: "Damage/Regen" },
    { name: "Lapu-Lapu", image: "images/Heroes/lapu-lapu.jpg", description: "Chase/Burst" },
    { name: "Roger", image: "images/Heroes/roger.jpg", description: "Finisher/Burst" },
    { name: "Argus", image: "images/Heroes/argus.jpg", description: "Charge/Burst" },
    { name: "Jawhead", image: "images/Heroes/jawhead.jpg", description: "Charge/Burst" },
    { name: "Martis", image: "images/Heroes/martis.jpg", description: "Finisher/Charge" },
    { name: "Thamuz", image: "images/Heroes/thamuz.jpg", description: "Chase/Damage" },
    { name: "Minsitthar", image: "images/Heroes/minsitthar.jpg", description: "Initiator/Crowd Control" },
    { name: "Badang", image: "images/Heroes/badang.jpg", description: "Charge/Burst" },
    { name: "Guinevere", image: "images/Heroes/guinevere.jpg", description: "Burst/Magic Damage" },
    { name: "Terizla", image: "images/Heroes/terizla.jpg", description: "Burst/Crowd Control" },
    { name: "X.Borg", image: "images/Heroes/xborg.jpg", description: "Regen/Burst" },
    { name: "Dyrroth", image: "images/Heroes/dyrroth.jpg", description: "Charge/Burst" },
    { name: "Masha", image: "images/Heroes/masha.jpg", description: "Push/Damage" },
    { name: "Silvanna", image: "images/Heroes/silvanna.jpg", description: "Initiator/Magic Damage" },
    { name: "Yu Zhong", image: "images/Heroes/yuzhong.jpg", description: "Regen/Damage" },
    { name: "Khaleed", image: "images/Heroes/khaleed.jpg", description: "Damage/Regen" },
    { name: "Paquito", image: "images/Heroes/paquito.jpg", description: "Chase/Damage" },
    { name: "Phoveus", image: "images/Heroes/phoveus.jpg", description: "Regen/Damage" },
    { name: "Aulus", image: "images/Heroes/aulus.jpg", description: "Damage/Crowd Control" },
    { name: "Yin", image: "images/Heroes/yin.jpg", description: "Burst/Control" },
    { name: "Fredrinn", image: "images/Heroes/fredrinn.jpg", description: "Damage/Chase" },
    { name: "Arlott", image: "images/Heroes/arlott.jpg", description: "Charge/Burst" },
    { name: "Cici", image: "images/Heroes/cici.jpg", description: "Damage/Regen" },
    { name: "Lukas", image: "images/Heroes/lukas.jpg", description: "Regen/Damage" },
    { name: "Sora", image: "images/Heroes/sora.jpg", description: "Charge/Burst" },
    { name: "Aldous", image: "images/Heroes/aldous.jpg", description: "Burst/Support" },
    { name: "Leomord", image: "images/Heroes/leomord.jpg", description: "Chase/Burst" }
  ],
  mage: [
    { name: "Valir", image: "images/Heroes/valir.jpg", description: "Damage/Guard" },
    { name: "Alice", image: "images/Heroes/alice.jpg", description: "Charge/Regen" },
    { name: "Nana", image: "images/Heroes/nana.jpg", description: "Poke/Burst" },
    { name: "Eudora", image: "images/Heroes/eudora.jpg", description: "Control/Burst" },
    { name: "Gord", image: "images/Heroes/gord.jpg", description: "Poke/Burst" },
    { name: "Kagura", image: "images/Heroes/kagura.jpg", description: "Poke/Finisher" },
    { name: "Cyclops", image: "images/Heroes/cyclops.jpg", description: "Poke/Control" },
    { name: "Aurora", image: "images/Heroes/aurora.jpg", description: "Crowd Control/Poke" },
    { name: "Vexana", image: "images/Heroes/vexana.jpg", description: "Poke/Control" },
    { name: "Harley", image: "images/Heroes/harley.jpg", description: "Burst/Poke" },
    { name: "Odette", image: "images/Heroes/odette.jpg", description: "Burst/Poke" },
    { name: "Zhask", image: "images/Heroes/zhask.jpg", description: "Chase/Damage" },
    { name: "Pharsa", image: "images/Heroes/pharsa.jpg", description: "Burst/Poke" },
    { name: "Valentina", image: "images/Heroes/valentina.jpg", description: "Burst/Finisher" },
    { name: "Chang'e", image: "images/Heroes/chang'e.jpg", description: "Poke/Burst" },
    { name: "Vale", image: "images/Heroes/vale.jpg", description: "Burst/Crowd Control" },
    { name: "Lunox", image: "images/Heroes/lunox.jpg", description: "Burst/Damage" },
    { name: "Harith", image: "images/Heroes/harith.jpg", description: "Chase/Damage" },
    { name: "Kadita", image: "images/Heroes/kadita.jpg", description: "Burst/Charge" },
    { name: "Lylia", image: "images/Heroes/lylia.jpg", description: "Push/Damage" },
    { name: "Cecilion", image: "images/Heroes/cecilion.jpg", description: "Poke/Burst" },
    { name: "Luo Yi", image: "images/Heroes/luo yi.jpg", description: "Support/Crowd Control" },
    { name: "Yve", image: "images/Heroes/yve.jpg", description: "Burst/Poke" },
    { name: "Xavier", image: "images/Heroes/xavier.jpg", description: "Damage/Guard" },
    { name: "Novaria", image: "images/Heroes/novaria.jpg", description: "Burst/Poke" },
    { name: "Zhuxin", image: "images/Heroes/zhuxin.jpg", description: "Damage/Crowd Control" },
    { name: "Zetian", image: "images/Heroes/zetian.jpg", description: "Damage/Crowd Control" },
    { name: "Bane", image: "images/Heroes/bane.jpg", description: "Push/Burst" }
  ]
};

let currentRole = null;

document.addEventListener('DOMContentLoaded', () => {
  const roleButtons = document.querySelectorAll('.role-btn');
  const searchInput = document.getElementById('hero-search');
  const heroesContainer = document.getElementById('heroes-container');
  const heroInfoPanel = document.getElementById('hero-info-panel');
  const heroInfoClose = document.getElementById('hero-info-close');
  const heroNameEl = document.getElementById('hero-name');
  const heroDescEl = document.getElementById('hero-description');

  // Закрываем панель при нажатии на крестик и при клике вне панели
  heroInfoClose.addEventListener('click', () => {
    heroInfoPanel.classList.remove('show');
    startCurrentCarouselIfPossible();
  });

  document.addEventListener('click', (event) => {
    if (!heroInfoPanel.contains(event.target) && !event.target.closest('.hero-item')) {
      heroInfoPanel.classList.remove('show');
      startCurrentCarouselIfPossible();
    }
  });

  function startCurrentCarouselIfPossible() {
    if (!currentRole) return;
    const carousel = heroesContainer.querySelector('.carousel');
    if (carousel) startCarousel(carousel);
  }

  // Обработчики кнопок ролей
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.role;
      showHeroes(role);
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRole = role;
    });
  });

  // Обработчик поиска
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    if (query) {
      searchHeroes(query);
    } else if (currentRole) {
      showHeroes(currentRole);
    } else {
      heroesContainer.innerHTML = '';
    }
  });

  // Делегированный обработчик кликов по героям (чтобы не накапливать обработчики)
  heroesContainer.addEventListener('click', (event) => {
    const item = event.target.closest('.hero-item');
    if (!item) return;

    event.stopPropagation();
    stopCarousel();

    const name = item.dataset.name;
    const desc = item.dataset.desc;

    const carousel = heroesContainer.querySelector('.carousel');
    if (carousel && carousel.contains(item)) {
      // Перемещаем карусель к выбранному герою без дополнительно анимированного scrollTo
      carousel.scrollLeft = item.offsetLeft;
    }

    heroNameEl.textContent = name;
    heroDescEl.textContent = desc;
    heroInfoPanel.classList.add('show');
  });

  // Переменные для JS-анимации карусели
  let carouselAnimationId = null;
  let setWidth = 0;

  function startCarousel(carousel) {
    stopCarousel();
    if (setWidth <= 0) return; // Безопасность, если нет героев
    // Нормализуем scrollLeft, чтобы он был в пределах одного набора
    carousel.scrollLeft %= setWidth;
    let lastTime = performance.now();
    const speed = 120; // px в секунду

    let skipFrame = false;

    function step(now) {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Уменьшаем частоту обновления, чтобы снизить нагрузку (обновляем каждый второй кадр)
      skipFrame = !skipFrame;
      if (!skipFrame) {
        carousel.scrollLeft += speed * delta;

        while (carousel.scrollLeft >= setWidth) {
          carousel.scrollLeft -= setWidth;
        }
      }

      carouselAnimationId = requestAnimationFrame(step);
    }

    carouselAnimationId = requestAnimationFrame(step);
  }

  function stopCarousel() {
    if (carouselAnimationId) {
      cancelAnimationFrame(carouselAnimationId);
      carouselAnimationId = null;
    }
  }


  // Функция отображения героев роли
  function showHeroes(role, focusName) {
    const roleHeroes = heroes[role];
    if (!roleHeroes) return;

    // Сохранить выбранную роль, чтобы можно было возобновлять карусель
    currentRole = role;

    // Если выбран герой, то помещаем его в начало
    const baseList = focusName
      ? [...roleHeroes.filter(h => h.name === focusName), ...roleHeroes.filter(h => h.name !== focusName)]
      : [...roleHeroes];

    // Рассчитываем ширину одного набора героев (150px ширина + 20px gap)
    setWidth = baseList.length * 170;

    // Чтобы лента всегда была длинной и двигалась плавно, дублируем героев несколько раз (минимум 3 набора)
    const displayHeroes = [];
    const minLength = baseList.length * 3;
    while (displayHeroes.length < minLength) {
      displayHeroes.push(...baseList);
      if (displayHeroes.length > 150) break; // безопасность
    }

    heroesContainer.innerHTML = `
      <div class="carousel">
        <div class="carousel-track">
          ${displayHeroes.map(hero => `
            <div class="hero-item" data-name="${hero.name}" data-desc="${hero.description}">
              <img src="${hero.image}" alt="${hero.name}">
              <h4>${hero.name}</h4>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const carousel = heroesContainer.querySelector('.carousel');
    if (carousel) startCarousel(carousel);

  }

  // Функция поиска героев
  function searchHeroes(query) {
    stopCarousel();

    const allHeroes = Object.values(heroes).flat();
    const filtered = allHeroes.filter(hero => hero.name.toLowerCase().includes(query));

    heroesContainer.innerHTML = `
      <div class="search-results">
        ${filtered.map(hero => `
          <div class="hero-item" data-name="${hero.name}" data-desc="${hero.description}">
            <img src="${hero.image}" alt="${hero.name}">
            <h4>${hero.name}</h4>
          </div>
        `).join('')}
      </div>
    `;

  }
});
