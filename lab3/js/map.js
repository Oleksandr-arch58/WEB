const buttons = document.querySelectorAll('.tabBtn');
const img = document.getElementById('mapImage');
const caption = document.getElementById('mapCaption');

const ORIGINAL_W = 2340;
const ORIGINAL_H = 1080;

let isAnimating = false;

function scaleAllMaps() {
  const scaleX = img.clientWidth / ORIGINAL_W;
  const scaleY = img.clientHeight / ORIGINAL_H;

  document.querySelectorAll('area[data-coords]').forEach(area => {
    const raw = area.dataset.coords.split(',').map(n => parseFloat(n.trim()));
    const scaled = raw.map((v, i) => {
      const s = (i % 2 === 0) ? scaleX : scaleY;
      return Math.round(v * s);
    });
    area.coords = scaled.join(',');
  });
}

function switchMap(src, title, mapName) {
  isAnimating = true;
  img.classList.add('is-fading');

  setTimeout(() => {
    const preloader = new Image();

    preloader.onload = () => {
      img.src = src;
      img.alt = "Карта: " + title;
      img.useMap = "#" + mapName;
      caption.textContent = "Сейчас выбрано: " + title;

      requestAnimationFrame(() => {
        scaleAllMaps();
        img.classList.remove('is-fading');
        setTimeout(() => {
          isAnimating = false;
        }, 300);
      });
    };

    preloader.onerror = () => {
      img.classList.remove('is-fading');
      caption.textContent = "Ошибка загрузки изображения";
      isAnimating = false;
    };

    preloader.src = src;
  }, 280);
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return;
    if (isAnimating) return;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    switchMap(btn.dataset.src, btn.dataset.title, btn.dataset.map);
  });
});

img.addEventListener('load', scaleAllMaps);

window.addEventListener('resize', () => {
  clearTimeout(window.resizeTimer);
  window.resizeTimer = setTimeout(scaleAllMaps, 80);
});

const coordBox = document.createElement("div");
coordBox.style.position = "fixed";
coordBox.style.bottom = "20px";
coordBox.style.left = "20px";
coordBox.style.padding = "8px 12px";
coordBox.style.background = "rgba(0,0,0,0.7)";
coordBox.style.color = "#fff";
coordBox.style.fontFamily = "monospace";
coordBox.style.borderRadius = "6px";
coordBox.style.zIndex = "9999";
coordBox.innerText = "coords: 0,0";
document.body.appendChild(coordBox);

img.addEventListener("mousemove", function(e) {
  const rect = img.getBoundingClientRect();

  const x = Math.round((e.clientX - rect.left) * (2340 / rect.width));
  const y = Math.round((e.clientY - rect.top) * (1080 / rect.height));

  coordBox.innerText = "coords: " + x + "," + y;
});

img.addEventListener("click", function(e) {
  const rect = img.getBoundingClientRect();

  const x = Math.round((e.clientX - rect.left) * (2340 / rect.width));
  const y = Math.round((e.clientY - rect.top) * (1080 / rect.height));

  console.log("coords:", x + "," + y);
  alert("coords: " + x + "," + y);
});