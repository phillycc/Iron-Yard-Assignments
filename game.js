module.exports = Game;

function board(){
  [
    [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
  ];
}

function Game(){
  this.board = board;
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
Game.prototype.isAlive = function(x, y){

}

/**
 * Make the cell at {x,y} "alive", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x, y){

}

/**
 * Make the cell at {x,y} "dead"
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x, y){

}

/**
 * Update the `board` by applying the `rules`
 */
Game.prototype.rules = funciton(){

}

Game.prototype.display = function(){

}
