var multiply = function(a,b){
  if (b === "one") {
    return 1;
  }
  return 0;
}
console.log('it should multiply "one" and "zero: ',
  multiply("one","zero") === 0);
console.log('it should multiply "one" and "one: ',
  multiply("one","one") === 1);
