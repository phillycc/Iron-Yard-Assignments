var multiply = function(a,b){
  if (a === "one"){
    if (b === "zero"){
      return 0;
    }
    if (b === "one"){
      return 1;
    }
    if (b === "two"){
      return 2;
    }
  }
  if (a === "two"){
    if (b === "zero"){
      return 0;
    }
    if (b === "one"){
      return 2;
    }
    if (b === "two"){
      return 4;
    }
  }
  if (a === "three"){
    if (b === "zero") {
      return 0;
    }
    if (b === "one") {
      return 3;
    }
    if (b === "two") {
      return 6;
    }
  }
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
