const validator = {

    isValid: function (numero) {
        let arrayNumeros = [];
        let arreglo = [];
        let suma = 0;

        for (let i = 0; i < numero.toString().length; i++) {
            arrayNumeros.push(numero.toString()[i]);
        }
        //console.log(arrayNumeros);
        
        for (let i = 0; i < arrayNumeros.length; i++) {
            arreglo.push(parseInt(arrayNumeros[i]));
            //console.log(arreglo.length);
        }
        arreglo.reverse();

        for (let i = 1; i < 16; i += 2) {
            arreglo[i] = arreglo[i] * 2;

                if (arreglo[i] > 9) {
                    arreglo[i] =
                    parseInt(arreglo[i].toString()[0]) + parseInt(arreglo[i].toString()[1]);
                }
        }

        for (let i = 0; i < 16; i++) {
            suma += arreglo[i];
        }
        //console.log(suma);

        if (suma % 10 == 0) {
            return true;
        } else {
            return false;
        }
    },
 
    maskify: function (Real) {
        let Mostrar = "";
        //console.log(Real);
        for (let index = 0; index < Real.length; index++) {
          if (index < Real.length - 4) {
            Mostrar += "*";
          } else {
            Mostrar = Mostrar + Real[index];
          }
        }      
        return Mostrar;
    }
};


export default validator;