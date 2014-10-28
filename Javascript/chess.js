//module.exports.Chess = {'Chess': Chess, 'Position' : Position, 'Piece' : Piece};

module.exports.Position = Position;
module.exports.Piece = Piece;
module.exports.Chess = Chess;

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

  this.arrPieces = [];
  this.WhitePts = 0;
  this.BlackPts = 0;
  self = this;

  this.Moves = 1;
  points = { Pawn: 1, Knight: 3, Bishop: 3, Rook: 5, Queen: 9 }

  //Construct intial board
  var diffs = [0,+1,+2,+3,+4,+5,+6,+7];
  diffs.forEach(function(dX) {
      diffs.forEach(function(dY) {
          //empty squares
          if ((dX > 1) && (dX < 6)) return;
          //black backline
          if (dX===0){
              //rooks
              if ((dY===0) || (dY===7)){
                 var pieceName = 'R'+dX+dY;
                 self.arrPieces.push(self.pieceName = new Piece('Rook', 'black', points['Rook']));
              }
              //knights
              if ((dY===1) || (dY===6)){
                var pieceName = 'N'+dX+dY;
                self.arrPieces.push(self.pieceName = new Piece('Knight', 'black', points['Knight']));
              }
              //bishops
              if ((dY===2) || (dY===5)){
                var pieceName = 'B'+dX+dY;
                self.arrPieces.push(self.pieceName = new Piece('Bishop', 'black', points['Bishop']));
              }
              //queen
              if (dY===3){
                var pieceName = 'Q'+dX+dY;
                console.log("here");

                self.arrPieces.push(self.pieceName = new Piece('Queen', 'black', points['Queen']));
              }
              //king
              if (dY===4){
                var pieceName = 'K'+dX+dY;
                self.arrPieces.push(self.pieceName = new Piece('King', 'black', 0));
              }
          }

          //black pawns
          if (dX===1){
              var pieceName = 'P'+dX+dY;
              //console.log(pieceName);
              self.arrPieces.push(self.pieceName = new Piece('Pawn', 'black', points['Pawn']));
          }

          //white pawns
          if (dX===6){
              var pieceName = 'p'+dX+dY;
              //console.log(pieceName);
              self.arrPieces.push(self.pieceName = new Piece('Pawn', 'white', points['Pawn']));
          }

          //white backline
          if (dX===7){
              //rooks
              if ((dY===0) || (dY===7)){
                 var pieceName = 'r'+dX+dY;
                 self.arrPieces.push(self.pieceName = new Piece('Rook', 'white', points['Rook']));
              }
              //knights
              if ((dY===1) || (dY===6)){
                var pieceName = 'n'+dX+dY;
                self.arrPieces.push(self.pieceName = new Piece('Knight', 'white', points['Knight']));
              }
              //bishops
              if ((dY===2) || (dY===5)){
                var pieceName = 'b'+dX+dY;
                self.arrPieces.push(self.pieceName = new Piece('Bishop', 'white', points['Bishop']));
              }
              //queen
              if (dY===3){
                var pieceName = 'q'+dX+dY;
                self.arrPieces.push(self.pieceName = new Piece('Queen', 'white', points['Queen']));
              }
              //king
              if (dY===4){
                var pieceName = 'k'+dX+dY;
                self.arrPieces.push(self.pieceName = new Piece('King', 'white', 0));
              }
          }
          self.pieceName.setPosition([dX,dY]);
      });
  });

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
Chess.prototype.getPlayer = function(item){
  return (item === item.toLowerCase()) ? 'white' : 'black';
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
Chess.prototype.move = function(piece, destination){


    self.arrPieces.forEach(function(value,index){


        console.log(self.arrPieces[index].color, self.arrPieces[index].pointValue);

      /*if(self.arrPieces[index].color === 'white'){
         self.WhitePts += self.arrPieces[index].pointValue;
      } else {
         self.BlackPts += self.arrPieces[index].pointValue;
      }*/

      if ((self.arrPieces[index].position[0]===piece[0])
        && (self.arrPieces[index].position[1]===piece[1])){
          self.arrPieces[index].position = destination;
          console.log(Chess.prototype.display());
      }
      //self.Moves++;
      //console.log('White - '+self.WhitePts' : Black - '+self.BlackPts);
    });
}


//--------------------------------------------------
//              Chess.opening()
//--------------------------------------------------
/**
 * Advance the board to Catalan Opening, Closed Variation
 *
 */
Chess.prototype.opening = function(){
    this.move([6,3],[4,3]); //white move
    /*this.move([0,6],[2,5]); //black move
    this.move([6,2],[4,2]); //white move
    this.move([1,4],[2,4]); //black move
    this.move([6,6],[5,6]); //white move
    this.move([1,3],[3,3]); //black move
    this.move([7,5],[6,6]); //white move
    this.move([0,5],[1,4]); //black move
    this.move([7,6],[5,5]); //white move*/
}
//--------------------------------------------------
//              Chess.display()
//--------------------------------------------------
/**
 *
 * @param
 * @param
 * @param
 * @return String representation of board
 */

Chess.prototype.display = function(){

    //Copy Pasta - Douglas Crockford (JavaScript: The Good Parts, p.64)
    Array.matrix = function(numrows, numcols, initial){
       var arr = [];
       for (var i = 0; i < numrows; ++i){
          var columns = [];
          for (var j = 0; j < numcols; ++j){
             columns[j] = initial;
          }
          arr[i] = columns;
        }
        return arr;
    }

    var board = Array.matrix(8,8,0);

    self.arrPieces.forEach(function(value,index){
      var x = self.arrPieces[index].position[0];
      var y = self.arrPieces[index].position[1];
      board[x][y] = self.arrPieces[index].letter;
    })

    var spacer = '+---+---+---+---+---+---+---+---+\n';
    return spacer +
        board.map(function renderRow(row){
          return '| ' +
              row.map(function renderPosition(position){
                    if(position === 0){
                      return ' ';
                    }
                    else{
                      return position;
                    }
              }).join(' | ')
          + ' |\n';
        }).join(spacer)
    + spacer;
}

//--------------------------------------------------
//              Piece()
//--------------------------------------------------
/**
 * Represent a chesspiece on the board with name and
 * color and appropriate starting position
 *
 * @param String name
 * @param String color
 */
function Piece(name,color,pointValue){
    this.name = name;
    this.color = color;
    this.pointValue = pointValue;
    this.letter = this.toString();
}

//--------------------------------------------------
//              Piece.getName()
//--------------------------------------------------
/**
 * @return String name of Piece, e.g. 'Queen', 'Pawn'
 */
Piece.prototype.getName = function(){
    return this.name;
}

//--------------------------------------------------
//              Piece.getColor()
//--------------------------------------------------
/**
 * @return String color of Piece, e.g. 'black' or 'white'
 */
Piece.prototype.getColor = function(){
    return this.color;
}

//--------------------------------------------------
//              Piece.setPointValue()
//--------------------------------------------------
/**
 * @param Number point value of Piece
 */
Piece.prototype.setPointValue = function(){
    return this.pointValue;
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
Piece.prototype.setPosition = function(position){
    this.position = position;
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
    if( this.name === "Rook") {
      return (this.color === "black") ? "R" : "r";
    }
    if( this.name === "Knight") {
      return (this.color === "black") ? "N" : "n";
    }
    if( this.name === "Bishop") {
      return (this.color === "black") ? "B" : "b";
    }
    if( this.name === "Queen") {
       return (this.color === "black") ? "Q" : "q";
    }
    if( this.name === "King") {
      return (this.color === "black") ? "K" : "k";
    }
    if( this.name === "Pawn") {
      return (this.color === "black") ? "P" : "p";
    }
}

//--------------------------------------------------
//              Position()
//--------------------------------------------------

/**
 * Represent a position on a chessboard with coordinates
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Array of x,y coordinates
 */
function Position(x,y){
  return [x,y];
}
