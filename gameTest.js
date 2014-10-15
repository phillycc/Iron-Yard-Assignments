var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var Game = require('./game.js');

  describe('Conway\'s Game of Life: Voodoo Black Magic Edition\n', function(){
      var aGame = new Game();

      describe('Constructor function rules()', function(){
          it('should be a type of function\n', function(){
              assert.isFunction(aGame.rules);
          });
          describe('GENERATION RULE', function(){
              it('should NOT generate new cell if fewer than 3 neighbors', function(){
                  expect(aGame.rules(false, [ ]), false).to.be.false;
                  expect(aGame.rules(false, [ true ]), false).to.be.false;
                  expect(aGame.rules(false, [ true, true ]), false).to.be.false;
                  expect(aGame.rules(false, [ false, false, false ]), false).to.be.false;
              });
              it('should generate new cell if exactly 3 neighbors', function(){
                  expect(aGame.rules(false, [ true, true, true ]), true).to.be.true;
              });
              it('should NOT generate new cell if MORE than 3 neighbors', function(){
                  expect(aGame.rules(false, [ true, true, true, true ]), false).to.be.false;
                  expect(aGame.rules(false, [ true, true, true, true, true ]), false).to.be.false;
              });
          });
          describe('UNDER-POPULATION RULE', function(){
              it('should die if there are fewer than 2 or 3 neighbors', function(){
                  expect(aGame.rules(true, [ ]), false).to.be.false;
                  expect(aGame.rules(true, [ true ]), false).to.be.false;
                  expect(aGame.rules(true, [ false, false ]), false).to.be.false;
                  expect(aGame.rules(true, [ false, false, false ]), false).to.be.false;
              });
          });
          describe('SURVIVAL RULE', function(){
              it('should survive if there are exactly 2 or 3 neighbors', function(){
                  expect(aGame.rules(true, [ true, true ]), true).to.be.true;
                  expect(aGame.rules(true, [ true, true, true ]), true).to.be.true;
              });
          });
          describe('OVER-POPULATION RULE', function(){
              it('should die if there are more than 3 neighbors\n', function(){
                  expect(aGame.rules(true, [ true, true, true, true ]), false).to.be.false;
                  expect(aGame.rules(true, [ true, true, true, true, true ]), false).to.be.false;
              });
          });
      });


      describe('Constructor function neighborsOf()', function(){
        it('should be a type of function\n', function(){
            assert.isFunction(aGame.neighborsOf);
        });
        describe('GIVEN a 3x3 board', function(){
            it('should return three neighbors for the corners', function(){
                assert.deepEqual(
                    aGame.neighborsOf(0,0),
                    [ false, false, false ]
                );
                assert.deepEqual(
                    aGame.neighborsOf(0,2),
                    [ false, false, false ]
                );
                assert.deepEqual(
                    aGame.neighborsOf(2,0),
                    [ false, false, false ]
                );
                assert.deepEqual(
                    aGame.neighborsOf(2,2),
                    [ false, false, false ]
                );
            });
            it('should return 5 cells for the edges', function(){
                assert.deepEqual(
                    aGame.neighborsOf(0,1),
                    [ false, false, false, false, false ]
                );
                assert.deepEqual(
                    aGame.neighborsOf(1,0),
                    [ false, false, false, false, false ]
                );
                assert.deepEqual(
                    aGame.neighborsOf(1,2),
                    [ false, false, false, false, false ]
                );
                assert.deepEqual(
                    aGame.neighborsOf(2,1),
                    [ false, false, false, false, false ]
                );
            });
            it('should return all cells for the middle\n', function(){
                assert.deepEqual(
                    aGame.neighborsOf(1,1),
                    [ false, false, false, false, false, false, false, false ]
                );
            });
        });
    });

    describe('Constructor function setAlive()', function(){
        it('should be a function', function(){
            assert.isFunction(aGame.setAlive);
        });
        it('should return undefined', function(){
            assert.isUndefined(aGame.setAlive(0,0));
        });
        it('should set false cell to true\n', function(){
            assert.isTrue(aGame.isAlive(0,0));
        });
    });

    describe('Constructor function setDead()', function(){
        it('should be a function', function(){
            assert.isFunction(aGame.setDead);
        });
        it('should return undefined', function(){
            assert.isUndefined(aGame.setDead(0,0));
        });
        it('should set false cell to false\n', function(){
            assert.isFalse(aGame.isAlive(0,0));
        });
    });

    describe('Constructor function isAlive()', function(){
        it('should be a function', function(){
            assert.isFunction(aGame.isAlive);
        });
        it('should return a Boolean', function(){
            assert.isBoolean(aGame.isAlive(0,0));
        });
        it('should return false if cell state is false\n', function(){
            assert.isFalse(aGame.isAlive(0,0));
            assert.isFalse(aGame.isAlive(0,1));
            assert.isFalse(aGame.isAlive(0,2));
            assert.isFalse(aGame.isAlive(1,0));
            assert.isFalse(aGame.isAlive(1,1));
            assert.isFalse(aGame.isAlive(1,2));
            assert.isFalse(aGame.isAlive(2,0));
            assert.isFalse(aGame.isAlive(2,1));
            assert.isFalse(aGame.isAlive(2,2));
        });
    });
});
