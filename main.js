// dark and light mode
let light = document.querySelector(".fa-adjust");
let night = document.querySelector(".fa-moon");
let affichage = document.getElementById("affichage");
let screen = document.getElementById("resulta");
let memoire = [];
let nbr = "";

affichage.value = 0;
function theme() {
  document.body.classList.toggle("light-theme");
  night.classList.toggle("display");
  light.classList.toggle("display");
}
function number(val){
  screen.value += val;
  nbr += val;
  console.log("=>" , nbr);
}
function effacer(){
  screen.value = "";
  nbr = "";
  memoire = [];
  console.log(" nbr effacer =>" , nbr);
  console.log("memoire effacer =>" , nbr);

}
function backspace(){
  var numbr = screen.value;
  screen.value = numbr.substr(0, numbr.length - 1);
  nbr = nbr.substr(0, nbr.length - 1);

  console.log("last number supprime" ,numbr);
}

function isoperateur(val){
  var last = val.length - 1;
  if (val[last] == '+' || val[last] == '-' || val[last] == '*' || val[last] == '/')
  {
    return true;
  }
  else{
    return false;
  }
}

function point(val){
  if (nbr != "" && nbr.includes(val) == false) {
    nbr += val;
    screen.value += val;
  }
}

function operateur(arg){
  if(screen.value != ""){
    if(isoperateur(screen.value) == true){
      screen.value = screen.value.substr(0 , screen.value.length - 1);
      screen.value += arg;
      memoire[memoire.length - 1] = arg;
    }
    else{
     memoire.push(parseFloat(nbr));
     screen.value += arg;
     memoire.push(arg);  
     console.log("memoire" ,memoire);
    }
    nbr = "";

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
  return nbr1 / nbr2;
}

function Modulo(nbr1, nbr2) {
  return nbr1 % nbr2;
}

function operate(nbr1, op, nbr2) {
  if (op == "+") {
    return additionner(nbr1, nbr2);
  } 
  else if (op == "-") {
    return soustraire(nbr1, nbr2);
  }
  else if (op == "*") {
    return multiplier(nbr1, nbr2);
  }
  else if (op == "/") {
    return diviser(nbr1, nbr2);
  }
  else if (op == "%") {
    return Modulo(nbr1, nbr2);
  } 
  else return 0;
}

function egal(){
  if(nbr != ""){
    memoire.push(parseFloat(nbr));
    console.log("memoire in egal",memoire);
    for(i = 1 ; i<memoire.length ; i+=2){
      if (memoire[i] == '/' && memoire[i + 1] == 0)
      {
        effacer();
        affichage.value = 0;
        alert("cannot devide by zero");
        break;
      }
      else{
        memoire[i + 1] = operate(memoire[i - 1], memoire[i], memoire[i + 1]);
      }
    }
    let res = memoire[memoire.length - 1];
    affichage.value = res;
    effacer();
  }
  
}

function validate(event) {
  if (event.keyCode < 42 || event.keyCode > 57)
    event.preventDefault();
  console.log(event.keyCode);
}