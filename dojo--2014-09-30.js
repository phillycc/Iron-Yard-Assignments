var multiply = function(a,b){
  if (b === "one") {
    return 1;
  }
  return 0;
}
console.log('it should multiply "one" and "zero": ',
  multiply("one","zero") === 0);
console.log('it should multiply "one" and "one": ',
  multiply("one","one") === 1);
console.log('it should multiply "one" and "two": ',
  multiply("one", "two") === 2);
console.log('it should multiply "one" and "zero": ',
  multiply("two","zero") === 0);
console.log('it should multiply "one" and "one": ',
  multiply("two","one") === 2);
console.log('it should multiply "one" and "two": ',
  multiply("two", "two") === 4);
console.log('it should multiply "one" and "zero": ',
  multiply("three","zero") === 0);
console.log('it should multiply "one" and "one": ',
  multiply("three","one") === 1);
console.log('it should multiply "one" and "two": ',
  multiply("three", "two") === 6);
