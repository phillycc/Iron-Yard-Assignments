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

var ones = ["zero", "one", "two", "three", "four", "five", "six",
"seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
"fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
"nineteen"];

var teens = ["zero", "eleven", "twelve", "thirteen", "fourteen",
"fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var tens = ["zero", "ten", "twenty", "thirty", "forty", "fifty",
"sixty", "seventy", "eighty", "ninety"];

var hundreds = ["zero", "one hundred", "two hundred", "three hundred",
"four hundred", "five hundred", "six hundred", "seven hundred",
"eight hundred", "nine hundred"];

var thousands = ["zero", "one thousand", "two thousand", "three thousand",
"four thousand", "five thousand", "six thousand", "seven thousand",
"eight thousand", "nine thousand"];

function numChange(a){

  var value = a.toString()
  value = Number(value).toFixed(2);

  var cents=value.slice(-2)
  var dollars = value.slice(0,-3).split("");
  var centsEnglish = cents + '/100s dollars';

    if (a < 20){return(ones[a]+" and "+centsEnglish)}; //for numbers 0-19

    if (a < 100){                 //for numbers 20-99
      if (a % 10 === 0){
        return(tens[value[0]]+" and "+centsEnglish);
      }
      return(tens[value[0]] +" "+ ones[value[1]] +" and "+centsEnglish)
    };

    if (a < 1000){                 //for numbers 100-999
      if (a % 100 === 0){
        return(hundreds[value[0]]);
      }
        if (a % 10 === 0){     //numbers between 100-999 and divisible by 10
        return(hundreds[value[0]]+" "+ tens[value[1]]+" and "+centsEnglish);
        }
          if (value[1] < 2) {   //hundreds digits, _10 < x < _20
          return(hundreds[value[0]] +" "+ teens[value[2]]+" and "+centsEnglish);
          }
      return(hundreds[value[0]] +" "+ tens[value[1]] +" "+ ones[value[2]]+" and "+centsEnglish)
    }

  if (a < 10000){
    if (a % 1000 === 0){return(thousands[value[0]]+" and "+centsEnglish);}
      if (a % 100 === 0){return(thousands[value[0]] +" "+ hundreds[value[1]]+" and "+centsEnglish);}
        if (a % 10 === 0){return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]]+" and "+centsEnglish);}
          if (value[2] < 2) {return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ teens[value[3]]+" and "+centsEnglish);}
    return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]] +" "+ ones[value[3]]+" and "+centsEnglish)
  }

}


//************** TEST ******************

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('numChange(), takes a Number as an input and returns a dollars & cents string format', function(){
    it('should be a type of function named numChange()', function(){
        assert.typeOf(numChange,'function');
    });
    it('should take a Number and return the written English dollar & cents equivalent', function(){
        assert.equal(numChange(0),'zero and 00/100s dollars');
        assert.equal(numChange(19),'nineteen and 00/100s dollars');
        assert.equal(numChange(1234.56),'one thousand two hundred thirty four and 56/100s dollars');
    });
});
var testCases = [
  [19, "nineteen and 00/100 dollars"],
  [0, "zero and 00/100 dollars"],
  [1234.56, "one thousand two hundred thirty four and 56/100s dollars"],
]

//testCases.forEach(function(testCase)){
//  var actual = numChange(testCase[0]),expected = testCase[1];
//  assert.strictEqual(actual,expected);
//}

//console.log(numChange(1234.56))
