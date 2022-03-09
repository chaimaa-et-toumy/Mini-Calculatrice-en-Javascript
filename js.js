// dark and light mode
let light = document.querySelector(".fa-adjust");
let night = document.querySelector(".fa-moon");
let p = false;

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

function point() {
  if (!p) {
    // p==false
    document.getElementById("resulta").value += ".";
    p = true;
  }
}

function additionner(nbr1, nbr2) {
  return nbr1 + nbr2;
}

function soustraire(nbr1, nbr2) {
  return nbr1 - nbr2;
}

function multiplier(nbr1, nbr2) {
  return nbr1 * nbr2;
}

function diviser(nbr1, nbr2) {
  // isNan => 0/0
  if (nbr2 == 0 || isNaN(nbr2)) {
    window.alert("Cannot divide by zero");
    document.getElementById("resulta").value = "";
  } else {
    return nbr1 / nbr2;
  }
}
function Modulo(nbr1, nbr2) {
  return nbr1 % nbr2;
}
function egal() {
  let x = document.getElementById("resulta").value;
  let y = eval(x);
  document.getElementById("resulta").value = y;
}
function operate(nbr1, nbr2, operateur) {
  if (operateur == "+") {
    return additionner(nbr1, nbr2);
  } else if (operateur == "-") {
    return soustraire(nbr1, nbr2);
  } else if (operateur == "*") {
    return multiplier(nbr1, nbr2);
  } else if (operateur == "/") {
    return diviser(nbr1, nbr2);
  } else if (operateur == "%") {
    return Modulo(nbr1, nbr2);
  } else {
    return false;
  }
}
