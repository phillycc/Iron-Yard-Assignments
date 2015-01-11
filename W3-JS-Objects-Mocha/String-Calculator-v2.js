var assert = require('assert');

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
  var words = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };

  return {
    fromEnglish : function(wordA, wordB){
      return words[wordA] * words[wordB];
    },
  }
}

/*
suite('stringCalc()', function(){
    for (var word1 in stringCalc().words){
       for (var word2 in stringCalc().words){
           test('should multiply ' +word1+ ' and '+word2, function(){
               assert.strictEqual(stringCalc().fromEnglish(word1,word2),words[word1]*words[word2]);
           });
       }
    }
});*/

suite('stringCalc()', function(){
    test('should multiply "zero" and "zero"', function(){
        assert.equal(stringCalc().fromEnglish('zero','zero'),0);
    });
    test('should multiply "one" and "one"', function(){
        assert.equal(stringCalc().fromEnglish('one','one'),1);
    });
    test('should multiply "one" and "two"', function(){
        assert.equal(stringCalc().fromEnglish('one','two'),2);
    });
    test('should multiply "one" and "three"', function(){
        assert.equal(stringCalc().fromEnglish('one','three'),3);
    });
    test('should multiply "one" and "four"', function(){
        assert.equal(stringCalc().fromEnglish('one','four'),4);
    });
    test('should multiply "nine" and "nine"', function(){
        assert.equal(stringCalc().fromEnglish('nine','nine'),81);
    });
    test('should multiply "ten" and "ten"', function(){
        assert.equal(stringCalc().fromEnglish('ten','ten'),100);
    });
});
