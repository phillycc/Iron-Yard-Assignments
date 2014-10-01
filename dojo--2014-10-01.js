
function wordsOneDigit(a){
  if(a === 1){
    return "one";
  }
  if(a === 2){
    return "two";
  }
  if(a === 3){
    return "three";
  }
}

function wordsTwoDigit(b){
  if(b === 11){
    return "eleven";
  }
}



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
