let ope='';
let Localidad="en-US";
let numero1=0;

const pi=3.1415926535897932384626433832795;

document.addEventListener('DOMContentLoaded',()=>{
    let display=document.getElementById('_display');
  
    display.setAttribute('readonly',true);
    display.value=0;

//Mover el div de calculadora

    _Calculadora.onmousedown = (event)=>{
        _Calculadora.style.position = 'absolute';
        _Calculadora.style.zIndex = 1000;

        //document.body.append(_Calculadora);
  
        function moveAt(pageX, pageY){
          _Calculadora.style.left = pageX - _Calculadora.offsetWidth / 2 + 'px';
          _Calculadora.style.top = pageY - _Calculadora.offsetHeight / 2 + 'px';
         
        }
  
        //Mueve todo el div directamente 
       // moveAt(event.pageX, event.pageY);
  
        function onMouseMove(event){
          moveAt(event.pageX,event.pageY);
        }
  
        document.addEventListener('mousemove',onMouseMove);
  
        _Calculadora.onmouseup = ()=>{
          document.removeEventListener('mousemove',onMouseMove);
          _Calculadora.onmouseup = null;
        } 

      }
  
      _Calculadora.ondragstart = ()=>{
        return false;
      }
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

                    if (display.value.replace(',','').split(ope) != 0)
                    {
                        numero1 = display.value.replace(',','').split(ope);
                    }
                    
                display.value='';
            }

        if (elementos.value === 'pi')
            elementos.value = pi;

        if (display.value == 0 && display.value !== '.' && display.value !=='0.' )
            display.value = '';

            display.value += elementos.value;
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