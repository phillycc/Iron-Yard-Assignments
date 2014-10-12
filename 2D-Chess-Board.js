var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

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

for (var move in catMoves){
  makeMove(catMoves[move]);
  printBoard();
}
/*
describe('WHEN White Queen\'s Pawn moves forward 2', function(){
    it('should be a string and equal "p"', function(){
        board[6][3].should.be.a('string').and.equal('p');
    });
    it('should occupy a new position', function(){
        expected = [
                [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
                [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
                [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', 'p', ' ', ' ', ' ', ' ' ],
                [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
                [ 'p', 'p', 'p', ' ', 'p', 'p', 'p', 'p' ],
                [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ]
            ];
          assert.deepEqual(movePiece(4,3,6,3), expected);
    });

    /*
    it('should vacate it\'s previous position', function(){
        expect(board[6][3]).to.be.empty;
    });

});*/

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
