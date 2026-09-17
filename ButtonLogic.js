const button = document.getElementById("myButton");

button.addEventListener("mouseover", function() {
  moveButton();
});

function moveButton() {
  let x = Math.random() * (window.innerWidth - button.offsetWidth);
  let y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}