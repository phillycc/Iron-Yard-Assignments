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
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x, y){
    this.board[x][y] = false;
}

/**
 * Update the `board` by applying the `rules`
 */
Game.prototype.rules = function(){

}

Game.prototype.display = function(){

}
