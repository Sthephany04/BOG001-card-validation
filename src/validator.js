const validator = {
 
};

function enmascarar(valor){
    let enmasc = valor.replace(/\d{4}(?= \d{4})/g, "****");
    return enmasc
}

export default validator;