var Game = require('./game.js');

var assert = require('chai').assert;

describe('Constructor function isAlive', function(){
    var thisGame = new Game();
    it('should be a function', function(){
        assert.isFunction(thisGame.isAlive);
    });
    it('should return a Boolean', function(){
        assert.isBoolean(thisGame.isAlive());
    });
    it('should return true if cell state is true', function(){
        assert.isTrue(thisGame.isAlive());
    });
});
