var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

/**
 * The following creates a chess board as a two dimensional array of
 * strings. The first move is made by copying the 'p' in (6,4) to (4,4).
 * The old position (6,4) is made blank.
 *
 * var board = [
 * ['R','N','B','Q','K','B','N','R'],
 * ['P','P','P','P','P','P','P','P'],
 * [' ',' ',' ',' ',' ',' ',' ',' '],
 * [' ',' ',' ',' ',' ',' ',' ',' '],
 * [' ',' ',' ',' ',' ',' ',' ',' '],
 * [' ',' ',' ',' ',' ',' ',' ',' '],
 * ['p','p','p','p','p','p','p','p'],
 * ['r','n','b','q','k','b','n','r'] ];
 *
 * console.log(board.join('\n') + '\n\n');
 *
 * // Move King's Pawn forward 2
 * board[4][4] = board[6][4];
 * board[6][4] = ' ';
 * console.log(board.join('\n'));
 *
 * Here is the output:
 *
 * R,N,B,Q,K,B,N,R
 * P,P,P,P,P,P,P,P
 * , , , , , , ,
 * , , , , , , ,
 * , , , , , , ,
 * , , , , , , ,
 * p,p,p,p,p,p,p,p
 * r,n,b,q,k,b,n,r
 *
 * R,N,B,Q,K,B,N,R
 * P,P,P,P,P,P,P,P
 * , , , , , , ,
 * , , , , , , ,
 * , , , ,p, , ,
 * , , , , , , ,
 * p,p,p,p, ,p,p,p
 * r,n,b,q,k,b,n,r
 *
 * Write a series of steps that adjust the array to look like the
 * Catalan Opening: Closed Variation (See below). Write tests that
 * verify that your "board" looks correctly at every step.
 *
 * // Move White Queen's Pawn forward 2
 * board[4][3] = board[6][3];
 * board[6][3] = ' ';
 *
 * // Move Black King's Pawn forward 2
 * board[3][3] = board[1][3];
 * board[1][3] = ' ';
 *
 * // Move White Right Knight forward 2, left 1
 * board[5][5] = board[7][6];
 * board[7][6] = ' ';
 *
 * // Move Black Left Knight forward 2, right 1
 * board[2][5] = board[0][6];
 * board[0][6] = ' ';
 *
 * // Move White Right Knight's Pawn forward 1
 * board[5][6] = board[6][6];
 * board[6][6] = ' ';
 *
 * // Move Black King's Pawn forward 1
 * board[2][4] = board[1][4];
 * board[1][4] = ' ';
 *
 * // Move White Right Bishop forward right 1
 * board[6][6] = board[7][5];
 * board[7][5] = ' ';
 *
 * // Move Black Left Bishop forward right 1
 * board[1][4] = board[0][5];
 * board[0][5] = ' ';
 *
 * // Move White Left Bishop's Pawn forward 2
 * board[4][2] = board[6][2];
 * board[6][2] = ' ';
**/

var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r']
];

var catMoves = {
    move1: [4,3,6,3],
    move2: [3,3,1,3],
    move3: [5,5,7,6],
    move4: [2,5,0,6],
    move5: [5,6,6,6],
    move6: [2,4,1,4],
    move7: [6,6,7,5],
    move8: [1,4,0,5],
    move9: [4,2,6,2],
}

function makeMove(coords){
    var toX = coords.shift();
    var toY = coords.shift();
    var fromX = coords.shift();
    var fromY = coords.shift();
    board[toX][toY]=board[fromX][fromY];
    board[fromX][fromY]=' ';
}
function printBoard(){
    console.log(board.join('\n') + '\n\n');
}

function solution(moves){
   for (var move in moves){
     makeMove(catMoves[move]);
     printBoard();
   }
}

//solution(catMoves);

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

/*
// Move White Queen's Pawn forward 2
board[4][3] = board[6][3];
board[6][3] = ' ';
console.log(board.join('\n') + '\n\n');

// Move Black King's Pawn forward 2
board[3][3] = board[1][3];
board[1][3] = ' ';
console.log(board.join('\n') + '\n\n');

// Move White Right Knight forward 2, left 1
board[5][5] = board[7][6];
board[7][6] = ' ';
console.log(board.join('\n') + '\n\n');

// Move Black Left Knight forward 2, right 1
board[2][5] = board[0][6];
board[0][6] = ' ';
console.log(board.join('\n') + '\n\n');

// Move White Right Knight's Pawn forward 1
board[5][6] = board[6][6];
board[6][6] = ' ';
console.log(board.join('\n') + '\n\n');

// Move Black King's Pawn forward 1
board[2][4] = board[1][4];
board[1][4] = ' ';
console.log(board.join('\n') + '\n\n');

// Move White Right Bishop forward right 1
board[6][6] = board[7][5];
board[7][5] = ' ';
console.log(board.join('\n') + '\n\n');

// Move Black Left Bishop forward right 1
board[1][4] = board[0][5];
board[0][5] = ' ';
console.log(board.join('\n') + '\n\n');

// Move White Left Bishop's Pawn forward 2
board[4][2] = board[6][2];
board[6][2] = ' ';
console.log(board.join('\n') + '\n\n');
*/
