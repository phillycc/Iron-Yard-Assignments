module.exports = Game;

function board(){
  return [
    [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
  ];
}

function Game(){
    this.board = board();
}
/**
 * Checks cell at {x,y} for "aliveness"
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
Game.prototype.isAlive = function(x,y){
    return (this.board[x][y] ? true : false);
}

/**
 * Make the cell at {x,y} "alive"
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x,y){
    this.board[x][y] = true;
}

/**
 * Make the cell at {x,y} "dead"
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x, y){
    this.board[x][y] = false;
}
/**
 * Returns list of all neighboring cells
 * of cell at {x,y} inside a 3x3 board
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Array of values from `board()` that are neighbors of cell at {x,y}
 */
Game.prototype.neighborsOf = function(x,y){
    var diffs = [ -1, 0, +1 ],
    neighbors = [ ];
    board = this.board;

    diffs.forEach(function(dX){
        diffs.forEach(function(dY){
            if (board.length === 0) return;
            // skip this cell
            if ( dX === 0 && dY === 0 ) return;
            //skip if row index does not exist
            if (((x + dX) < 0) || ((x + dX)>2)) return;
            //skip if col index does not exist
            if (((y + dY) < 0) || ((y + dY)>2)) return;
            neighbors.push(board[x + dX][y + dY]);
        });
    });
    return neighbors;
}
/**
 * Returns state of a cell as alive or dead based
 * on the rules of Conway's Game of Life
 *
 * @param Boolean cell
 * @param Array neighbors
 * @return Boolean state of cell
 */
Game.prototype.rules = function(cell, neighbors){
      var liveNeighbors = neighbors.filter(function(value){
        return value;
      });
      liveNeighbors = liveNeighbors.length;
      //apply rules
      if (cell && liveNeighbors===2) return true;
      if (liveNeighbors===3) return true;
      return false;
}
/**
 *
 * The tick function is passed a 3x3 board,
 * applies Conway's Game of Life rules, and
 * returns a 3x3 board after a single tick.
 *
 * Function Definition: tick()
 * @return: Array of Array of Boolean
 *
**/
Game.prototype.tick = function(){
    var nextBoard = board();
    for (var x = 0; x < this.board.length; x++){
        for(var y = 0; y < this.board[x].length; y++){
           nextBoard[x][y]=this.rules(this.board[x][y], this.neighborsOf(x,y));
        };
    };
    this.board = nextBoard;
    return this.board;
}

Game.prototype.display = function(){
    var spacer = '+---+---+---+\n';

    return spacer +
        // Apply `renderRow` to each `row` in `board`...
        this.board.map(function renderRow(row){
            return '| ' +
                // Apply `renderCell` to each `cell` in `row`...
                row.map(function renderCell(cell){
                    // return 'X' if `cell` is TRUTHY otherwise return ' '
                    return cell && 'X' || ' ';
                }).join(' | ') // Place ' | ' between each `cell`...
            + ' |\n';
        }).join(spacer) // Place `spacer` between each `row`...
        + spacer;
} // END display
