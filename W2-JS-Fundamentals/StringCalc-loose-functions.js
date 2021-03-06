/**
* String Calculator
*
* Given two strings that represent numbers in English -- "one", "two", "three" --
* calculate the addition, subtraction, multiplication, and division of those numbers
* and return that value as a `Number`. For example:
*
* add("one", "one") === 2
*
* For complete credit, provide test coverage for all numbers "zero" through "ten"
* for at least _two_ operations, but keep in mind that the assignment is designed
* to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
* ping-pong pairing, and commit often using `@username & @username` as the
* commit message.
*/

/*** OPERATIONS ***/

/**
* Adds 2 strings representing numbers
* in English and returns their sum
*
* @param String numberX
* @param String numberY
* @return Number sum of two numbers
*/
var add = function(numberX,numberY){
  numberX = toNumber(numberX);
  numberY = toNumber(numberY);
  return numberX + numberY;
}

/**
* Subtracts 2 strings representing numbers
* in English and returns their difference
*
* @param String numberX
* @param String numberY
* @return Number difference of two numbers
*/
var subtract = function(numberX,numberY){
  numberX = toNumber(numberX);
  numberY = toNumber(numberY);
  if (numberX-numberY >= 0) {
    return numberX-numberY;
  }
}

/**
* Multiples 2 strings representing numbers
* in English and returns their product
*
* @param String numberX
* @param String numberY
* @return Number product of two numbers
*/
var multiply = function(numberX,numberY){
  numberX = toNumber(numberX);
  numberY = toNumber(numberY);
  return numberX * numberY;
}

/**
* Divides 2 strings representing numbers
* in English and returns their quotient
*
* @param String numberX
* @param String numberY
* @return Number quotient of two numbers
*/
var divide = function(numberX,numberY){
  dividend = toNumber(numberX);
  divisor = toNumber(numberY);
  if (divisor != 0) return dividend / divisor;
}


/**
* Converts a string representing a number
* in English to its numeric equivalent
*
* @param String numberWord
* @return Number
*/
function toNumber(numberWord){
  if (numberWord === "zero") return 0;
  if (numberWord === "one") return 1;
  if (numberWord === "two") return 2;
  if (numberWord === "three") return 3;
  if (numberWord === "four") return 4;
  if (numberWord === "five") return 5;
  if (numberWord === "six") return 6;
  if (numberWord === "seven") return 7;
  if (numberWord === "eight") return 8;
  if (numberWord === "nine") return 9;
  if (numberWord === "ten") return 10;
}

/**
* Log `success` if `actual` is STRICTLY equal to `expected`
*
* @param ANY actual
* @param ANY expected
* @param String success
*/
/*
function test(actual, expected, success){
  if (success === undefined) success = actual+' >> '+expected+' pass!';
  assert.strictEqual(actual, expected);
  console.log(success);
}*/


var testValues = ['zero','one','two','three','four','five','six','seven','eight','nine'];

var i, j;
for (i = 0; i < testValues.length; i++) {
  for (j = 0; j < testValues.length; j++) {
    console.log(testValues[i],testValues[j],add(testValues[i],testValues[j]));
    console.log(testValues[i],testValues[j],multiply(testValues[i],testValues[j]));
    console.log(testValues[i],testValues[j],subtract(testValues[i],testValues[j]));
    console.log(testValues[i],testValues[j],divide(testValues[i],testValues[j]));
  }
}
