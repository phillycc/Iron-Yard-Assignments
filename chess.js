module.exports = Chess, Position, Piece;

/**
 * Setup a board with Pieces representing an initial chessboard
 *
 * @param
 * @param
 * @return
 */
function Chess(){
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

}
/**
 *
 * @param
 * @param
 * @param
 * @return String either "white" or "black" representing current player
 */
Chess.prototype.getPlayer(){

}
/**
 * Move piece to destination and...?
 *
 * @param Piece piece to move
 * @param Position destination to move piece to
 * @return
 */
Chess.prototype.move(){

}
/**
 * Advance the board to Catalan Opening, Closed Variation
 *
 * @param
 * @param
 * @return
 */
Chess.prototype.opening(){

}
/**
 *
 * @param
 * @param
 * @param
 * @return String representation of board
 */
Chess.prototype.display(){

}

/**
 * Represent a position on a chessboard with coordinates
 *
 * @param
 * @param
 * @return
 */
function Position(x,y){
    return true;
}

/**
 * Represent a chesspiece on the board with name and color and appropriate starting position
 *
 * @param
 * @param
 * @return
 */
function Piece(name,color){


    return true;
}
/**
 *
 * @param
 * @param
 * @param
 * @return String name of Piece, e.g. 'Queen', 'Pawn'
 */
Piece.prototype.getName(){

}
/**
 *
 * @param
 * @param
 * @param
 * @return String player 'black' or 'white'
 */
Piece.prototype.getColor(){

}
/**
 * Set Piece to position on board
 *
 * @param Position position
 * @param
 * @return
 */
Piece.prototype.setPosition(){

}
/**
 *
 * @param
 * @param
 * @param
 * @return String representation of Piece
 */
Piece.prototype.toString(thisPiece){
    //"Q" === String(new Piece("Queen", "white"))

    if (thisPiece===Q) 

}



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
