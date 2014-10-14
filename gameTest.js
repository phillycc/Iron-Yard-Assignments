var Game = require('./game.js');

var assert = require('chai').assert;

describe('Game.prototype.isAlive', function(){
    var thisGame = new Game();
    it('should be a function', function(){
        assert.isFunction(thisGame.isAlive);
    });
    it('should check if is alive', function(){
        assert.isTrue(thisGame.isAlive());
    });
});
