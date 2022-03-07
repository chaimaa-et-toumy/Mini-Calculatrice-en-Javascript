// dark and light mode
let light = document.querySelector(".fa-adjust");
let night = document.querySelector(".fa-moon");

function theme() {
  document.body.classList.toggle("light-theme");
  night.classList.toggle("display");
  light.classList.toggle("display");
}
