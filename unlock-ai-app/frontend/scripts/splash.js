document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("splashVideo");

  // Al terminar el video, redirige a la pantalla 2
  video.addEventListener("ended", () => {
    window.location.href = "01-welcome.html";
  });

  // Fallback: si el video dura 10s, redirige por tiempo
  setTimeout(() => {
    window.location.href = "../views/01-welcome.html";
  }, 10000);
});
