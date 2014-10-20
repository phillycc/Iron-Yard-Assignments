var Chess = require('./chess.js').Chess;
var Piece = require('./chess.js').Piece;
var Position = require('./chess.js').Position;
//var Piece = require('./chess.js');
//var Position = require('./chess.js');

var assert = require('chai').assert;
var expect = require('chai').expect;


/*
describe('Position', function(){
    it('should be a type of function named Position', function(){
        assert.isFunction(Position);
    });
    it('should have an x and y coordinate',function(){
        var aPosition = new Position(2,3);
        assert.strictEqual(aPosition[0], 2);
        assert.strictEqual(aPosition[1], 3);
        assert.deepEqual(aPosition,[2,3]);
    });
});
*/
/*
var piece = new Piece('Queen','white');

describe('Piece', function(){

    it('should be a type of function named Piece\n', function(){
        assert.isFunction(Piece);
    });

    describe('getName()', function(){
        it('should be a type of function named getName', function(){
            assert.isFunction(piece.getName);
        });
        it('should return a string', function(){
            expect(piece.getName()).to.be.a('string');
        });
        it('should return the piece\'s name', function(){
            assert.strictEqual(piece.getName(),'Queen');
        });
    });

    describe('getColor()', function(){
        it('should be a type of function named getColor', function(){
            assert.isFunction(piece.getColor);
        });
        it('should return a string', function(){
            expect(piece.getColor()).to.be.a('string');
        });
        it('should return the piece\'s color', function(){
            assert.strictEqual(piece.getColor(),'white');
        });
    });

    describe('toString()', function(){
        it('should be a type of function named toString', function(){
            assert.isFunction(piece.toString);
        });
    });

    describe('setPosition()', function(){
        it('should be a type of function named setPosition', function(){
            assert.isFunction(piece.setPosition);
        });
    });

});
*/
var chess = new Chess();
//console.log(chess.display());

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
    it('should display the initial board',function(){
      assert.equal(chess.display(),
      "+---+---+---+---+---+---+---+---+\n"+
      "| R | N | B | Q | K | B | N | R |\n"+
      "+---+---+---+---+---+---+---+---+\n"+
      "| P | P | P | P | P | P | P | P |\n"+
      "+---+---+---+---+---+---+---+---+\n"+
      "|   |   |   |   |   |   |   |   |\n"+
      "+---+---+---+---+---+---+---+---+\n"+
      "|   |   |   |   |   |   |   |   |\n"+
      "+---+---+---+---+---+---+---+---+\n"+
      "|   |   |   |   |   |   |   |   |\n"+
      "+---+---+---+---+---+---+---+---+\n"+
      "|   |   |   |   |   |   |   |   |\n"+
      "+---+---+---+---+---+---+---+---+\n"+
      "| p | p | p | p | p | p | p | p |\n"+
      "+---+---+---+---+---+---+---+---+\n"+
      "| r | n | b | q | k | b | n | r |\n"+
      "+---+---+---+---+---+---+---+---+\n");
    });

    describe('getPlayer()', function(){
        it('should be a type of function named getPlayer', function(){
            assert.isFunction(chess.getPlayer);
        });
    });

    describe('move()', function(){
        it('should be a type of function named move', function(){
            assert.isFunction(chess.move);
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
    });
});
