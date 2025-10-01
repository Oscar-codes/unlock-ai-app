document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const statusText = document.querySelector(".status-text");
  const labels = ["Documento listo ✅", "Extrayendo datos...", "Generando Data Set..."];

  let current = 0;

  function activateStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
    statusText.textContent = labels[index];
  }

  // Simular proceso en 3 etapas
  activateStep(0);
  setTimeout(() => activateStep(1), 2000);
  setTimeout(() => activateStep(2), 4000);
  setTimeout(() => {
    statusText.textContent = "Extracción completada ✅";
    //robotImg.src = "../assets/gif/Robot base 5 check.gif";
    // Aquí puedes redirigir a la siguiente pantalla
    window.location.href = "09-results.html";
  }, 6000);
});


// Nota: Los tiempos (3000ms, 6000ms, 9000ms) pueden ajustarse según sea necesario.