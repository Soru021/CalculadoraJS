let ope='';
let Localidad="en-US";
let numero1=0;

const pi=3.1415926535897932384626433832795;

document.addEventListener('DOMContentLoaded',()=>{
    let display=document.getElementById('_display');
  
    display.setAttribute('readonly',true);
    display.value=0;
});

function Clear(){
  let boton=document.getElementById('_display');
  boton.value=0;
}

function Quitar(){
    let display=Array.from(document.getElementById('_display').value);
    let letra="";

    for(let i=0; i < display.length - 1; i++ ){
        letra +=display[i];
    }

    if (letra.length === 0)
        letra=0;

    document.getElementById('_display').value=letra;

}

function ObtenerValor(elementos){

    let display = document.getElementById('_display');

    if ( !Number.parseFloat(elementos.value) && Number.parseFloat(elementos.value) !==0 && elementos.value !== '.')
        {
            ope=elementos.value;
            numero1=display.value.replace(',','').split(ope);
            display.value='';
        }

        if (elementos.value === 'pi')
            elementos.value = pi;

        if (display.value == 0 && elementos.value !== '.')
            display.value='';

            display.value +=elementos.value;
}

function Resultado(){
    let result= document.getElementById('_display').value.split(`${ope}`);
    let total=0;
    
    let datos= new Operaciones(numero1,result[1]);

    switch (ope) {
        case '+':
            total=datos.Suma();
            break;
        case '-':
            total=datos.Resta();
            break;
        case 'x' || '*':
            total=datos.Multiplicacion();
            break;
        case '/':
            total=datos.Division();
            break;
        case '%':
            total=datos.Porcientos();
            break;
        default:
            break;
    }

  document.getElementById('_display').value=total.toLocaleString(Localidad);

}