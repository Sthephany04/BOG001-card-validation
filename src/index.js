import validator from './validator.js';



//console.log(validator.isValid);

//Definicion de variables
let numeroTarjeta = document.getElementById("entradaNumero");
let botonValidar = document.getElementById("btnValidar");
let mensajeValidacion = document.getElementById("mensaje");
let botonComprar = document.getElementById("botonComprar");
let botonNext = document.getElementById("botonNext")
let botonCompraExitosa = document.getElementById("compraExitosa");
let pantalla1 = document.getElementById("pantalla1");
let pantalla2 = document.getElementById("pantalla2");
let pantalla3 = document.getElementById("pantalla3");
let nombrePersona = document.getElementById("entradaNombre")
let contenedorTarjetaNumero = document.getElementById("contenedor");
let contenedorTarjetaNombre = document.getElementById("name")
let nombre;
let inputNumero;

//Declaracion de eventos
botonValidar.addEventListener('click', validar);
botonNext.addEventListener('click', pulsarBoton);
botonComprar.addEventListener('click', comprar);
botonCompraExitosa.addEventListener('click', regresar);
nombrePersona.addEventListener('keyup', ingresarNombre);
numeroTarjeta.addEventListener("keyup", recibirNumero);

//Funcion que recibe el numero del input
function recibirNumero(evento) {
  let enmascarado = numeroTarjeta.value;
  nombre = nombrePersona.value; 
  //mensajeValidacion.innerHTML = "";      //Reinicia en blanco el input de ingresar numero
  //nombrePersona.innerHTML = "";          //Reinicia en blanco el input de ingresar nombre

  inputNumero = evento.target.value;

  enmascarado = validator.maskify(inputNumero);   //Se llama a la funcion de enmascarar numero

  contenedorTarjetaNumero.innerHTML = enmascarado.replace(    //Reemplaza el espacio de la Tarjeta agrupando de a 4 numeros
    /([#,0-9]{4})/g,
    "$1 "
  );

  numeroTarjeta.value = inputNumero
  
  .replace(/\s/g, "")  // elimina los espacios
  .replace(/\D/g, ""); 
   
}



function validar() {          //Funcion que activa un mensaje y boton dependiendo el resultado de la  funcion isValid
  if (validator.isValid(inputNumero) == true) {
    mensajeValidacion.innerHTML = "Tu tarjeta es valida para comprar";
    botonComprar.style.display = "block";
  } else {
    mensajeValidacion.innerHTML = "Tu tarjeta NO es valida";
    numeroTarjeta.value = "";
    nombrePersona.value = "";
    botonValidar.style.display = "none";
  }
}

function ingresarNombre() {    //Reemplaza en la tarjeta el nombre ingresado en el input y pasa el nombre a mayusculas
  nombre = nombrePersona.value;

  if (nombre.length > 2 && inputNumero.length > 15) {
    botonValidar.style.display = "block";
  }
  contenedorTarjetaNombre.innerHTML = nombre.toUpperCase();
}

function pulsarBoton() {       //Boton pag 1
  pantalla2.style.display = "block";  
  pantalla1.style.display = "none";
  mensajeValidacion.innerHTML = "";
  botonValidar.style.display = "none";
  botonComprar.style.display = "none";
}

function comprar() {
  pantalla3.style.display = "block";
  pantalla2.style.display = "none";
}

function regresar() {
  pantalla1.style.display = "block";
  pantalla3.style.display = "none";
  numeroTarjeta.value = "";
  nombrePersona.value = "";
  contenedorTarjetaNombre.innerHTML = "-------------------";
  contenedorTarjetaNumero.innerHTML = "#### #### #### ####";
}