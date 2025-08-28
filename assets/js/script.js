// Loads dark theme
document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("sl-theme-dark");
  }
  document.querySelector('.card-img')?.setAttribute('slot', 'image');
  document.querySelector('.footer')?.setAttribute('slot', 'footer');
});

// Countdown timer
const id = setInterval(timer, 1000);

function timer() {
    const target = new Date('Jan 1, 3000, 00:00:00').getTime(); // Target date
    const current = new Date().getTime();
    const diff = target - current;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    let days = Math.floor(diff / d);
    let hr = Math.floor((diff % d) / h);
    let min = Math.floor((diff % h) / m);
    let sec = Math.floor((diff % m) / s);

    document.querySelector('.days').textContent = days;
    document.querySelector('.hr').textContent = hr;
    document.querySelector('.min').textContent = min;
    document.querySelector('.sec').textContent = sec;

    if (diff <= 0) {
        clearInterval(id);
        document.querySelector('.days').textContent = '0';
        document.querySelector('.hr').textContent = '0';
        document.querySelector('.min').textContent = '0';
        document.querySelector('.sec').textContent = '0';
    }
}

timer();