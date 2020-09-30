
$(document).ready(function(){
  let selectedItemsX = [];
  let selectedItemsO = [];
$('#playAgain').on('click',function(){
  selectedItemsX = [];
  selectedItemsO = [];
  $('#messageBox').text("");
  $('.square').removeClass("x");
  $('.square').removeClass("o");
  player = "x";
  let gameStatus = "start" ;
  $('h2').text(gameStatus);
  startGame();
});

const startGame = function (){
$('.square').on('click',function(){
if (player === "x") {
$(this).addClass("x");
selectedItemsX.push(this.id);
checkWin(selectedItemsX);
player = "o";
}else{
$(this).addClass("o");
selectedItemsO.push(this.id);
checkWin(selectedItemsO);
player = "x";
    }
  });
}


let player = "";
const  checkWin = function(playerSelection){
const   winConditions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
   let sameChar = [];
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
let result = "";
if (sameChar.includes(3)) {
  result = "win";
} else {
  result="loose";
}
if (result === "win") {
  $('#messageBox').text(`Winner is : ${player} `);
   $('.square').off("click");
}
}

});
