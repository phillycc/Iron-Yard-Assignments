/**var assert = require(‘assert’);
*
*function test(actual, expected, success){
*  assert(actual === expected) || console.log(success);
*}
*/

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

  var value = a.toString().split("");

    if (a < 20){return(ones[a])}; //for numbers 0-19
////////////////////////////////////////////////////////////
    if (a < 100){                 //for numbers 20-99
      if (a % 10 === 0){
        return(tens[value[0]]);
      }
      return(tens[value[0]] + ones[value[1]])
    };
////////////////////////////////////////////////////////////
    if (a < 1000){                 //for numbers 100-999
      if (a % 100 === 0){
        return(hundreds[value[0]]);
      }
        if (a % 10 === 0){     //numbers between 100-999 and divisible by 10
        return(hundreds[value[0]]+tens[value[1]]);
        }
          if (value[1] < 2) {   //hundreds digits, _10 < x < _20
          return(hundreds[value[0]] + teens[value[2]]);
          }
      return(hundreds[value[0]] + tens[value[1]] + ones[value[2]])
    }

  if (a < 10000){
    if (a % 1000 === 0){return(thousands[value[0]]);}
      if (a % 100 === 0){return(thousands[value[0]] + hundreds[value[1]]);}
        if (a % 10 === 0){return(thousands[value[0]] + hundreds[value[1]] + tens[value[2]]);}
          if (value[2] < 2) {return(thousands[value[0]] + hundreds[value[1]] + teens[value[3]]);}
    return(thousands[value[0]] + hundreds[value[1]] + tens[value[2]] + ones[value[3]])
  }

}

// testing large quantities of #s at once
/*var balls=700;
while (balls<750){
 console.log(numChange(balls));
 balls++}
 */

//////////////////////TEST////////////////////
console.log(numChange(0))
console.log(numChange(11))
console.log(numChange(14))
console.log(numChange(1))
console.log(numChange(8))
console.log(numChange(23))
console.log(numChange(42))
console.log(numChange(50))
console.log(numChange(60))
console.log(numChange(79))
console.log(numChange(800))
console.log(numChange(300))
console.log(numChange(445))
console.log(numChange(520))
console.log(numChange(270))
console.log(numChange(214))
console.log(numChange(119))
console.log(numChange(517))
console.log(numChange(3000))
console.log(numChange(8000))
console.log(numChange(5400))
console.log(numChange(1100))
console.log(numChange(3210))
console.log(numChange(8290))
console.log(numChange(7414))
console.log(numChange(4912))
console.log(numChange(1234))
