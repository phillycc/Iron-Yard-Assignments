/**
 * Conway's Game of Life (LITE)
 *
 * @link http://en.wikipedia.org/wiki/Conway's_Game_of_Life
 *
 * Consider a finite 3x3 board of cells:
 *
 *     0   1   2
 *   +---+---+---+
 * 0 |   |   |   |
 *   +---+---+---+
 * 1 |   |   |   |
 *   +---+---+---+
 * 2 |   |   |   |
 *   +---+---+---+
 *
 * Represented as:
 *
 * board = [
 *   [ false, false, false ],
 *   [ false, false, false ],
 *   [ false, false, false ],
 * ]
 *
 * Where each Boolean value represents the state of a `cell`, either
 * alive (`true`) or dead (`false`). Each cell can be accessed with
 * the index operators (`[n]`), e.g. `board[0][1]`, `board[2][2]`.
 *
 * Write a function called `conway` that...
 *
 * - GIVEN the state of a `cell` and a list of neighboring cells...
 * - THEN returns the state of the `cell` with the rules applied.
 *
 * Write a function called `neighborsOf` that...
 *
 * - GIVEN a `board` and `row` and `col` coordinates...
 * - THEN returns a list of the neighboring cells.
 *
 * Write a function called `tick` that...
 *
 * - GIVEN a `board`...
 * - THEN returns a NEW `board` representing the next generation.
 *
 * Use the provided `board` function to produce the initially empty
 * board, and test the following starting positions:
 *
 * Initially Empty Board
 * =====================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   |   |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Just One Cell
 * =============
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Two Cells in Any Arrangement
 * ============================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X | X | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 | X |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Three Cells in a Line
 * =====================
 *       start              tick 1             tick 2
 *     0   1   2          0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 0 |   | X |   |    0 |   |   |   |    0 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 | X | X | X | >> 1 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 2 |   | X |   |    2 |   |   |   |    2 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 *
 * You may test more starting position, if you like, of course.
 */

var assert = require('assert');

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
function board(){
    return [
        [ true, false, false ],
        [ false, false, false ],
        [ false, false, false ],
    ];
};

var arrBoard=board();
for (var i = 0; i < arrBoard.length; i++){
    for (var j = 0; j < arrBoard[i].length; j++){
        console.log(arrBoard[i][j]);
    }
}

var neighbors = neighborsOf(1,1);
console.log(neighbors.length);


/**
 *
 * The conway function determines if a cell in
 * Conway's Game of Life is alive or dead given
 * the neighbors of that cell.
 *
**/
function conway(board, row, col){
  // grabs the input board
  var arrBoard=board();
  // grabs neighbors of a given cooridnate
  var neighbors = neighborsOf(row,col);



  // applies Conway rules to return whether cell lives (True) or dies (False)
}

/**
 *
 * The neighborsOf function returns a list of all
 * neighboring cells inside a 3x3 board of cells
 * for a given row-column coordinate
 *
**/
function neighborsOf(row,col){
    if (row===0 && col===0){
        return [
          [0,1],[1,0],[1,1]
        ];
    }
    if (row===0 && col===1){
        return [
          [0,0],[1,0],[1,1],[1,2],[0,2]
        ];
    }
    if (row===0 && col===2){
        return [
          [0,1],[1,1],[1,2]
        ];
    }
    if (row===1 && col===0){
        return [
          [0,0],[0,1],[1,1],[2,0],[2,1]
        ];
    }
    if (row===1 && col===1){
        return [
          [0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]
        ];
    }
    if (row===1 && col===2){
        return [
          [0,1],[0,2],[1,1],[2,1],[2,2]
        ];
    }
    if (row===2 && col===0){
        return [
          [1,0],[1,1],[2,1]
        ];
    }
    if (row===2 && col===1){
        return [
          [1,0],[1,1],[1,2],[2,0],[2,2]
        ];
    }
    if (row===2 && col===2){
        return [
          [1,1],[1,2],[2,1]
        ];
    }
}

/**
 *
 * The tick function is passed a 3x3 board,
 * applies Conway's Game of Life rules, and
 * returns a 3x3 board after a single tick.
 *
**/
function tick(board){
  // loops over list in board for each row-column combo
  // calls conway passing the board and a row-column
  // updates board based on returned cell values
}

console.log(board);

// determines each coordinate if True or False
//for(var i = 0; i < board.length; i++) {
//    var cell = board[i];
//    for(var j = 0; j < cell.length; j++) {
//        console.log("cell[" + i + "][" + j + "] = " + cell[j]);
//    }
//}

//test(neighborsOf(0,0).length,3,'Number of neighbors of [0,0] should be 3');
//test(neighborsOf(0,1).length,5,'Number of neighbors of [0,1] should be 5');
//test(neighborsOf(0,2).length,3,'Number of neighbors of [0,2] should be 3');
//test(neighborsOf(1,0).length,5,'Number of neighbors of [1,0] should be 5');
//test(neighborsOf(1,1).length,8,'Number of neighbors of [1,1] should be 8');
//test(neighborsOf(1,2).length,5,'Number of neighbors of [1,2] should be 5');
//test(neighborsOf(2,0).length,3,'Number of neighbors of [2,0] should be 3');
//test(neighborsOf(2,1).length,5,'Number of neighbors of [2,1] should be 5');
//test(neighborsOf(2,2).length,3,'Number of neighbors of [2,2] should be 3');
