

var assert = require('assert');

var words = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };

var multiply = {
  wordsToNum : function(wordA, wordB){
    return words[wordA] * words[wordB];
  }
}

suite('mulitply()', function(){
    for (var word1 in words){
       for (var word2 in words){
           test('should multiply ' +word1+ ' and '+word2, function(){
               assert.strictEqual(multiply.wordsToNum(word1,word2),words[word1]*words[word2]);
           });
       }
    }
});

/*suite('mulitply()', function(){
    test('should multiply "one" and "one"', function(){
        assert.equal(multiply('one','one'),1);
    });
    test('should multiply "one" and "two"', function(){
        assert.equal(multiply('one','two'),2);
    });
    test('should multiply "one" and "three"', function(){
        assert.equal(multiply('one','three'),3);
    });
    test('should multiply "one" and "four"', function(){
        assert.equal(multiply('one','four'),4);
    });
    test('should multiply "zero" and "zero"', function(){
        assert.equal(multiply('zero','zero'),0);
    });
});*/
