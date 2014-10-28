//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var array19 = [];


function solution (){

     return {
        solveFor: function(limit){
          getUpperLimit(limit);
        },
        getUpperLimit: function(){
          function getUpperLimit(limit){
              var product=1;
              for (var i=1; i<=limit; i++){
                  product = product * i;
              }
              return product;
          }
        },
        filterOdds: function(){

          return a % 2 !== 0;

          var num = [ ]
          for (value=10; value > 0; value--){
            num.push (value);
          }

          num.filter(filterOdds);
          console.log (num);
        },

        findMultiples: function(){}
    }
}




//   TESTING

describe('solution()', function(){
    it('should be a type of function named solution()', function(){
        assert.typeOf(solution,'function');
    });
    it('should return function named solveFor()', function(){
        assert.typeOf(solution,'function');
    });
    it('should return function named getUpperLimit()', function(){
        assert.typeOf(solution,'function');
    });
});
