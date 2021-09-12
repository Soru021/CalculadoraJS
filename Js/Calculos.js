function Suma(valor1=0, valor2=0, ...otrosValores){

    let resultado=parseFloat(valor1) + parseFloat(valor2); 

    otrosValores.forEach((elementos)=>{
        resultado += parseFloat(otrosValores);
    });

    return resultado;
}

function Resta(valor1=0, valor2=0, ...otrosValores){
    let resultado = parseFloat(valor1) - parseFloat(valor2); 

    otrosValores.forEach((elementos)=>{
        resultado -= parseFloat(otrosValores);
    });

    return resultado;
}

function Multiplicacion(valor1=0,valor2=0, ...otrosValores){
    let resultado=parseFloat(valor1) * parseFloat(valor2); 

    otrosValores.forEach((elementos)=>{
        resultado *= parseFloat(otrosValores);
    });

    return resultado;
}

function Division(valor1=0,valor2=0,...otrosValores){

    let resultado=parseFloat(valor1) / parseFloat(valor2); 

    otrosValores.forEach(()=>{
        resultado /= parseFloat(otrosValores);
    });

 return resultado;

}

function Modulo(valor1=0,valor2=0){

    return parseFloat(valor1) % parseFloat(valor2);

}

function Porcientos(valor1=0,valor2=0){

    return parseFloat(valor1) * (parseInt(valor2) / 100);

}