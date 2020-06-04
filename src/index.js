import validator from './validator.js';

console.log(validator);

const numeroTarjeta = document.getElementById ('entradaNumero');
var arregloNumero = []

numeroTarjeta.addEventListener ('keyup', (e) => {
  var inputNumero = e.target.value;  

  numeroTarjeta.value = inputNumero

  .replace(/\s/g, '')  // elimina los espacios
  .replace(/\D/g, '')  // elimina las letras
  .replace(/([0-9]{4})/g, '$1 ');  //agrupa los numero de a 4

  console.log(numeroTarjeta.value)
 }
)
  
 /* arregloNumero.forEach(function(element,index,arreglo){
    let number = parseInt(element);
    console.log(number);    
  })  */


