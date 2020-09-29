
const ticTac = {

 winConditions : [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ],
 playerSelection : [2,4,6],
 checkWin : function(){
 const sameChar=[];
   for (var d = 0; d < this.winConditions.length; d++) {
      const arr1 = this.winConditions[d];
      const arr2 =  this.playerSelection;
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
console.log(result);

}
}
