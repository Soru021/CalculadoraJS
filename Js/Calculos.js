class Operaciones{

    
    constructor(valor1=0,valor2=0,...otrosValores){
        this.valor1=valor1;
        this.valor2=valor2;
        this.otrosValores=otrosValores;
    }

    Suma(){

        let resultado=parseFloat(this.valor1) + parseFloat(this.valor2); 
    
        this.otrosValores.forEach((elementos)=>{
            resultado += parseFloat(this.otrosValores);
        });
    
        return resultado;
    }
    
    Resta(){
        let resultado = parseFloat(this.valor1) - parseFloat(this.valor2); 
    
        this.otrosValores.forEach((elementos)=>{
            resultado -= parseFloat(this.otrosValores);
        });
    
        return resultado;
    }
    
    Multiplicacion(){
        let resultado=parseFloat(this.valor1) * parseFloat(this.valor2); 
    
        this.otrosValores.forEach((elementos)=>{
            resultado *= parseFloat(this.otrosValores);
        });
    
        return resultado;
    }
    
    Division(){
        let resultado=parseFloat(this.valor1) / parseFloat(this.valor2); 

        if (this.valor2 != 0){

            this.otrosValores.forEach(()=>{
                resultado /= parseFloat(this.otrosValores);
            });
            
        }else resultado=0

    
     return resultado;
    
    }
    
    Modulo(){
    
        return parseFloat(this.valor1) % parseFloat(this.valor2);
    
    }
    
    Porcientos(){
    
        return parseFloat(this.valor1) * (parseInt(this.valor2) / 100);
    
    }
}