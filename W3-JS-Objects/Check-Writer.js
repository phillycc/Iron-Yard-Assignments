var assert = require('chai').assert;

/**
 * Check writing
 *
 * Given a Number representing money -- $1234.56 -- convert
 * that into its string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * It should implement a toEnglish() function that translates
 * Number to String in a single step
**/

function checkWriteOutput(){
  var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  var teens = ["ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var hundreds = " hundred";
  var thousands = " thousand,";
  return{
    toEnglish: function(amount){
        amount = Number(amount).toFixed(2);
        var checkEnd = ' ' + amount.slice(-2) + '/100 dollars';
        var dollars = amount.slice(0,-3);

        if (dollars < 20) {
            return ones[dollars] + checkEnd;
        }
        else if (dollars < 100) {
            if (dollars % 10 === 0) {
              return tens[dollars[0]] + checkEnd;
            } else {
              return tens[dollars[0]] + " " + ones[dollars[1]] + checkEnd;
            }
        }
        else if (dollars < 1000) {
            if (dollars % 100 === 0) {
              return ones[dollars[0]] + hundreds + checkEnd;
            }
            else if (dollars % 10 === 0) {
              return ones[dollars[0]] + hundreds + " " + tens[dollars[1]] + checkEnd;
            }
            else if (dollars[2] < 2) {
              return ones[dollars[0]] + hundreds + " "  + teens[dollars[2]] + checkEnd;
            } else {
              return ones[dollars[0]] + hundreds + " "  + tens[dollars[1]] + " " + ones[dollars[2]] + checkEnd;
            }
        }
        else if (dollars < 10000) {
            if (dollars % 1000 === 0) {
              return ones[dollars[0]] + thousands + checkEnd;
            }
            else if (dollars % 100 === 0) {
              return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + checkEnd;
            }
            else if (dollars % 10 === 0) {
              return ones[dollars[0]] + thousands + " " + ones[dollars[1]] + hundreds + " " + tens[dollars[2]] + checkEnd;
            }
            else if (dollars[2] < 2) {
              return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + " " + teens[dollars[3]] + checkEnd;
            } else {
              return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + " "  + tens[dollars[2]] + " " + ones[dollars[3]] + checkEnd;
            }
        }
     },
  }
}


//************** TEST ******************

describe('checkWriteOutput()', function(){
    it('should be a type of function named checkWriteOutput()', function(){
        assert.typeOf(checkWriteOutput,'function');
    });
    it('should take a Number and return the written English dollar & cents equivalent', function(){
        assert.equal(checkWriteOutput().toEnglish(0),'zero 00/100 dollars');
        assert.equal(checkWriteOutput().toEnglish(1),'one 00/100 dollars');
        assert.equal(checkWriteOutput().toEnglish(1.2),'one 20/100 dollars');
        assert.equal(checkWriteOutput().toEnglish(12.34),'twelve 34/100 dollars');
        assert.equal(checkWriteOutput().toEnglish(123.45),'one hundred twenty three 45/100 dollars');
        assert.equal(checkWriteOutput().toEnglish(1234.56),'one thousand, two hundred thirty four 56/100 dollars');
    });
});
