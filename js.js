// dark and light mode
let light = document.querySelector(".fa-adjust");
let night = document.querySelector(".fa-moon");

function theme() {
  document.body.classList.toggle("light-theme");
  night.classList.toggle("display");
  light.classList.toggle("display");
}
// affichage
function number(val) {
  var number = val;
  document.getElementById("resulta").value += number;
}
function effacer() {
  document.getElementById("resulta").value = "";
}
function backspace() {
  var numbr = document.getElementById("resulta").value;
  document.getElementById("resulta").value = numbr.substr(0, numbr.length - 1);
}
