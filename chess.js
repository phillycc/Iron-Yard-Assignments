module.exports = exports = new Chess;

//--------------------------------------------------
//              Chess()
//--------------------------------------------------

/**
 * Setup a board with Pieces representing an initial
 * chessboard
 *
 * @param
 * @param
 * @return
 */
function Chess(){
    this.myPiece = new Piece();
}

//--------------------------------------------------
//              Chess.getPlayer()
//--------------------------------------------------

/**
 *
 * @param
 * @param
 * @param
 * @return String either "white" or "black" representing
 * current player
 */
Chess.prototype.getPlayer = function(){

}

//--------------------------------------------------
//              Chess.move()
//--------------------------------------------------
/**
 * Move piece to destination and...?
 *
 * @param Piece piece to move
 * @param Position destination to move piece to
 * @return
 */
Chess.prototype.move = function(){
     // Inputs: fromPos(x,y), toPos(x,y) - calls Chess.opening
     // Need current player making this move: Chess.getPlayer
     // Need piece type to be moved: Piece.getName
}

//--------------------------------------------------
//              Chess.opening()
//--------------------------------------------------
/**
 * Advance the board to Catalan Opening, Closed Variation
 *
 * @param
 * @param
 * @return
 */
Chess.prototype.opening = function(){
    // Contains the order and type of moves per Catalan
    // Calls new Position
}
//--------------------------------------------------
//              Chess.dsiplay()
//--------------------------------------------------
/**
 *
 * @param
 * @param
 * @param
 * @return String representation of board
 */

Chess.prototype.display = function(){

}

//--------------------------------------------------
//              Piece()
//--------------------------------------------------
/**
 * Represent a chesspiece on the board with name and
 * color and appropriate starting position
 *
 * @param
 * @param
 * @return
 */
function Piece(){
    this.name = name;
    this.color = color;
}

//--------------------------------------------------
//              Piece.getName()
//--------------------------------------------------
/**
 *
 * @param
 * @param
 * @param
 * @return String name of Piece, e.g. 'Queen', 'Pawn'
 */
Piece.prototype.getName = function(){
    return this.name;
}

//--------------------------------------------------
//              Piece.getColor()
//--------------------------------------------------
/**
 *
 * @param
 * @param
 * @param
 * @return String player 'black' or 'white'
 */
Piece.prototype.getColor = function(){
    return this.color;
}

//--------------------------------------------------
//              Piece.setPosition()
//--------------------------------------------------
/**
 * Set Piece to position on board
 *
 * @param Position position
 * @param
 * @return
 */
Piece.prototype.setPosition = function(){

}

//--------------------------------------------------
//              Piece.toString()
//--------------------------------------------------
/**
 *
 * @param
 * @param
 * @param
 * @return String representation of Piece
 */
Piece.prototype.toString = function(){

    /*if (this.Q.getColor === "white"){
      if (this.Q.getName === "Queen") return 'Q';
    }*/

}

//--------------------------------------------------
//              Position()
//--------------------------------------------------

/**
 * Represent a position on a chessboard with coordinates
 *
 * @param
 * @param
 * @return
 */
function Position(x,y){

}
