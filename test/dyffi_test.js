var Diffy = require('../dyffi.js');

describe("Dyffi", function(){
    var dyffi;
    var game;
    
    before(function(){
        dyffi = new Dyffi();
        
        function MyGame(){
        };
        
        game = new MyGame();
    })
    
    it("should allow to add complexity argument", function(){
        dyffi.add('speed', 10, 1000, function(new_speed){
            game.speed = new_speed;
        }, 100);
        
        dyffi.add('instability', 10, 1000, function(new_instability){
            game.instability = new_instability;
        }, 500);
    });
    
    it("should allow to remove complexity argument", function(){
        dyffi.remove('speed');        
        dyffi.add('instability');
    });
    
    it("should allow to set target value", function(){
        dyffi.target(1000, function(){
            return game.value();
        });
    });
    
    it("should make adjustment", function(){
        diffy.adjust();
    });
});