
$(document).ready(function(){
  let selectedItemsX = [];
  let selectedItemsO = [];
  let winnerX=[];
  let winnerO=[];
  let player = "";
  $('#so').on('click',function(){
      player = "o";
  });
  $('#sx').on('click',function(){
    //debugger;
      player = "x";
     //$('#sx').off("click")
  });

  //on clicking play button game resets and the method startGame is called
$('#playAgain').on('click',function(){
  //debugger;
  selectedItemsX = [];
  selectedItemsO = [];
  $('#messageBox').text("");
  $('.square').removeClass("x");
  $('.square').removeClass("o");
  if (player == "") {
    alert("Choose a player!");
    throw 'null player';
  }
  let gameStatus = "start" ;
  startGame();
});
// this function replys to the player click and sets the choosen items array
const startGame = function (){
$('.square').on('click',function(){
//debugger;
if (player === "x") {
$(this).addClass("x");
selectedItemsX.push(this.id);
checkWin(selectedItemsX);
player = "o";
}else if(player === "o"){
$(this).addClass("o");
selectedItemsO.push(this.id);
checkWin(selectedItemsO);
player = "x";
    }
  });
}

//this function compares the selected array with the winConditions array to see if winConditions contain selected array or not

const  checkWin = function(playerSelection){
const   winConditions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
   let sameChar = [];
   let result = "";
   for (var d = 0; d < winConditions.length; d++) {
      const arr1 = winConditions[d];
      const arr2 =  playerSelection;
      const finalArray = [];
       for (var i = 0; i < arr1.length; i++) {
       for (var j = 0; j < arr2.length; j++) {
         if (arr1[i] == arr2[j]) {
           finalArray.push(arr1[i]);
         }
       }
     }
    sameChar.push(finalArray.length);
   }

if (sameChar.includes(3)) {
  result = "win";
   } else {
  result="loose";
}

if (result === "win") {
  $('#messageBox').text(`Winner is : ${player} `);
  if (player == 'x') {
    winnerX.push(1);
    $('.tablex').append('<td class="setsq"></td>');
  } else {
    winnerO.push(1);
    $('.tableo').append('<td class="setsq" ></td>');
  }
  $('.square').off("click");
   player = "";
  // debugger;
   throw 'round finished';
}
}

});
