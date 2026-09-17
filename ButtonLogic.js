const button = document.getElementById("myButton");

button.addEventListener("onMouseover", function() {
  moveButton();
});

function moveButton() {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}