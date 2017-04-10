// Create our 'main' state that will contain the game
var level16State = {
    

preload: function() { 
        game.load.image('robot', 'assets/robot_row.png');
        game.load.image('stripes', 'assets/stripes.png');
        game.load.image('metal', 'assets/metal.png');
        game.load.image('vertigo', 'assets/vertigo.png');
        game.load.image('rising-smoke', 'assets/level16/rising-smoke.png');
        game.load.image('smoke-puff', 'assets/level16/smoke-puff.png');
        game.load.image('white-smoke', 'assets/level16/white-smoke.png');
        game.load.image('curse', 'assets/level16/curse.png');
    game.load.image('text1', 'assets/level16/text1.png');
    
    
    game.load.image('background', 'assets/level14/background.png');
    game.load.spritesheet('conveyor_automated_left', 'assets/level14/conveyor_automated_left_sheet.png', 691, 569, 6);
    game.load.spritesheet('conveyor_automated', 'assets/level14/conveyor_automated_sheet.png', 691, 569, 6);

    
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();

    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.setTo(0.5,0.5);
    
    //
//    var label = game.add.text(game.width/6, game.height/10-150,
//            'If these machines break, I\'ll be screwed', { font: '60px Arial', fill: '#ffffff', wordWrap: true, wordWrapWidth: game.width-300});
//     
//    this.robot1 = game.add.sprite(game.width/5, 300, 'robot');
//    this.robot2 = game.add.sprite(game.width/5+200, 300, 'robot');
//    this.robot3 = game.add.sprite(game.width/5+400, 300, 'robot');
//    this.vertigo = game.add.sprite(game.width/2, game.height/2, 'vertigo');
//    this.vertigo.scale.setTo(4, 4);
//    this.vertigo.anchor.set(0.5,0.5);
     
        var conveyor_automated1 = game.add.sprite(-100, game.height/5-200, 'conveyor_automated_left');
        var beat5 = conveyor_automated1.animations.add('beat5');
        conveyor_automated1.animations.play('beat5', 6, true);

        var conveyor_automated2 = game.add.sprite(game.width/2, game.height*2/5-200, 'conveyor_automated');
        var beat6 = conveyor_automated2.animations.add('beat6');
        conveyor_automated2.animations.play('beat6', 6, true);

        var conveyor_automated3 = game.add.sprite(-100, game.height*3/5-200, 'conveyor_automated_left');
        var beat7 = conveyor_automated3.animations.add('beat7');
        conveyor_automated3.animations.play('beat7', 6, true);

        var conveyor_automated4 = game.add.sprite(game.width/2, game.height*4/5-200, 'conveyor_automated');
        var beat8 = conveyor_automated4.animations.add('beat8');
        conveyor_automated4.animations.play('beat8', 6, true);

    this.game.world.bringToTop(this.text1);
    
    //game.add.tween(this.vertigo).to({alpha: 0}, 3000).to({alpha: 0.9}, 500,Phaser.Easing.Elastic.Out).loop().start();

    //smoke particles
    var emitter;
    emitter = game.add.emitter(game.world.centerX, 500, 400);
    emitter.makeParticles('rising-smoke');

    emitter.setXSpeed(0, 0);
    emitter.setYSpeed(0, 0);

    emitter.setRotation(0, 0);
    emitter.setAlpha(0.1, 1, 3000,Phaser.Easing.Linear.None,true);
    //emitter.setAlpha(0);
    emitter.setScale(0.4, 5, 0.4, 5, 6000, Phaser.Easing.Quintic.Out);
    emitter.gravity = -100;

    //adjust frequency here
    emitter.start(false, 4000, 500);

    emitter.emitX = game.width/2;
    emitter.emitY = game.height/2;

    //this.timer912381 = this.game.time.events.add(2000, this.makeSmoke, this);
    
    //game.time.events.add(Phaser.Timer.SECOND * 4, display1, this);
     
//    this.startTime = new Date();
//    this.totalTime = 30;
//    this.timeElapsed = 0;
//    var currentTime = new Date();
//    var timeDifference = me.startTime.getTime() - currentTime.getTime();
//    this.timeElapsed = Math.abs(timeDifference / 1000);
    
//    var filter;
//    var sprite;
//
//        
//        var fragmentSrc = [
//
//        "precision mediump float;",
//
//        "uniform float     time;",
//        "uniform vec2      resolution;",
//        "uniform sampler2D iChannel0;",
//
//        "#ifdef GL_ES",
//        "precision highp float;",
//        "#endif",
//
//        "#define PI 3.1416",
//
//        "void main( void ) {",
//
//            "//map the xy pixel co-ordinates to be between -1.0 to +1.0 on x and y axes",
//            "//and alter the x value according to the aspect ratio so it isn't 'stretched'",
//
//            "vec2 p = (2.0 * gl_FragCoord.xy / resolution.xy - 1.0) * vec2(resolution.x / resolution.y, 1.0);",
//
//            "//now, this is the usual part that uses the formula for texture mapping a ray-",
//            "//traced cylinder using the vector p that describes the position of the pixel",
//            "//from the centre.",
//
//            "vec2 uv = vec2(atan(p.y, p.x) * 1.0/PI, 1.0 / sqrt(dot(p, p))) * vec2(2.0, 1.0);",
//
//            "//now this just 'warps' the texture read by altering the u coordinate depending on",
//            "//the val of the v coordinate and the current time",
//
//            "uv.x += sin(2.0 * uv.y + time * 0.5);",
//
//            "//this divison makes the color value 'darker' into the distance, otherwise",
//            "//everything will be a uniform brightness and no sense of depth will be present.",
//
//            "vec3 c = texture2D(iChannel0, uv).xyz / (uv.y * 0.5 + 1.0);",
//
//            "gl_FragColor = vec4(c, 1.0);",
//
//        "}"
//    ];
//
//    //  Texture must be power-of-two sized or the filter will break
//    sprite = game.add.sprite(0, 0, 'metal');
//    sprite.width = 800;
//    sprite.height = 600;
//
//    var customUniforms = {
//        iChannel0: { type: 'sampler2D', value: sprite.texture, textureData: { repeat: true } }
//    };
//
//    filter = new Phaser.Filter(game, customUniforms, fragmentSrc);
//    filter.setResolution(800, 600);
//
//    sprite.filters = [ filter ];
        
    
},

update: function() {
    //this.selectPill();

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    this.display1();
    //filter.update();
},

display1: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.curse = game.add.sprite(game.width/2, game.height-500, 'curse');
        this.curse.anchor.set(0.5,0.5);
        this.changeTimer = this.game.time.events.add(5000, this.nextState, this);
        //this.shake();
        //this.camera.shake(0.05, 500);
        //this.game.camera.shake(0.02, 300);
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},

makeSmoke: function(){

    //emitter.start(false, 4000, 500);
    emitter.setAlpha(0.1, 1, 3000,Phaser.Easing.Linear.None,true);
    
},
    
    
//selectPill: function(){
//    
//    if(this.cursor.right.isDown){
//        //this.redpill.scale(5,5);
//        this.redpill.scale.setTo(5, 5);
//        //var tween = game.add.tween(redpill).to( { scale: 1.5 }, 2000, "Linear", true, 0, -1);
//    }
//    else if(this.cursor.left.isDown){
//        //this.bluepill.scale(5,5);
//        this.bluepill.scale.setTo(5, 5);
//    }
//},

//shake: function() {
//  game.camera.shake(0.05, 500);  
//},
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level17');
},

};
