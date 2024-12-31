function updateTime() {
  const now = new Date();

  // Convert to Philippine Standard Time (UTC+8)
  const options = { timeZone: 'Asia/Manila', hour12: false };
  const hours = now.toLocaleString('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', hour12: false });
  const minutes = now.toLocaleString('en-US', { timeZone: 'Asia/Manila', minute: '2-digit' });
  const seconds = now.toLocaleString('en-US', { timeZone: 'Asia/Manila', second: '2-digit' });

  // Format the clock as 6:09:xx
  const formattedTime = `${parseInt(hours)}:${minutes}:${seconds}`;

  // Update the clock display
  document.getElementById('time').textContent = formattedTime;
}

// Update the clock every second
setInterval(updateTime, 1000);
updateTime();
