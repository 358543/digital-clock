function updateTime() {
  const now = new Date();

  // Convert to Philippine Standard Time (UTC+8)
  const options = { timeZone: 'Asia/Manila', hour12: false };
  const timeInManila = now.toLocaleTimeString('en-US', options);

  // Update the clock display
  document.getElementById('time').textContent = timeInManila;
}

// Update the clock every second
setInterval(updateTime, 1000);
updateTime();
