import validator from './validator.js';

//console.log(validator.isValid);

//Definicion de variables
let numeroTarjeta = document.getElementById("entradaNumero");
let botonValidar = document.getElementById("btnValidar");
let mensajeValidacion = document.getElementById("mensaje");
let botonComprar = document.getElementById("mensajeBoton");
let botonNext = document.getElementById("botonNext")
let inputNumero;
let pantalla = document.getElementById("pantalla2");
let pantalla1 = document.getElementById("pantalla1");

//Declaracion de eventos
botonValidar.addEventListener('click', validar);
botonNext.addEventListener('click', pulsarBoton);

numeroTarjeta.addEventListener("keyup", recibirNumero);

function recibirNumero(evento) {
  mensajeValidacion.innerHTML = "";
  inputNumero = evento.target.value;
  let enmascarado = numeroTarjeta.value;

  enmascarado = validator.maskify(inputNumero);

  document.getElementById("contenedor").innerHTML = enmascarado.replace(
    /([*,0-9]{4})/g,
    "$1 "
  );

  numeroTarjeta.value = inputNumero

    .replace(/\s/g, "") // elimina los espacios
    .replace(/\D/g, ""); // elimina las letras
  
  //console.log(inputNumero);

  if (inputNumero.length > 15) {
    botonValidar.style.display = "block";
  }
}

function validar() {  
  if (validator.isValid(inputNumero) == true) {
    mensajeValidacion.innerHTML = "Tu tarjeta es valida para comprar";
    botonComprar.style.display = "block";
  } else {
    mensajeValidacion.innerHTML = "Tu tarjeta NO es valida";
    numeroTarjeta.value = "";
    botonValidar.style.display = "none";
  }
}

function ingresarNombre() {
  let nombre = document.getElementById("entradaNombre").value;
  document.getElementById("name").innerHTML = nombre.toUpperCase();
}

function pulsarBoton() {  
  pantalla.style.display = "block";  
  pantalla1.style.display = "none";
}
