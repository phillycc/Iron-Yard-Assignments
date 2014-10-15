var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var Chess = require('./chess.js');
var Position = require('./chess.js');
var Piece = require('./chess.js');


/*
describe('makeMove', function(){
    it('should be a type of function named makeMove()', function(){
        assert.typeOf(makeMove,'function');
    });
});
describe('printBoard', function(){
    it('should be a type of function named printBoard()', function(){
        assert.typeOf(printBoard,'function');
    });
});
describe('solution', function(){
    it('should be a type of function named solution()', function(){
        assert.typeOf(solution,'function');
    });
});
describe('WHEN White Queen\'s Pawn moves forward 2\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move1: [4,3,6,3]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "p" and occupy a new position', function(){
        board[4][3].should.be.a('string').and.equal('p');
    });
});

describe('WHEN Black King\'s Pawn moves forward 2\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move2: [3,3,1,3]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "P" and occupy a new position', function(){
        board[3][3].should.be.a('string').and.equal('P');
    });
});
describe('WHEN White Right Knight moves forward 2, left 1\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move3: [5,5,7,6]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "n" and occupy a new position', function(){
        board[5][5].should.be.a('string').and.equal('n');
    });
});
describe('WHEN Black Left Knight moves forward 2, right 1\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move4: [2,5,0,6]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "N" and occupy a new position', function(){
        board[2][5].should.be.a('string').and.equal('N');
    });
});
describe('WHEN White Right Knight\'s Pawn moves forward 1\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move5: [5,6,6,6]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "p" and occupy a new position', function(){
        board[5][6].should.be.a('string').and.equal('p');
    });
});
describe('WHEN Black King\'s Pawn moves forward 1\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move6: [2,4,1,4]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "P" and occupy a new position', function(){
        board[2][4].should.be.a('string').and.equal('P');
    });
});
describe('WHEN White Right Bishop moves right 1\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move7: [6,6,7,5]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "b" and occupy a new position', function(){
        board[6][6].should.be.a('string').and.equal('b');
    });
});
describe('WHEN Black Left Bishop moves right 1\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move8: [1,4,0,5]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "B" and occupy a new position', function(){
        board[1][4].should.be.a('string').and.equal('B');
    });
});
describe('WHEN White Left Bishop\'s Pawn moves forward 2\n', function(){
    var _catMoves;
    before(function(){
        _catMoves = {
            move9: [4,2,6,2]
        }
        solution(_catMoves);
    });
    it('should be a string equal to "p" and occupy a new position', function(){
        board[4][2].should.be.a('string').and.equal('p');
    });
});
*/
