
function wordsOneDigit(a){
  if(a === 0){return "zero";}
  if(a === 1){return "one";}
  if(a === 2){return "two";}
  if(a === 3){return "three";}
  if(a === 4){return "four";}
  if(a === 5){return "five";}
  if(a === 6){return "six";}
  if(a === 7){return "seven";}
  if(a === 8){return "eight";}
  if(a === 9){return "nine";}
}

function wordsTwoDigit(b){
  if(b === 11){
    return "eleven";
  }
  if(b === 12){
    return "twelve";
  }
  if(b === 15){
    return "fifteen";
  }
}

function convertNum(c){
  var arrDigits = [];
  arrDigits = c.toString().split('');

  if (arrDigits.length)

}

console.log('if it is 1234: ',
  countsDigits(1234) === 4);

console.log('if it is 1: ',
  wordsOneDigit(1) === "one");
console.log('if it is 2: ',
  wordsOneDigit(2) === "two");
console.log('if it is 3: ',
  wordsOneDigit(3) === "three");
console.log('if it is 11: ',
  wordsTwoDigit(11) === "eleven");
console.log('if it is 12: ',
  wordsTwoDigit(12) === "twelve");
console.log('if it is 15: ',
  wordsTwoDigit(15) === "fifteen");
console.log('if it is 13: ',
  wordsTwoDigit(13) === "thirteen");
