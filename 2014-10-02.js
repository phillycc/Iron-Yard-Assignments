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

//******** PRODUCTION CODE ************//
/**
 *
 * The tick function is passed a 3x3 board,
 * applies Conway's Game of Life rules, and
 * returns a 3x3 board after a single tick.
 *
 * Function Definition: tick()
 * @param: Array of Array of Boolean board
 * @return: Array of Array of Boolean
 *
**/
function tick(board){
  //create placeholder array for the next board
  arrNextBoard=[];
  //loops through rows
  for (var i = 0; i < board.length; i++){
      //loops through columns
      for (var j = 0; j < board[i].length; j++){
          arrNextBoard.push(conway(board[i][j], neighborOf(board, i, j)));
      }
  }

  return arrNextBoard;
}
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
function conway(cell, neighbors){
  //initializes counter of liveNeighbors to zero
  var liveNeighbors=0;

  //counts the number of live neighbors
  for (i = 0; i < neighbors.length; i++) {
    if (neighbors[i] ===  true)
      liveNeighbors++;
  }
  //checks cell's status and applies Conway's rules
  if (cell===true){
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
 * @param: Array of Array of Boolean board
 * @param: Number row
 * @param: Number col
 * @return: Array of Array of Boolean
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

//************ TEST CODE ************//

var assert = require('assert');
/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected, success){
    if (success === undefined) success = actual+' >> '+expected+' pass!';
    assert.strictEqual(actual, expected);
    console.log(success);
}

var testCases = [
    // CASE 1 - Initially Empty Board
    [
      [ false, false, false ],
      [ false, false, false ],
      [ false, false, false ],
    ],
    // CASE 2 - Just One Cell
    [
      [ false, false, false ],
      [ false, true, false ],
      [ false, false, false ],
    ],
    // CASE 3 - Two Cells in Any Arrangement (Horizontal)
    [
      [ false, false, false ],
      [ false, true, true ],
      [ false, false, false ],
    ],
    // CASE 4 - Two Cells in Any Arrangement (Diagonal)
    [
      [ true, false, false ],
      [ false, true, false ],
      [ false, false, false ],
    ],
    // CASE 5 - Two Cells in Any Arrangement (Vertical)
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, false, false ],
    ],
    // CASE 6 - Three Cells in a Line (Vertical)
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ],
    // CASE 7 - Three Cells in a Line (Horizontal)
    [
      [ false, false, false ],
      [ true, true, true ],
      [ false, false, false ],
    ],
    // CASE 8 - Three Cells in a Line (Diagonal)
    [
      [ true, false, false ],
      [ false, true, false ],
      [ false, false, true ],
    ]
];

console.log('\n=====Production Tests======')

for (var index=0; index<testCases.length; index++){
  // console.log('CASE '+(index+1)+':\n'+tick(testCases[index]));
}

console.log('\n======Function Tests=======')

var neighborsTestCases = [
  [
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ],0,0,3
  ],
  [
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ],1,0,5
  ],
  [
    [
      [ false, true, false ],
      [ false, true, false ],
      [ false, true, false ],
    ],1,1,8
  ],
];

console.log('\n\nTESTS: neighborsOf\n');
for (var index=0; index<neighborsTestCases.length; index++){
  // test(neighborsOf(neighborsTestCases[index][0],neighborsTestCases[index][1],neighborsTestCases[index][2]).length,neighborsTestCases[index][3]);
}

var conwayTestCases = [
  [
    [false,
    [
      [ false, true, false, true, false ],
    ],false
  ],
  [
    [false,
    [
      [ false, true, false, true, true ],
    ],true
  ],
  [
    [true,
    [
      [ false, true, true ],
    ],true
  ],
  [
    [true,
    [
      [ false, true, false, true, false, true, false, false ],
    ],true
  ]
];
console.log('\n\nTESTS: conway\n');
for (var index=0; index<conwayTestCases.length; index++){
//   test(conway(conwayTestCases[index][0],conwayTestCases[index][1],conwayTestCases[index][2]),conwayTestCases[index][3]);
}
