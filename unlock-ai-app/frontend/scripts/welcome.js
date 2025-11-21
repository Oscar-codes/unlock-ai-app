// Bootstrap Carousel (sin autoplay, con tacto y teclado)
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#coursesCarousel");
  if (!carousel) return; // Si no existe el carousel, salir
  
  const items = carousel.querySelectorAll(".carousel-item");
  const indicators = carousel.querySelectorAll(".carousel-indicators button");
  
  if (items.length === 0) return; // Si no hay items, salir
  
  let currentIndex = 0;

  setInterval(() => {
    // quitar clase active de item actual
    items[currentIndex].classList.remove("active");
    if (indicators.length > 0) {
      indicators[currentIndex].classList.remove("active");
    }

    // calcular siguiente índice
    currentIndex = (currentIndex + 1) % items.length;

    // activar nuevo item e indicator
    items[currentIndex].classList.add("active");
    if (indicators.length > 0) {
      indicators[currentIndex].classList.add("active");
    }
  }, 5000); // cambia cada 5s
});



/* ===== Slide to unlock (lleva a pantalla 3) ===== */
(() => {
  const slider = document.getElementById("slideButton");
  if (!slider) return;

  const handle = slider.querySelector(".slide-handle");
  let isSliding = false;

  const start = (e) => {
    isSliding = true;
    e.preventDefault();
  };
  const move = (e) => {
    if (!isSliding) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = slider.getBoundingClientRect();
    const handleWidth = handle.offsetWidth;
    const max = rect.width - handleWidth;
    const offset = Math.min(Math.max(clientX - rect.left - handleWidth / 2, 0), max);
    handle.style.left = `${offset}px`;
  };
  const end = () => {
    if (!isSliding) return;
    isSliding = false;
    const rect = slider.getBoundingClientRect();
    const left = parseFloat(handle.style.left || "0");
    const threshold = rect.width * 0.6;

    if (left > threshold) {
      // Éxito → ir a pantalla 3
      window.location.href = "../views/03-agent.html";
    } else {
      handle.style.left = "0px";
    }
  };

  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start, {passive:false});
  window.addEventListener("mousemove", move);
  window.addEventListener("touchmove", move, {passive:false});
  window.addEventListener("mouseup", end);
  window.addEventListener("touchend", end);
})();
