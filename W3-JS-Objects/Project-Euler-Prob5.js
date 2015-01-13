var assert = require('chai').assert;

/**
 * Project Euler - Problem 5
 * https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the
 * numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by
 * all of the numbers from 1 to 20?
 *
 * Use the format provided below for your solution and write tests!
 *
 * function solution(){
 *    // change input to suit the solution, e.g. `limit`
 *    return {
 *      // I wanna see this one...
 *      solveFor: function(){  . . . },
 *
 *      function_name1: function(args){  . . .  },
 *      function_name2: function(args){  . . .  },
 *      ...
 *    }
 *  }

**/

function solution(){
  return {
    /**
     * Solves for smallest positive number that is evenly
     * divisible by all of the numbers from 1 to a maximum
     * number
     *
     * @param Number max
     * @return Number
    **/
    solveFor: function(max){
      var min = 1;
      var n = min;

      for(var i = min; i <= Math.abs(max); i++) {
        /* determines least common multiple (lcm) between index
         * value and the last calculated lcm value
        */
        n = this.lcm(n,i);
      }
      return n;
    },
    /**
    * @param Number a
    * @param Number b
    * @return Number least common multiple
    */
    lcm: function(a,b){
      /* Uses standard math formula to calculate least common
       * multiple between any 2 numbers
      */
      return (a * b) / this.gcd(a, b);
    },
    /**
    * @param Number a
    * @param Number b
    * @return Number greatest common denominator
    */
    gcd: function(a,b){
      var x = a;
      var y = b;
      var result;

      while (y !== 0) {
        result = x % y;
        x = y;
        y = result;
      }
      return x;
    }
  }
}

//************ TEST CODE ************//

describe('Project Euler No. 5', function(){
  var S; // or var S = solution();

  beforeEach(function(){
    S = solution();
  });

  describe('gcd: find greatest common denominator', function(){
    it('should have a function for doing this', function(){
      assert.isFunction(S.gcd);
    });
    it('should calculate gcd for a small sample', function(){
      assert.equal(S.gcd(11,11), 11);
      assert.equal(S.gcd(11,20), 1);
      assert.equal(S.gcd(12,16), 4);
      assert.equal(S.gcd(12,18), 6);
      assert.equal(S.gcd(14,16), 2);
      assert.equal(S.gcd(19,19), 19);
      assert.equal(S.gcd(15,20), 5);
    });
  });

  describe('lcm: find least common multiple', function(){
    it('should have a function for doing this', function(){
      assert.isFunction(S.lcm);
    });
    it('should calculate lcm for a small sample', function(){
      assert.equal(S.lcm(11,20), 220);
      assert.equal(S.lcm(12,16), 48);
      assert.equal(S.lcm(12,18), 36);
      assert.equal(S.lcm(14,16), 112);
      assert.equal(S.lcm(19,19), 19);
      assert.equal(S.lcm(15,20), 60);
    });
  });

  describe('solveFor: smallest number evenly divisible by series of integers', function(){
    it('should have a function for doing this', function(){
      assert.isFunction(S.solveFor);
    });

    it('should be able to solve simple examples', function(){
      assert.equal(S.solveFor(10), 2520);
      assert.equal(S.solveFor(15), 360360);
      assert.equal(S.solveFor(20), 232792560); // Euler No. 5 solution
      assert.equal(S.solveFor(30), 2329089562800);
    });
  });
});
