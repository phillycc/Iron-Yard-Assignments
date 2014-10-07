
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

var letterNum = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];

var multiply = function(a,b){
  a = letToNum(a);
  b = letToNum(b);
  return a * b;
}

var print = function (a,b,c) {
console.log('it should multiply "' + a + '" and "' + b + '": ',
  multiply(a, b) === c);
}


var iCount=0;
letterNum.forEach(function(i){
  var jCount=0;
    letterNum.forEach(function(j){
      print(i, j, iCount*jCount);
      jCount++;
  });
  iCount++;
});


//for (var j = 1; j <= 10; j++){
//  for (var i = 0; i < letterNum.length; i++){
//    print(letterNum[j], letterNum[i], i*j);
//  }
//}
