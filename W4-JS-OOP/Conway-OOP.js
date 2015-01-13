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
    return this.board[x][y];
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
    var diffs = [ -1, 0, +1 ];
    var liveNeigbors = 0;
    var self = this;

    diffs.forEach(function(dX){
        diffs.forEach(function(dY){
            if (self.board.length === 0) return;
            // skip this cell
            if ( dX === 0 && dY === 0 ) return;
            //skip if row index does not exist
            if (((x + dX) < 0) || ((x + dX)>2)) return;
            //skip if col index does not exist
            if (((y + dY) < 0) || ((y + dY)>2)) return;
            if (self.board[x + dX][y + dY]) liveNeigbors++;
        });
    });
    return liveNeigbors;
}
/**
 * Returns state of a cell as alive or dead based
 * on the rules of Conway's Game of Life
 *
 * @param Boolean cell
 * @param Array of Boolean representing neighbors of `cell`
 * @return Boolean state of cell
 */
Game.prototype.rules = function(cell, neighbors){
      //apply rules
      if (cell && neighbors===2) return true;
      if (neighbors===3) return true;
      return false;
}
/**
 *
 * Returns a 3x3 board after a single tick
 * based on Conway's Game of life.
 *
**/
Game.prototype.tick = function(){
    var newBoard = board();
    var self = this;

    this.board.forEach(function(row, x){
        row.forEach(function(cell,y){
            var newCell = self.rules(cell, self.neighborsOf(x,y));
            newBoard[x][y] = newCell;
        });
    });
    this.board = newBoard;
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
