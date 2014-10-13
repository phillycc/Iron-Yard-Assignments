/** Check writing
*
* Given a Number representing money -- $1234.56 -- convert
* that into its string representation in English words. For
* example, 1234.56 is "one thousand, two hundred thirty four
* and 56/100s", just like you would see on a check.
*
* In a lot of ways, this is the inverse of the "String Calculator"
* problem, so a lot of what you've learned there will be put into
* practice here, but backwards. Yey.
*/

/** Sample Data:
* 1234.56 => "one thousand, two hundred thirty four, and 56/100s"
* 123.45 => "one hundred twenty three and 45/100s"
* 12.34 => "twelve and 34/100s"
* 1.23 => "one and 23/100s"
*
*Extra credit:
*
* 12345678.90 =>
* "twelve million, three hundred fourt five thousand, six hundred
* seventy eight and 90/100s"

* Make up your own, too.
*/

function checkWriteOutput(){
  var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  var teens = ["ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var hundreds = " hundred";
  var thousands = " thousand";
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

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('checkWriteOutput()', function(){
    it('should be a type of function named checkWriteOutput()', function(){
        assert.typeOf(checkWriteOutput,'function');
    });
    it('should take a Number and return the written English dollar & cents equivalent', function(){
        assert.equal(checkWriteOutput().toEnglish(0),'zero 00/100 dollars');
        assert.equal(checkWriteOutput().toEnglish(19),'nineteen 00/100 dollars');
        assert.equal(checkWriteOutput().toEnglish(1234.56),'one thousand two hundred thirty four 56/100 dollars');
    });
    it('should take a Number and not return the written English dollar & cents equivalent', function(){
        assert.notEqual(checkWriteOutput().toEnglish(0),'zero 25/100 dollars');
        assert.notEqual(checkWriteOutput().toEnglish(19),'ten 00/100 dollars');
        assert.notEqual(checkWriteOutput().toEnglish(1234.56),'one thousand one hundred thirty four 56/100 dollars');
    });
    it('should take a Number and return the strict equivalent written English dollar & cents format', function(){
        assert.strictEqual(checkWriteOutput().toEnglish(0),'zero 00/100 dollars');
        assert.strictEqual(checkWriteOutput().toEnglish(19),'nineteen 00/100 dollars');
        assert.strictEqual(checkWriteOutput().toEnglish(1234.56),'one thousand two hundred thirty four 56/100 dollars');
    });
});

/*
describe('tens[ ], list that stores strings of multiples of 10 in English', function(){
    it('should be an array', function(){
        assert.isArray(tens,'array');
    });
    it('should be an array that has at least one array item', function(){
        assert.isNotNull(tens,[ 'zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety' ]);
    });
    it('should contain String items', function(){
        assert.isString(tens[0],'zero');
    });
    it('expect array item to be a String', function(){
        expect(tens[0]).to.be.a('string');
    });
    it('expect array to include a String', function(){
        expect(tens).to.include('ten');
    });
    it('should be an array of multiples of 10 between 0 and 90', function(){
        assert.deepEqual(tens,[ 'zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety' ]);
    });
    it('expect array item[0] is greater than item[1]', function(){
        expect(tens[0]).to.be.above(tens[1]);
    });
    it('expect array length to be 10', function(){
        expect(tens).to.have.length(10);
    });
    it('expect array length to be less 11', function(){
        expect(tens).to.have.length.below(11);
    });
    it('expect array include subset', function(){
        expect(tens).to.include.members(['zero','twenty']);
    });
    it('array item should be a string and equal "ten"', function(){
        tens[1].should.be.a('string').and.equal('ten');
    });
    it('should have length 10', function(){
        tens.should.have.length(10);
    });
});
*/
/*
var testCases = [
  [19, "nineteen and 00/100 dollars"],
  [0, "zero and 00/100 dollars"],
  [1234.56, "one thousand two hundred thirty four and 56/100s dollars"],
]
*/
//testCases.forEach(function(testCase)){
//  var actual = numChange(testCase[0]),expected = testCase[1];
//  assert.strictEqual(actual,expected);
//}

//console.log(numChange(1234.56))
