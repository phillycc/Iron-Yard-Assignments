
/* "Conway's Game of Life" should utilize only Array methods.
* Use the format and display() function provided for "Conway"
* var game = {
*   board: undefined,
*   newBoard: function(){  i.e. board()  },
*   rules: function(cell, neighbors){  i.e. conway(cell, neighbors)  },
*   neighborsOf: function(x,y){ . . . },
*   tick: function(){ accepts nothing, alters `game.board` },
*
*   WARNING: This is VOODOO MAGIC...
*
*   GIVEN:
*     this.board === [
*        [ false, true,  false ],
*        [ false, true,  false ],
*        [ false, true,  false ],
*     ];
*
*   EXPECT:
*     +---+---+---+
*     |   | X |   |
*     +---+---+---+
*     |   | X |   |
*     +---+---+---+
*     |   | X |   |
*     +---+---+---+
*
*   display: function(){
*     var spacer = '+---+---+---+\n';
*     return spacer +
*       // Apply `renderRow` to each `row` in `board`...
*       this.board.map(function renderRow(row){
*          return '| ' +
*          // Apply `renderCell` to each `cell` in `row`...
*          row.map(function renderCell(cell){
*            // return 'X' if `cell` is TRUTHY otherwise return ' '
*            return cell && 'X' || ' ';
*          }).join(' | ') // Place ' | ' between each `cell`...
*        + ' |\n';
*       }).join(spacer) // Place `spacer` between each `row`...
*      + spacer;
*   } // END display
* } // END game
*/

var game = {
    board: undefined,
    newBoard: function(){
        return this.board = [
          [ false, true, false ],
          [ false, true, false ],
          [ false, true, false ],
        ];
    },
    rules: function(cell, neighbors){
        var liveNeighbors = neighbors.filter(function(value){
          return value;
        });
        liveNeighbors = liveNeighbors.length;
        //apply rules
        if (cell && liveNeighbors===2) return true;
        if (liveNeighbors===3) return true;
        return false;
    },
    neighborsOf: function(x,y){
        var diffs = [ -1, 0, +1 ],
        neighbors = [ ];

        diffs.forEach(function(dX){
            diffs.forEach(function(dY){
                if(this.board.length===0) return;
                // skip this cell
                if ( dX === 0 && dY === 0 ) return;
                //skip if row index does not exist
                if (((x + dX) < 0) || ((x + dX)>2)) return;
                //skip if col index does not exist
                if (((y + dY) < 0) || ((y + dY)>2)) return;
                neighbors.push(this.board[x + dX][y + dY]);
            });
        });
        return neighbors;
    },
    tick: function(){
        var after = this.board;
        this.board.forEach(function(row, x){
           row.forEach(function(cell, y){
                after[x][y]=game.rules(cell, game.neighborsOf(x,y));
            });
        });
        return after;
    },
    /**
     * WARNING: This is VOODOO MAGIC...
     *
     * GIVEN:
     *   this.board === [
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *   ];
     *
     * EXPECT:
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     */
    display: function(){
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
} // END game
console.log(game.display(game.tick(game.newBoard())));
