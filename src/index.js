var tarjeta = ""

function enmascarador() {
    var Real = document.getElementById("entradaNumero").value
    
    var Mostrar = ""

    if(Real.length> tarjeta.length)
        tarjeta = tarjeta + Real[Real.length-1]
    else
        tarjeta = tarjeta.slice(0,-1)
    
        console.log(Real, "    ", tarjeta)

    for (let index = 0; index < Real.length; index++) {
        if (index < 12)
        {
            Mostrar=Mostrar + "*"
        }
        else
        {
            Mostrar=Mostrar + Real[index]
        }
        //console.log(Mostrar)
        
    }

    document.getElementById("entradaNumero").value=Mostrar
    document.getElementById("contenedor").innerHTML= Mostrar

}
function ingresarNombre(){

    var nombre=document.getElementById("entradaNombre").value
    document.getElementById("name").innerHTML= nombre.toUpperCase() 

}
 function pulsarboton(){

    var pantalla= document.getElementById("pantalla2")
    pantalla.style.display="block"

    var pantalla1=document.getElementById("pantalla1")
    pantalla1.style.display="none"
 }












// import validator from './validator.js';

// console.log(validator);

// const numeroTarjeta = document.getElementById ('entradaNumero');

// let inputNumero;

// numeroTarjeta.addEventListener ('keyup', (e) => {
//   inputNumero = e.target.value;  

//   numeroTarjeta.value = inputNumero

//   .replace(/\s/g, '')  // elimina los espacios
//   .replace(/\D/g, '')  // elimina las letras
//   .replace(/([0-9]{4})/g, '$1 ');  //agrupa los numero de a 4

//   console.log(numeroTarjeta.value)
//  }
// )
  
 /* arregloNumero.forEach(function(element,index,arreglo){
    let number = parseInt(element);
    console.log(number);    
  })  */


