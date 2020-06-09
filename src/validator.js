const validator = {

    isValid: function (numero) {
        let arreglo = [];
        let suma = 0;

        for (let i = 0; i < numero.length; i++) {  //ingresar el numero a un arreglo
            arreglo.push(parseInt(numero[i]));
            //console.log(arreglo);
        }
        
        arreglo.reverse();     //metodo reverse, invertir el arreglo
        //console.log(arreglo);

        for (let i = 1; i < arreglo.length; i += 2) {   //ciclo para multiplicar cada dos posiciones * 2
            arreglo[i] = arreglo[i] * 2;
                
                if (arreglo[i] > 9) {        //condicional si el numero es mayor a dos cifras se suman sus digitos
                    //console.log(arreglo[i], arreglo[i].toString()[0], arreglo[i].toString()[1], "total:", parseInt(arreglo[i].toString()[0]) + parseInt(arreglo[i].toString()[1]));
                    arreglo[i] =
                    parseInt(arreglo[i].toString()[0]) + parseInt(arreglo[i].toString()[1]);
                   
                }
            }

        for (let i = 0; i < arreglo.length; i++) {  //ciclo para sumar todos los terminos del arreglo
            suma += arreglo[i];
            //console.log(suma);
        }

        if (suma % 10 == 0) {      //condicional que retona verdadero o falso de la validacion
            return true;
        } else {
            return false;
        }
    },
 
    maskify: function (Real) {
        let Mostrar = "";
        //console.log(Real);
        for (let i = 0; i < Real.length; i++) {
          if (i < Real.length - 4) {        
            Mostrar += "#";
          } else {
            Mostrar += Real[i];
          }
        }      
        //console.log(Mostrar);
        return Mostrar;
    }
};


export default validator;


