var assert = require('assert');



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

/*describe('mulitply()', function(){
    it('should multiply "one" and "one"', function(){
        assert.equal(multiply('one','one'),1);
    });
    it('should multiply "one" and "two"', function(){
        assert.equal(multiply('one','two'),2);
    });
    it('should multiply "one" and "three"', function(){
        assert.equal(multiply('one','three'),3);
    });
    it('should multiply "one" and "four"', function(){
        assert.equal(multiply('one','four'),4);
    });
    it('should multiply "zero" and "zero"', function(){
        assert.equal(multiply('zero','zero'),0);
    });
});*/

describe('mulitply()', function(){
    letterNum.forEach(function(a, i){
        letterNum.forEach(function(b, j){
          it('should multiply ' +a+ ' and '+b, function(){
              assert.equal(multiply(a,b),i*j);
          });

          //console.log(a+' '+b+' '+i*j);
      });
    });
});


letterNum.forEach(function(a, i){
    letterNum.forEach(function(b, j){
      //console.log(a+' '+b+' '+i*j);
  });
});
