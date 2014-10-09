
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

//console.log(board.join('\n') + '\n\n');

// Move White Queen's Pawn forward 2
board[4][3] = board[6][3];
board[6][3] = ' ';
//console.log(board.join('\n') + '\n\n');

// Move Black King's Pawn forward 2
board[3][3] = board[1][3];
board[1][3] = ' ';
//console.log(board.join('\n') + '\n\n');

// Move White Right Knight forward 2, left 1
board[5][5] = board[7][6];
board[7][6] = ' ';
//console.log(board.join('\n') + '\n\n');

// Move Black Left Knight forward 2, right 1
board[2][5] = board[0][6];
board[0][6] = ' ';
//console.log(board.join('\n') + '\n\n');

// Move White Right Knight's Pawn forward 1
board[5][6] = board[6][6];
board[6][6] = ' ';
//console.log(board.join('\n') + '\n\n');

// Move Black King's Pawn forward 1
board[2][4] = board[1][4];
board[1][4] = ' ';
console.log(board.join('\n') + '\n\n');

// Move White Bishop forward right 1
board[6][6] = board[7][5];
board[7][5] = ' ';
console.log(board.join('\n') + '\n\n');
