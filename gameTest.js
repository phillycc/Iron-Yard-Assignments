var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var Game = require('./game.js');

  describe('Conway LITE: Voodoo Black Magic Edition\n', function(){
      var game = new Game();

      /*describe('Constructor function tick()', function(){
          it('should be a type of function\n', function(){
              assert.isFunction(game.tick);
          });

          /*describe('WHEN the board has fewer than 3 adjacent cells', function(){
              it('should die in 1 tick', function(){
                  //game.setAlive(0,0);
                  assert.deepEqual(game.tick(), game.board);
              });
          });
          describe('WHEN the board has 3 adjacent cells in a line', function(){
              game.setAlive(0,1);
              game.setAlive(1,1);
              game.setAlive(2,1);
              before(function(){
                  expected = [
                      [ false, false, false ],
                      [ true,  true,  true  ],
                      [ false, false, false ],
                  ];
              });
              it('should oscilate every tick', function(){
                  assert.deepEqual(game.tick(), expected);
              });
          });
      });

      describe('Constructor function rules()', function(){
          it('should be a type of function\n', function(){
              assert.isFunction(game.rules);
          });
          describe('GENERATION RULE', function(){
              it('should NOT generate new cell if fewer than 3 neighbors', function(){
                  expect(game.rules(false, [ ]), false).to.be.false;
                  expect(game.rules(false, [ true ]), false).to.be.false;
                  expect(game.rules(false, [ true, true ]), false).to.be.false;
                  expect(game.rules(false, [ false, false, false ]), false).to.be.false;
              });
              it('should generate new cell if exactly 3 neighbors', function(){
                  expect(game.rules(false, [ true, true, true ]), true).to.be.true;
              });
              it('should NOT generate new cell if MORE than 3 neighbors', function(){
                  expect(game.rules(false, [ true, true, true, true ]), false).to.be.false;
                  expect(game.rules(false, [ true, true, true, true, true ]), false).to.be.false;
              });
          });
          describe('UNDER-POPULATION RULE', function(){
              it('should die if there are fewer than 2 or 3 neighbors', function(){
                  expect(game.rules(true, [ ]), false).to.be.false;
                  expect(game.rules(true, [ true ]), false).to.be.false;
                  expect(game.rules(true, [ false, false ]), false).to.be.false;
                  expect(game.rules(true, [ false, false, false ]), false).to.be.false;
              });
          });
          describe('SURVIVAL RULE', function(){
              it('should survive if there are exactly 2 or 3 neighbors', function(){
                  expect(game.rules(true, [ true, true ]), true).to.be.true;
                  expect(game.rules(true, [ true, true, true ]), true).to.be.true;
              });
          });
          describe('OVER-POPULATION RULE', function(){
              it('should die if there are more than 3 neighbors\n', function(){
                  expect(game.rules(true, [ true, true, true, true ]), false).to.be.false;
                  expect(game.rules(true, [ true, true, true, true, true ]), false).to.be.false;
              });
          });
      });


      describe('Constructor function neighborsOf()', function(){
        it('should be a type of function\n', function(){
            assert.isFunction(game.neighborsOf);
        });
        describe('GIVEN a 3x3 board', function(){
            it('should return three neighbors for the corners', function(){
                assert.deepEqual(
                    game.neighborsOf(0,0),
                    [ false, false, false ]
                );
                assert.deepEqual(
                    game.neighborsOf(0,2),
                    [ false, false, false ]
                );
                assert.deepEqual(
                    game.neighborsOf(2,0),
                    [ false, false, false ]
                );
                assert.deepEqual(
                    game.neighborsOf(2,2),
                    [ false, false, false ]
                );
            });
            it('should return 5 cells for the edges', function(){
                assert.deepEqual(
                    game.neighborsOf(0,1),
                    [ false, false, false, false, false ]
                );
                assert.deepEqual(
                    game.neighborsOf(1,0),
                    [ false, false, false, false, false ]
                );
                assert.deepEqual(
                    game.neighborsOf(1,2),
                    [ false, false, false, false, false ]
                );
                assert.deepEqual(
                    game.neighborsOf(2,1),
                    [ false, false, false, false, false ]
                );
            });
            it('should return all cells for the middle\n', function(){
                assert.deepEqual(
                    game.neighborsOf(1,1),
                    [ false, false, false, false, false, false, false, false ]
                );
            });
        });
    });

    describe('Constructor function setAlive()', function(){
        it('should be a function', function(){
            assert.isFunction(game.setAlive);
        });
        it('should return undefined', function(){
            assert.isUndefined(game.setAlive(0,0));
        });
        it('should set false cell to true\n', function(){
            assert.isTrue(game.isAlive(0,0));
        });
    });

    describe('Constructor function setDead()', function(){
        it('should be a function', function(){
            assert.isFunction(game.setDead);
        });
        it('should return undefined', function(){
            assert.isUndefined(game.setDead(0,0));
        });
        it('should set false cell to false\n', function(){
            assert.isFalse(game.isAlive(0,0));
        });
    });

    describe('Constructor function isAlive()', function(){
        it('should be a function', function(){
            assert.isFunction(game.isAlive);
        });
        it('should return a Boolean', function(){
            assert.isBoolean(game.isAlive(0,0));
        });
        it('should return false if cell state is false\n', function(){
            assert.isFalse(game.isAlive(0,0));
            assert.isFalse(game.isAlive(0,1));
            assert.isFalse(game.isAlive(0,2));
            assert.isFalse(game.isAlive(1,0));
            assert.isFalse(game.isAlive(1,1));
            assert.isFalse(game.isAlive(1,2));
            assert.isFalse(game.isAlive(2,0));
            assert.isFalse(game.isAlive(2,1));
            assert.isFalse(game.isAlive(2,2));
        });
    });*/
    describe('Conway LITE API', function(){
        it('should play the game', function(){
            assert.deepEqual(game.board, [
              [ false, false, false ],
              [ false, false, false ],
              [ false, false, false ],
            ]);

            game.setAlive(0,1);
            game.setAlive(1,1);
            game.setAlive(2,1);

            assert.isTrue(game.isAlive(0,1));
            assert.isTrue(game.isAlive(1,1));
            assert.isTrue(game.isAlive(2,1));

            assert.equal(game.display(),
              "+---+---+---+\n" +
              "|   | X |   |\n" +
              "+---+---+---+\n" +
              "|   | X |   |\n" +
              "+---+---+---+\n" +
              "|   | X |   |\n" +
              "+---+---+---+\n"
            );

            game.tick();

            assert.isTrue(game.isAlive(1,0));
            assert.isTrue(game.isAlive(1,1));
            assert.isTrue(game.isAlive(1,2));

            assert.equal(game.display(),
              "+---+---+---+\n" +
              "|   |   |   |\n" +
              "+---+---+---+\n" +
              "| X | X | X |\n" +
              "+---+---+---+\n" +
              "|   |   |   |\n" +
              "+---+---+---+\n"
            );

            game.tick();

            /*assert.isTrue(game.isAlive(0,1));
            assert.isTrue(game.isAlive(1,1));
            assert.isTrue(game.isAlive(2,1));

            assert.equal(game.display(),
              "+---+---+---+\n" +
              "|   | X |   |\n" +
              "+---+---+---+\n" +
              "|   | X |   |\n" +
              "+---+---+---+\n" +
              "|   | X |   |\n" +
              "+---+---+---+\n"
            );*/
        });
    });
});
