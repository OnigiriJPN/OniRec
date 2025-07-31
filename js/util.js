function simulateLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    document.getElementById("progress").style.width = \`\${progress}%\`;
    if (progress >= 100) clearInterval(interval);
  }, 300);
}
const canvas = document.getElementById("audioMeter");
if (canvas) {
  const ctx = canvas.getContext("2d");
  setInterval(() => {
    const level = Math.random() * canvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#4FC3F7";
    ctx.fillRect(0, canvas.height - level, canvas.width, level);
  }, 100);
}
