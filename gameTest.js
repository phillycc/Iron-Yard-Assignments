var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var Game = require('./game.js');

describe('Conway\'s Game of Life: Voodoo Black Magic Edition\n', function(){
    var aGame = new Game();

    describe('Constructor function setAlive', function(){
        it('should be a function', function(){
            assert.isFunction(aGame.setAlive);
        });
        it('should return undefined', function(){
            assert.isUndefined(aGame.setAlive(0,0));
        });
        it('should set false cell to true\n', function(){
            assert.isTrue(aGame.isAlive(0,0));
        });
    });

    describe('Constructor function setDead', function(){
        it('should be a function', function(){
            assert.isFunction(aGame.setDead);
        });
        it('should return undefined', function(){
            assert.isUndefined(aGame.setDead(0,0));
        });
        it('should set false cell to false\n', function(){
            assert.isFalse(aGame.isAlive(0,0));
        });
    });

    describe('Constructor function isAlive', function(){
        it('should be a function', function(){
            assert.isFunction(aGame.isAlive);
        });
        it('should return a Boolean', function(){
            assert.isBoolean(aGame.isAlive(0,0));
        });
        it('should return false if cell state is false\n', function(){
            assert.isFalse(aGame.isAlive(0,0));
            assert.isFalse(aGame.isAlive(0,1));
            assert.isFalse(aGame.isAlive(0,2));
            assert.isFalse(aGame.isAlive(1,0));
            assert.isFalse(aGame.isAlive(1,1));
            assert.isFalse(aGame.isAlive(1,2));
            assert.isFalse(aGame.isAlive(2,0));
            assert.isFalse(aGame.isAlive(2,1));
            assert.isFalse(aGame.isAlive(2,2));
        });
    });
});
