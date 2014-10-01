
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

function wordsTwoDigit(a,b){

  a = Math.floor(a);
  b = Math.floor(b);
  for(j=1;j<=9;j++){
    for(k=0;k<=9;k++){
        
    }
  }

  if (a===1){
      if (b===1){
        return "eleven";
      }
      else if (b===2){
        return "twelve";
      }
      else {
        return "thirteen";
      }
  }
  if (a===2){
      if (b===0){
        return "twenty";
      } else {
        return "twenty "+wordsOneDigit(b);
      }
  }
  if (a===9){
      if (b===0){
        return "ninety";
      } else {
        return "ninety "+wordsOneDigit(b);
      }
  }
}

function convertNum(c){
  var arrDigits = [];
  arrDigits = c.toString().split('');

  if (arrDigits.length === 1){
    wordsOneDigit(c);
  }
  if (arrDigits.length === 2){
    var num = wordsTwoDigit(arrDigits[0],arrDigits[1]);
    return num;
  }
}

console.log('if it is 11: ',
  convertNum(11) === "eleven");
console.log('if it is 22: ',
  convertNum(22) === "twenty two");
console.log('if it is 20: ',
  convertNum(20) === "twenty");
console.log('if it is 98: ',
  convertNum(98) === "ninety eight");
console.log('if it is 123: ',
  convertNum(123) === "one hundred twenty three");
