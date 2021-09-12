class Operaciones{

    constructor(valor1,valor2,...otrosValores){
        this.valor1=valor1;
        this.valor2=valor2;
        this.otrosValores=otrosValores;
    }

    Suma(){

        let resultado=parseFloat(this.valor1) + parseFloat(this.valor2); 
    
        otrosValores.forEach((elementos)=>{
            resultado += parseFloat(this.otrosValores);
        });
    
        return resultado;
    }
    
    Resta(){
        let resultado = parseFloat(this.valor1) - parseFloat(this.valor2); 
    
        otrosValores.forEach((elementos)=>{
            resultado -= parseFloat(this.otrosValores);
        });
    
        return resultado;
    }
    
    Multiplicacion(){
        let resultado=parseFloat(this.valor1) * parseFloat(this.valor2); 
    
        otrosValores.forEach((elementos)=>{
            resultado *= parseFloat(this.otrosValores);
        });
    
        return resultado;
    }
    
    Division(){
    
        let resultado=parseFloat(this.valor1) / parseFloat(this.valor2); 
    
        otrosValores.forEach(()=>{
            resultado /= parseFloat(this.otrosValores);
        });
    
     return resultado;
    
    }
    
    Modulo(){
    
        return parseFloat(this.valor1) % parseFloat(this.valor2);
    
    }
    
    Porcientos(valor1=0,valor2=0){
    
        return parseFloat(this.valor1) * (parseInt(this.valor2) / 100);
    
    }
}