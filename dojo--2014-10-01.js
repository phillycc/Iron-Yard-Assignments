
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
  if (a===1){
      if (b===1){return "eleven";}
      if (b===2){return "twelve";}
      if (b===3){return "thirteen";}
      if (b===4){return "fourteen";}
      if (b===5){return "fifteen";}
      if (b===6){return "sixteen";}
      if (b===7){return "seventeen";}
      if (b===8){return "eighteen";}
      if (b===9){return "nineteen";}
  }
  if (a===2){
      if (b===0){return "twenty";
      } else {return "twenty "+wordsOneDigit(b);}
  }
  if (a===3){
      if (b===0){return "thirty";
    } else {return "thirty "+wordsOneDigit(b);}
  }
  if (a===4){
      if (b===0){return "forty";
    } else {return "forty "+wordsOneDigit(b);}
  }
  if (a===5){
      if (b===0){return "fifty";
    } else {return "fifty "+wordsOneDigit(b);}
  }
  if (a===6){
      if (b===0){return "sixty";
    } else {return "sixty "+wordsOneDigit(b);}
  }
  if (a===7){
      if (b===0){return "seventy";
    } else {return "seventy "+wordsOneDigit(b);}
  }
  if (a===8){
      if (b===0){return "eighty";
    } else {return "eighty "+wordsOneDigit(b);}
  }
  if (a===9){
      if (b===0){return "ninety";
      } else {return "ninety "+wordsOneDigit(b);}
  }
}

function wordsThreeDigit(a,b,c){
  if (a===1){
      if(b===0 || c===0){
        return "one hundred"
      } else {return "one hundred "+wordsTwoDigit(b,c);}
  }
  if (a===2){
      if(b===0 || c===0){
        return "two hundred"
      } else {return "two hundred "+wordsTwoDigit(b,c);}
  }
  if (a===3){
      if(b===0 || c===0){
      return "three hundred"
    } else {return "three hundred "+wordsTwoDigit(b,c);}
  }
  if (a===4){
      if(b===0 || c===0){
        return "four hundred"
      } else {return "four hundred "+wordsTwoDigit(b,c);}
  }
  if (a===5){
      if(b===0 || c===0){
      return "five hundred"
    } else {return "five hundred "+wordsTwoDigit(b,c);}
  }
  if (a===6){
      if(b===0 || c===0){
      return "six hundred"
    } else {return "six hundred "+wordsTwoDigit(b,c);}
  }
  if (a===7){
      if(b===0 || c===0){
      return "seven hundred"
    } else {return "seven hundred "+wordsTwoDigit(b,c);}
  }
  if (a===8){
      if(b===0 || c===0){
      return "eight hundred"
    } else {return "nine hundred "+wordsTwoDigit(b,c);}
  }
  if (a===9){
      if(b===0 || c===0){
        return "nine hundred"
      } else {return "nine hundred "+wordsTwoDigit(b,c);}
  }
}

function convertNum(c){
  var arrDigits = [];
  arrDigits = c.toString().split('');

  if (arrDigits.length === 1){
    return wordsOneDigit(Math.floor(arrDigits[0]));
  }
  if (arrDigits.length === 2){
    return wordsTwoDigit(Math.floor(arrDigits[0]),Math.floor(arrDigits[1]));
  }
  if (arrDigits.length === 3){
    return wordsThreeDigit(Math.floor(arrDigits[0]),Math.floor(arrDigits[1]),Math.floor(arrDigits[2]));
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
console.log('if it is 101: ',
  convertNum(101) === "one hundred one");
