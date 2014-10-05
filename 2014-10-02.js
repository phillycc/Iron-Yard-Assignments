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
    //console.log(success);
}

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
/*function board(){
    return [
        [ false, false, false ],
        [ false, false, false ],
        [ false, false, false ],
    ];
};*/

/**
 *
 * The conway function determines if a cell in
 * Conway's Game of Life is alive or dead after
 * a single tick given the status of the neighbors
 * of that cell.
 *
 * Function Definition: conway()
 * @param: Array of Array of Boolean board
 * @param: Number row
 * @param: Number col
 * @return: Boolean
 *
**/
function conway(board, row, col){
  //assigns boolean status of current cell
  var cellStatus = board[row][col];

  //assigns neighborsOf array to a variable
  var neighbors = neighborsOf(board,row,col);

  //initializes counter of liveNeighbors to zero
  var liveNeighbors=0;

  //counts the number of live neighbors
  for (i = 0; i < neighbors.length; i++) {
    if (neighbors[i] ===  true)
      liveNeighbors++;
  }

  console.log('Cell ('+cellStatus+') '+row+','+col+' has '+liveNeighbors+' live neighbors.')

  if (cellStatus===true){
      //RULE 1 - live cell < 2 live neighbors : return false
      if (liveNeighbors < 2){
          return false;
      //RULE 2 - live cell with 2 or 3 live neighbors : return true
      } else if (liveNeighbors===2 || liveNeighbors===3){
          return true;
      //RULE 3 - live cell > 3 live neighbors : return false
      } else {
          return false;
      }
  } else {
      //RULE 4 - dead cell with 3 live neighbors : return true
      if (liveNeighbors===3){
          return true;
      } else {
          return false;
      }
  }
}

/**
 *
 * The neighborsOf function returns a list of all
 * neighboring cells inside a 3x3 board of cells
 * for a given row-column coordinate
 *
 * Function Definition: neighborsOf()
 * @param: Number row
 * @param: Number col
 * @return: Array of Array of Number
 *
**/
function neighborsOf(board,row,col){
    //return boolean values of nearest neighbors for given col,row
    if (row===0 && col===0){
        return [
          board[0][1],board[1][0],board[1][1]
        ];
    }
    if (row===0 && col===1){
        return [
          board[0][0],board[1][0],board[1][1],
          board[0][2],board[1][2]
        ];
    }
    if (row===0 && col===2){
        return [
          board[0][1],board[1][1],board[1][2]
        ];
    }
    if (row===1 && col===0){
        return [
          board[0][0],board[0][1],board[1][1],
          board[2][0],board[2][1]
        ];
    }
    if (row===1 && col===1){
        return [
          board[0][0],board[0][1],board[0][2],
          board[1][0],board[1][2],board[2][0],
          board[2][1],board[2][2]
        ];
    }
    if (row===1 && col===2){
        return [
          board[0][1],board[0][2],board[1][1],
          board[2][1],board[2][2]
        ];
    }
    if (row===2 && col===0){
        return [
          board[1][0],board[1][1],board[2][1]
        ];
    }
    if (row===2 && col===1){
        return [
          board[1][0],board[2][0],board[1][1],
          board[1][2],board[2][2]
        ];
    }
    if (row===2 && col===2){
        return [
          board[1][1],board[1][2],board[2][1]
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
  //creates array to hold updated board values
  var arrNextBoard = [];
  //loops through board rows
  for (var i = 0; i < board.length; i++){
      //loops through board columns
      for (var j = 0; j < board[i].length; j++){
          console.log(i+','+j+' return: '+conway(board,i,j));
      }
  }
}

var testCases = [
  [
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ],0,1
  ]
];

console.log(testCases[0][0]);

console.log(tick(testCases[0][0]));

/*for (var index=0; index<testCases.length; index++){
  console.log(neighborsOf(testCases[index][0],testCases[index][1],testCases[index][2]));
}*/

//console.log(conway(testCases[0][0],testCases[0][1],testCases[0][2]));

/*
for (var index=0; index<testCases.length; index++){

console.log(testCases[index][0]);
console.log(testCases[index][1]);
console.log(testCases[index][2]);
console.log(conway(testCases[index][0],testCases[index][1],testCases[index][2]));



//  test(conway(testCases[index][0],testCases[index][1],testCases[index][2]),false);
}

test(neighborsOf(0,0).length,3,'Number of neighbors of [0,0] should be 3');
test(neighborsOf(0,1).length,5,'Number of neighbors of [0,1] should be 5');
test(neighborsOf(0,2).length,3,'Number of neighbors of [0,2] should be 3');
test(neighborsOf(1,0).length,5,'Number of neighbors of [1,0] should be 5');
test(neighborsOf(1,1).length,8,'Number of neighbors of [1,1] should be 8');
test(neighborsOf(1,2).length,5,'Number of neighbors of [1,2] should be 5');
test(neighborsOf(2,0).length,3,'Number of neighbors of [2,0] should be 3');
test(neighborsOf(2,1).length,5,'Number of neighbors of [2,1] should be 5');
test(neighborsOf(2,2).length,3,'Number of neighbors of [2,2] should be 3');
*/
