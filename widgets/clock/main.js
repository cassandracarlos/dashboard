function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById("clock-display").textContent = timeString;
}

updateClock(); // initial call
setInterval(updateClock, 1000);
