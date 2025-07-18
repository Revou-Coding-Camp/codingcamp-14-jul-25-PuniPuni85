document.addEventListener("DOMContentLoaded", function () {
  const buttonEl = document.getElementById("surpriseBtn");
  const countdownEl = document.getElementById("countdown");
  const overlay = document.getElementById("countdown-overlay");
  const countdownTimer = document.getElementById("countdown-timer");

  buttonEl.addEventListener("click", function () {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "kejutan.html";
    }, 800);
  });

  function updateCountdown() {
    const targetDate = new Date("2025-06-25T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.innerText = "Selamat Ulang Tahun! 🎉";
      countdownTimer.innerText = "Selamat Ulang Tahun! 🎉";
      overlay.classList.add("hidden");
      buttonEl.disabled = false;
      buttonEl.style.opacity = "1";
      buttonEl.style.cursor = "pointer";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const countdownText = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik lagi 🎂`;

    countdownEl.innerText = countdownText;
    countdownTimer.innerText = countdownText;

    buttonEl.disabled = true;
    buttonEl.style.opacity = "0.5";
    buttonEl.style.cursor = "not-allowed";
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  function createBalloon(side) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = `${Math.random() * 90}%`;
    balloon.style.animationDuration = (4 + Math.random() * 4) + 's';

    const container = document.querySelector(`.balloons-${side}`);
    if (container) {
      container.appendChild(balloon);
      setTimeout(() => balloon.remove(), 8000);
    }
  }

  setInterval(() => {
    createBalloon('left');
    createBalloon('right');
  }, 500);
});

setTimeout(() => {
  const ucapanEl = document.querySelector('.ucapan');
  if (ucapanEl) {
    ucapanEl.classList.remove('hidden');
    ucapanEl.classList.add('show');
  }
}, 4000); // 3 detik delay candle + 1 detik animasi

