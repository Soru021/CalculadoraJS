
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
const drawMessage = ()=> `Game ended in a draw`;
const currentPlayerTurn =()=> `It's ${currentPlayer} 's turn`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickCell, clickIndex){
  gameState[clickIndex]=currentPlayer;
  clickCell.innerHTML = currentPlayer;
}

function handlePlayerChange(){

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();

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
    gameActive=false;
    return;
  }

  let roundDraw = !gameState.includes('');

  if (roundDraw){
    statusDisplay.innerHTML = drawMessage();
    gameState=false;
    return;
  }

  handlePlayerChange();

}

function handleCellClick(clickedCellEvent){
  const click=clickedCellEvent.target;

  const clickIndex=parseInt(click.getAttribute('data-cell-index'));

  if (gameState[clickIndex] !== "" || !gameActive){
    return;
  }


  handleCellPlayed(click,clickIndex);
  handleResultValidation();

}

function handleRestartGame(){
  gameActive = true;
  currentPlayer = "X";
  gameState = ["","","","","","","","","",];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.linea1').forEach(linea => linea.innerHTML="");
}

document.querySelectorAll('.linea1').forEach(linea => linea.addEventListener('click',handleCellClick));
document.querySelector('.game-restart').addEventListener('click',handleRestartGame);
});



