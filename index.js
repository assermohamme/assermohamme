function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("modeIcon");
    icon.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
  }