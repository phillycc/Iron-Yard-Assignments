
function letToNum(y){
  if (y === "zero"){return 0;}
  if (y === "one"){return 1;}
  if (y === "two"){return 2;}
  if (y === "three"){return 3;}
  if (y === "four"){return 4;}
  if (y === "five"){return 5;}
  if (y === "six"){return 6;}
  if (y === "seven"){return 7;}
  if (y === "eight"){return 8;}
  if (y === "nine"){return 9;}
  if (y === "ten"){return 10;}
}

var multiply = function(a,b){
  a = letToNum(a);
  b = letToNum(b);
  return a * b;
}


console.log('it should multiply "one" and "zero": ',
  multiply("one","zero") === 0);
console.log('it should multiply "one" and "one": ',
  multiply("one","one") === 1);
console.log('it should multiply "one" and "two": ',
  multiply("one", "two") === 2);
console.log('it should multiply "two" and "zero": ',
  multiply("two","zero") === 0);
console.log('it should multiply "two" and "one": ',
  multiply("two","one") === 2);
console.log('it should multiply "two" and "two": ',
  multiply("two", "two") === 4);
console.log('it should multiply "three" and "zero": ',
  multiply("three","zero") === 0);
console.log('it should multiply "three" and "one": ',
  multiply("three","one") === 3);
console.log('it should multiply "three" and "two": ',
  multiply("three", "two") === 6);
console.log('it should multiple "four" and "zero": ',
  multiply("four", "zero") === 0);
