var assert = require('chai').assert;

/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition or multiplication of those numbers and return that value
 * as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * It should implement a fromEnglish() function that translates String to Number in
 * a single step
**/


function stringCalc(){
  var words = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10
  }

  return {
    fromEnglish : function(wordA, wordB){
      return words[wordA] * words[wordB];
    },
  }
}

//************ TEST CODE ************//

suite('stringCalc()', function(){
    test('should multiply "zero" and "zero"', function(){
        assert.equal(stringCalc().fromEnglish('zero','zero'),0);
    });
    test('should multiply "zero" and "nine"', function(){
        assert.equal(stringCalc().fromEnglish('zero','nine'),0);
    });
    test('should multiply "one" and "nine"', function(){
        assert.equal(stringCalc().fromEnglish('one','nine'),9);
    });
    test('should multiply "two" and "nine"', function(){
        assert.equal(stringCalc().fromEnglish('two','nine'),18);
    });
    test('should multiply "three" and "nine"', function(){
        assert.equal(stringCalc().fromEnglish('three','nine'),27);
    });
    test('should multiply "four" and "nine"', function(){
        assert.equal(stringCalc().fromEnglish('four','nine'),36);
    });
    test('should multiply "five" and "nine"', function(){
      assert.equal(stringCalc().fromEnglish('five','nine'),45);
    });
    test('should multiply "six" and "nine"', function(){
      assert.equal(stringCalc().fromEnglish('six','nine'),54);
    });
    test('should multiply "seven" and "nine"', function(){
      assert.equal(stringCalc().fromEnglish('seven','nine'),63);
    });
    test('should multiply "eight" and "nine"', function(){
      assert.equal(stringCalc().fromEnglish('eight','nine'),72);
    });
    test('should multiply "nine" and "nine"', function(){
      assert.equal(stringCalc().fromEnglish('nine','nine'),81);
    });
    test('should multiply "ten" and "nine"', function(){
      assert.equal(stringCalc().fromEnglish('ten','nine'),90);
    });
    test('should multiply "ten" and "ten"', function(){
        assert.equal(stringCalc().fromEnglish('ten','ten'),100);
    });
});
