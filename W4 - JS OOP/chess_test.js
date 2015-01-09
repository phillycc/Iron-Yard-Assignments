var Chess = require('./chess.js').Chess;
var Piece = require('./chess.js').Piece;
var Position = require('./chess.js').Position;
//var Piece = require('./chess.js');
//var Position = require('./chess.js');

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Position', function(){
    it('should be a type of function named Position', function(){
        assert.isFunction(Position);
    });
    it('should have an x and y coordinate',function(){
        var bPosition = new Position(2,3);
        assert.strictEqual(bPosition[0], 2);
        assert.strictEqual(bPosition[1], 3);
        assert.deepEqual(bPosition,[2,3]);
    });
});



//Q.setPosition([0,3]);
//console.log(Q);

describe('Piece', function(){
    var Q = new Piece('Queen','white', 9);
    it('should be a type of function named Piece', function(){
        assert.isFunction(Piece);
    });

    describe('getName()', function(){
        it('should be a type of function named getName', function(){
            assert.isFunction(Q.getName);
        });
        it('should return a string', function(){
            expect(Q.getName()).to.be.a('string');
        });
        it('should return a chess piece\'s name', function(){
            assert.strictEqual(Q.getName(),'Queen');
        });
    });

    describe('getColor()', function(){
        it('should be a type of function named getColor', function(){
            assert.isFunction(Q.getColor);
        });
        it('should return a string', function(){
            expect(Q.getColor()).to.be.a('string');
        });
        it('should return a chess piece\'s color', function(){
            assert.strictEqual(Q.getColor(),'white');
        });
    });

    describe('setPointValue()', function(){
        it('should be a type of function named setPointValue', function(){
            assert.isFunction(Q.setPointValue);
        });
        it('should return a number', function(){
            expect(Q.setPointValue()).to.be.a('number');
        });
        it('should return a chess piece\'s point value', function(){
            assert.strictEqual(Q.setPointValue(), 9);
        });
    });

    describe('toString()', function(){
        it('should be a type of function named toString', function(){
            assert.isFunction(Q.toString);
        });
        it('should return one-letter label for chess piece', function(){
            assert.equal(Q.toString(),'q');
        });
    });

    describe('setPosition()', function(){
        it('should be a type of function named setPosition', function(){
            assert.isFunction(Q.setPosition);
        });
        it('should set x,y coordinates for given chess piece', function(){
            Q.setPosition([0,3]);
            assert.deepEqual([Q.position[0],Q.position[1]],[0,3]);
        });
    });

});

var chess = new Chess();
describe('Chess', function(){
    it('should be a type of function named Chess', function(){
        assert.isFunction(Chess);
    });
    it('should return piece name', function(){
      assert.equal(chess.arrPieces[0].name, "Rook");
    });
    it('should return piece color', function(){
      assert.equal(chess.arrPieces[0].color, "black");
    });
    it('should return piece postion', function(){
      assert.deepEqual(chess.arrPieces[0].position, [0,0]);
    });

    describe('getPlayer()', function(){
        it('should be a type of function named getPlayer', function(){
            assert.isFunction(chess.getPlayer);
        });
        it('should return player color based on board piece',function(){
            assert.equal(chess.getPlayer('r'),"white");
            assert.equal(chess.getPlayer('R'),"black");
        });
    });

    describe('move()', function(){
        it('should be a type of function named move', function(){
            assert.isFunction(chess.move);
        });
        it('should move piece to destination x,y coordinate', function(){
            //Catalan opening move (white)
            chess.move([6,3],[4,3]);
            assert.deepEqual(chess.arrPieces[19].position,[4,3]);
        });
    });

    describe('opening()', function(){
        it('should be a type of function named opening', function(){
            assert.isFunction(chess.opening);
        });
    });

    describe('display()', function(){
        it('should be a type of function named display', function(){
            assert.isFunction(chess.display);
        });
        /*it('should display final move for Catalan',function(){
            assert.equal(chess.display(),
            "+---+---+---+---+---+---+---+---+\n"+
            "| R | N | B | Q | K |   |   | R |\n"+
            "+---+---+---+---+---+---+---+---+\n"+
            "| P | P | P |   | B | P | P | P |\n"+
            "+---+---+---+---+---+---+---+---+\n"+
            "|   |   |   |   | P | N |   |   |\n"+
            "+---+---+---+---+---+---+---+---+\n"+
            "|   |   |   | P |   |   |   |   |\n"+
            "+---+---+---+---+---+---+---+---+\n"+
            "|   |   | p | p |   |   |   |   |\n"+
            "+---+---+---+---+---+---+---+---+\n"+
            "|   |   |   |   |   | n | p |   |\n"+
            "+---+---+---+---+---+---+---+---+\n"+
            "| p | p |   |   | p | p | b | p |\n"+
            "+---+---+---+---+---+---+---+---+\n"+
            "| r | n | b | q | k |   |   | r |\n"+
            "+---+---+---+---+---+---+---+---+\n");
          });*/
      });
});
