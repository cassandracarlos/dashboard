function initWeatherWidget() {
  const el = document.querySelector(".weather-data");
  if (el) {
    el.textContent = "Sunny, 22°C";
  }
}

initWeatherWidget();
