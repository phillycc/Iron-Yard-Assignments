var Chess = require('./chess.js');
//var Piece = require('./chess.js');
//var Position = require('./chess.js');

var assert = require('chai').assert;
var expect = require('chai').expect;


describe('Chess', function(){
    var chess = new Chess();
    it('should be a type of function named Chess\n', function(){
        assert.isFunction(Chess);
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

/*
describe('Position', function(){
    it('should be a type of function named Position\n', function(){
        assert.isFunction(Position);
    });
});
*/

/*
describe('Piece', function(){
    var piece = new Piece('Queen','white');
    console.log(piece.getName('Queen'));
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
