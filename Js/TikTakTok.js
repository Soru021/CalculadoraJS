
document.addEventListener('DOMContentLoaded',()=>{

//Mover el div de calculadora

    _TikTakTok.onmousedown = (event)=>{
        _TikTakTok.style.position = 'absolute';
        _TikTakTok.style.zIndex = 1000;

        //document.body.append(_Calculadora);
  
        function moveAt(pageX, pageY){
            _TikTakTok.style.left = pageX - _TikTakTok.offsetWidth / 2 + 'px';
            _TikTakTok.style.top = pageY - _TikTakTok.offsetHeight / 2 + 'px';
         
        }
  
        //Mueve todo el div directamente 
       // moveAt(event.pageX, event.pageY);
  
        function onMouseMove(event){
          moveAt(event.pageX,event.pageY);
        }
  
        document.addEventListener('mousemove',onMouseMove);
  
        _TikTakTok.onmouseup = ()=>{
          document.removeEventListener('mousemove',onMouseMove);
          _TikTakTok.onmouseup = null;
        } 

      }
  
      _Calculadora.ondragstart = ()=>{
        return false;
      }

      //Juego TikTakTok
const statusDisplay= document.querySelector('.game-status');
let gameActive=true;
let currentPlayer = "X";
let gameState = ["","","","","","","","","",];
const winningMessage = ()=> `Player ${currentPlayer}`;
const drawMessage = ()=> `Empate`;
const currentPlayerTurn =()=> `It's ${currentPlayer} 's turn`;

statusDisplay.innerHTML = currentPlayerTurn();

function GenerarRandom(){
  return Math.floor((Math.random() * (8 - 0 + 1)) + 0);
}

function handleCellPlayed(clickCell, clickIndex){

  currentPlayer= "X";
  gameState[clickIndex]=currentPlayer;
  clickCell.innerHTML = currentPlayer;


  handleResultValidation();


  let posicion = 0;
  let numero = 9;

  while(numero > 0){
    posicion = GenerarRandom();
     if (gameState[posicion] == "")
     {
       break;
     }
     numero--;
  }

  console.log(posicion)
  currentPlayer = "O";
  gameState[posicion] = currentPlayer;
  document.querySelector(`[data-cell-index="${posicion}"]`).innerHTML = currentPlayer

}

function handlePlayerChange(){

  currentPlayer = currentPlayer === "X" ? "O" : "X";
//  statusDisplay.innerHTML = currentPlayerTurn();

}

const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];

function handleResultValidation(){
  let roundwon=false;

  for( let i=0; i<7; i++){
    const winningCondition = winningConditions[i];

    let a = gameState[winningCondition[0]];
    let b = gameState[winningCondition[1]];
    let c = gameState[winningCondition[2]];

    if (a === '' || b === '' || c === ''){
      continue;
    }

    if (a === b && b === c){
      roundwon=true;
      break;
    }
  }

  if (roundwon){
    statusDisplay.innerHTML=winningMessage();
    document.querySelector('.mensage').classList.remove('Mostrar');
    gameActive=false;
    return;
  }

  let roundDraw = !gameState.includes('');

  if (roundDraw){
    statusDisplay.innerHTML = drawMessage();
    document.querySelector('.mensage').classList.remove('Mostrar');
    gameState=false;
    return;
  }

}

function handleCellClick(clickedCellEvent){
  const click=clickedCellEvent.target;

  const clickIndex=parseInt(click.getAttribute('data-cell-index'));


  if (gameState[clickIndex] !== "" || !gameActive){
    return;
  }

  handleCellPlayed(click,clickIndex);
}

function handleRestartGame(){
  gameActive = true;
  currentPlayer = "X";
  gameState = ["","","","","","","","","",];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.linea1').forEach(linea => linea.innerHTML="");
  document.querySelector('.mensage').classList.add('mensage','Mostrar');
}

document.querySelectorAll('.linea1').forEach(linea => linea.addEventListener('click',handleCellClick));
document.querySelector('.game-restart').addEventListener('click',handleRestartGame);
});



