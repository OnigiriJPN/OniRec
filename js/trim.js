function trimVideo() {
  const video = document.getElementById("editVideo");
  const start = parseFloat(document.getElementById("startTime").value);
  const end = parseFloat(document.getElementById("endTime").value);
  if (isNaN(start) || isNaN(end) || start >= end) {
    alert("正しい開始・終了時間を指定してください");
    return;
  }
  video.currentTime = start;
  video.play();
  setTimeout(() => video.pause(), (end - start) * 1000);
}
