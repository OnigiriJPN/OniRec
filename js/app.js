let mediaRecorder, recordedChunks = [];
async function startRecording() {
  const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => recordedChunks.push(e.data);
  mediaRecorder.onstop = saveRecording;
  mediaRecorder.start();
}
function stopRecording() {
  mediaRecorder.stop();
}
function saveRecording() {
  const blob = new Blob(recordedChunks, { type: 'video/webm' });
  const url = URL.createObjectURL(blob);
  const list = JSON.parse(localStorage.getItem("recordings") || "[]");
  const name = "recording-" + Date.now();
  list.push({ name, url });
  localStorage.setItem("recordings", JSON.stringify(list));
  updateRecordingList();
}
function startTimer() {
  const sec = parseInt(document.getElementById("timerInput").value);
  if (isNaN(sec) || sec <= 0) return alert("正しい秒数を入力してください");
  setTimeout(startRecording, sec * 1000);
}
function submitTerms() {
  if (!document.getElementById("agree").checked) return alert("同意が必要です");
  fetch("https://example.com/agree", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ agreed: true })
  }).then(() => alert("送信完了"));
}
window.onload = () => updateRecordingList();
function updateRecordingList() {
  const container = document.getElementById("recordingList");
  container.innerHTML = "";
  const list = JSON.parse(localStorage.getItem("recordings") || "[]");
  list.forEach(({ name, url }) => {
    const div = document.createElement("div");
    div.innerHTML = \`\${name} <a href="\${url}" download>▶︎ ダウンロード</a>\`;
    container.appendChild(div);
  });
}
