var cell = false,
  neighbors = [
    false, false, false,
    false,        false,
    false, false, false
  ];

var assert = require('assert');

function test(actual, expected, success){
    assert(actual === expected) || console.log(success);
}

/**
 *
 * The conway function determines if a cell in
 * Conway's Game of Life is alive or dead for
 * as single tick, given the neighbors of that
 * cell.
 *
**/
function conway(cell, neighbor){

  //Any live cell with fewer than two live neighbours dies
  //Any live cell with more than three live neighbours dies
  //Any live cell with 2 or 3 live neighbours lives (survive)
  if (numberOfLiveNeighbors(neighbors) === 3 || numberOfLiveNeighbors(neighbors) ===2){
      return true;
  }

  //Any dead cell with exactly three live neighbours becomes a live cell
  if (cell === false && numberOfLiveNeighbors(neighbors) === 3){
    cell = true;
    return true;
  }
  return false;
}


function numberOfLiveNeighbors(neighbors){
  var liveCells=0;
  var index=0;
  while ( index < neighbors.length ){
    if (neighbors[index] === true){
        liveCells++;
    }
    index++;
  }
  return liveCells;
}

test(numberOfLiveNeighbors([
  false, false, false,
  false,        false,
  false, false, false
  ]),0,'No live cells');

test(numberOfLiveNeighbors([
  false, true, false,
  false,        false,
  false, false, false
  ]),1,'1 live neighbor');
