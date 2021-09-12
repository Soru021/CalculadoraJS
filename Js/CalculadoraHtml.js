let ope='';

const pi=3.1415926535897932384626433832795;
const e=2.7182818284590452353602874713527;

function Clear(){
  let boton=document.getElementById('_display');
  boton.value='';
  boton.focus();
}

function ObtenerValor(elementos){

    let display = document.getElementById('_display');

    if ( !Number.parseFloat(elementos.value))
        ope=elementos.value;

        if (elementos.value==='pi')
        elementos.value=pi;
        else if(elementos.value==='e')
        elementos.value=e;

        display.value +=elementos.value;
}

function Resultado(){
    let result= document.getElementById('_display').value.split(`${ope}`);
    let total=0;

    let datos= new Operaciones(result[0],result[1]);

    switch (ope) {
        case '+':
            total=datos.Suma();
            break;
        case '-':
            total=datos.Resta();
            break;
        case 'x':
            total=datos.Multiplicacion();
            break;
        case '/':
            total=datos.Division();
            break;
        default:
            break;
    }

  document.getElementById('_display').value=total;

}