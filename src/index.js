//import validator from './validator.js';

//console.log(validator);

let numeroTarjeta = document.getElementById("entradaNumero");
let botonValidar = document.getElementById("btnValidar");
let mensajeValidacion = document.getElementById("mensaje");
let botonComprar = document.getElementById("mensajeBoton");
botonValidar.addEventListener("click", validar);
let inputNumero;
let arreglo = [];

numeroTarjeta.addEventListener("keyup", recibirNumero);

function recibirNumero(evento) {
  mensajeValidacion.innerHTML = "";
  inputNumero = evento.target.value;

  numeroTarjeta.value = inputNumero

    .replace(/\s/g, "") // elimina los espacios
    .replace(/\D/g, "") // elimina las letras
    .replace(/([0-9]{4})/g, "$1 "); //agrupa los numero de a 4

  //console.log(inputNumero);

  if (inputNumero.length > 18) {
    botonValidar.style.display = "block";
  }
}

function validar() {
  pasarArreglo(inputNumero);
  //console.log(arreglo);
  luhn();
}

function pasarArreglo(numero) {
  let arrayNumeros = [];
  for (let i = 0; i < numero.toString().length; i++) {
    arrayNumeros.push(numero.toString()[i]);
  }

  //console.log(arrayNumeros);
  arrayNumeros = arrayNumeros.filter((i) => i !== " "); // quitamos los espacios
  //console.log(arrayNumeros.length);

  for (let i = 0; i < arrayNumeros.length; i++) {
    arreglo.push(parseInt(arrayNumeros[i]));
    //console.log(arreglo.length);
  }
  arreglo.reverse();
}

function luhn() {
  let suma = 0;
  for (let i = 1; i < 16; i += 2) {
    arreglo[i] = arreglo[i] * 2;

    if (arreglo[i] > 9) { 
      //console.log(arreglo[i]);
      //console.log(arreglo[i].toString()[0]);
      //console.log(arreglo[i].toString()[1]);
      arreglo[i] = parseInt(arreglo[i].toString()[0]) + parseInt(arreglo[i].toString()[1])
    }
  }
  for (let i = 0; i < 16; i++) {
    suma += arreglo[i];    
  }
  //console.log(suma);
  
  if ((suma % 10) == 0) {
    mensajeValidacion.innerHTML = "Tu tarjeta es valida para comprar"; 
    botonComprar.style.display = "block";

  } else {
    mensajeValidacion.innerHTML = "Tu tarjeta NO es valida"; 
    numeroTarjeta.value = "";
    botonValidar.style.display = "none";
  }
}

