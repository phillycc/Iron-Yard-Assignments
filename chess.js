module.exports = Chess, Position, Piece;

/**
 * Setup a board with Pieces representing an initial chessboard
 *
 * @param
 * @param
 * @return
 */
function Chess(){
    //Build starting board using Position and Piece constructors

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

    var pointValues = { Pawn : 1, Knight : 3, Bishop : 3, Rook : 5, Queen : 9 };

    var p = new Piece("Pawn", "white");
    var P = new Piece("Pawn", "black");
    var n = new Piece("Knight", "white");
    var N = new Piece("Knight", "black");
    var b = new Piece("Bishop", "white");
    var B = new Piece("Bishop", "black");
    var r = new Piece("Rook", "white");
    var R = new Piece("Rook", "black");
    var q = new Piece("Queen", "white");
    var Q = new Piece("Queen", "black");
    var k = new Piece("King", "white");
    var K = new Piece("King", "black");

    var startBoard = {
       R: R.setPosition([[0,0],[0,7]]),
       N: [[0,1],[0,6]],
       B: [[0,2],[0,5]],
       Q: [[0,3]],
       K: [[0,4]],
       P: [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]],
       r: [[7,0],[7,7]],
       n: [[7,1],[7,6]],
       b: [[7,2],[7,5]],
       q: [[7,3]],
       k: [[7,4]],
       p: [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7]],
    }

    //Make move - Chess.move - which calls Chess.opening
    //Display move - Chess.display

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
     // Inputs: fromPos(x,y), toPos(x,y) - calls Chess.opening
     // Need current player making this move: Chess.getPlayer
     // Need piece type to be moved: Piece.getName

/**
 * Advance the board to Catalan Opening, Closed Variation
 *
 * @param
 * @param
 * @return
 */
Chess.prototype.opening(){
    // Contains the order and type of moves per Catalan
    // Calls new Position
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



}

/**
 * Represent a chesspiece on the board with name and color and appropriate starting position
 *
 * @param
 * @param
 * @return
 */
function Piece(name,color){
    this.name = name;
    this.color color;
}
/**
 *
 * @param
 * @param
 * @param
 * @return String name of Piece, e.g. 'Queen', 'Pawn'
 */
Piece.prototype.getName(){
    return this.name;
}
/**
 *
 * @param
 * @param
 * @param
 * @return String player 'black' or 'white'
 */
Piece.prototype.getColor(){
    return this.color;
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

    if (this.Q.getColor === "white"){
      if (this.Q.getName === "Queen") return 'Q';
    }

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
