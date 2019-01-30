function init () {
 'use strict';
 function select(){
   var findNum = Number(this.id.slice(4));
   var player = this.classList[1];
   var top = (findNum - 5);
   var down = (findNum + 5);
   var left = (findNum - 1);
   var right = (findNum + 1);
   //console.log(this.classList[1]);
   function move (){
     document.getElementById('cell' + findNum).classList.remove(player);
     document.getElementById('cell' + findNum).removeEventListener('click', select);
     if(down <= 25){
       document.getElementById('cell' + down).style.borderColor = "white";
       document.getElementById('cell' + down).removeEventListener('click', move);
     }
     if(top > 0) {
       document.getElementById('cell' + top).style.borderColor = "white";
       document.getElementById('cell' + top).removeEventListener('click', move);
     }
     if((findNum % 5) - 1 != 0) {
       document.getElementById('cell' + left).style.borderColor = "white";
       document.getElementById('cell' + left).removeEventListener('click', move);
     }
     if((findNum % 5) != 0) {
       document.getElementById('cell' + right).style.borderColor = "white";
       document.getElementById('cell' + right).removeEventListener('click', move);
     }
     document.getElementById(this.id).classList.add(player);
     document.getElementById(this.id).style.borderColor = "white";
     document.getElementById(this.id).addEventListener('click', select);
   }
   if(down <= 25){
     document.getElementById('cell' + down).style.borderColor = "green";
     document.getElementById('cell' + down).addEventListener('click', move);
   }
   if(top > 0) {
     document.getElementById('cell' + top).style.borderColor = "green";
     document.getElementById('cell' + top).addEventListener('click', move);
   }
   if((findNum % 5) - 1 != 0) {
     document.getElementById('cell' + left).style.borderColor = "green";
     document.getElementById('cell' + left).addEventListener('click', move);
   }
   if((findNum % 5) != 0) {
     document.getElementById('cell' + right).style.borderColor = "green";
     document.getElementById('cell' + right).addEventListener('click', move);
   }
}

  document.getElementById('cell5').classList.add("player1");
  document.getElementById('cell5').addEventListener('click', select);

  document.getElementById('cell21').classList.add("player2");
  document.getElementById('cell21').addEventListener('click', select);
}

window.addEventListener('load', init);
