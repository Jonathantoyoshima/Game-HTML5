function init () {
 'use strict';
 var turn = Math.round(Math.random()) + 1;

 function select(evt) {
   var findNum = Number(evt.target.id.slice(4)),
       player = evt.target.classList[1],
       top = findNum - 5,
       down = findNum + 5,
       left = findNum - 1,
       right = findNum + 1;
   //console.log(this.classList[1]);

   function playAction(evt){
     function move (evt){
       document.getElementById('cell' + findNum).classList.remove(player);
       document.getElementById('cell' + findNum).removeEventListener('click', select);

       document.getElementById(evt.target.id).classList.add(player);
       document.getElementById(evt.target.id).style.borderColor = "white";
     }

     function kill(evt){
       document.getElementById(evt.target.id).classList.remove(evt.target.classList[1]);
     }

     function clearSelection(ref, fn) {
       document.getElementById('cell' + ref).style.borderColor = "white";
       document.getElementById('cell' + ref).removeEventListener('click', fn);
     }

     if(down <= 25){
       clearSelection(down, playAction);
     }
     if(top > 0) {
       clearSelection(top, playAction);
     }
     if((findNum % 5) - 1 !== 0) {
       clearSelection(left, playAction);
     }
     if((findNum % 5) !== 0) {
       clearSelection(right, playAction);
     }

     if(evt.target.classList[1]) {
       kill(evt);
     } else {
       move(evt);
       getTurn();
     }
   }

   function action(ref){
     document.getElementById('cell' + ref).style.borderColor = "green";
     document.getElementById('cell' + ref).addEventListener('click', playAction);
   }

   if(down <= 25){
     action(down);
   }
   if(top > 0) {
     action(top);
   }
   if((findNum % 5) - 1 !== 0) {
     action(left);
   }
   if((findNum % 5) !== 0) {
     action(right);
   }
}

function getTurn() {
  document.querySelector('.turn').innerHTML = "Turn : " + turn;
  if(turn === 1) {
    document.querySelector('.player1').addEventListener('click', select);
    turn = 2;
  } else {
    document.querySelector('.player2').addEventListener('click', select);
    turn = 1;
  }
}

  document.getElementById('cell5').classList.add("player1");
  document.getElementById('cell21').classList.add("player2");

  getTurn();
}

window.addEventListener('load', init);
