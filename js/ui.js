function addText() {
  const txt = document.getElementById("textInput").value;
  const font = document.getElementById("fontSelect").value;
  const div = document.createElement("div");
  div.textContent = txt;
  div.style.position = "absolute";
  div.style.left = "100px";
  div.style.top = "100px";
  div.style.fontFamily = font;
  div.style.color = "white";
  div.style.background = "rgba(0,0,0,0.5)";
  div.style.padding = "4px";
  div.style.borderRadius = "4px";
  div.draggable = true;
  div.ondragend = (e) => {
    div.style.left = e.pageX + "px";
    div.style.top = e.pageY + "px";
  };
  document.body.appendChild(div);
}
