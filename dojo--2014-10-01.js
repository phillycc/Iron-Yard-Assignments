
function convertToWords(a){
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

console.log('if it is 1: ',
  convertToWords(1) === "one");
console.log('if it is 2: ',
  convertToWords(2) === "two");
console.log('if it is 3: ',
  convertToWords(3) === "three");
console.log('if it is 11: ',
  convertToWords(11) === "eleven");
