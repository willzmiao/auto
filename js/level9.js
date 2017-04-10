var level9State = {
    
 
preload: function() { 
    
    game.load.image('background', 'assets/level9/background.png');
    game.load.image('conveyor', 'assets/level9/conveyor.png');
    game.load.image('workers', 'assets/level9/workers.png');
    game.load.image('workers_spotlight', 'assets/level9/workers_spotlight.png');
    game.load.image('workers_shadow', 'assets/level9/workers_shadow.png');
    game.load.image('light', 'assets/level9/light.png');
    game.load.image('text1', 'assets/level9/text1.png');
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    this.workers_shadow = game.add.sprite(game.width/3-50, game.height/2, 'workers_shadow');
    this.workers = game.add.sprite(game.width/3-50, game.height/2, 'workers');
    this.workers_spotlight = game.add.sprite(game.width/3+200, game.height/2+230, 'workers_spotlight');
    this.workers.anchor.setTo(.5,.5);
    this.workers_shadow.anchor.setTo(.5,.5);
    this.workers_spotlight.anchor.setTo(.5,.5);
    
    this.conveyor = game.add.sprite(game.width*2/3, game.height/2+300, 'conveyor');
    this.conveyor.anchor.setTo(.5,.5);
    this.conveyor.alpha = 0;
    
    this.light = game.add.sprite(game.width*2/3+30, game.height/2+350, 'light');
    this.light.anchor.setTo(.5,.5);
    this.light.alpha = 0;


    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.set(0.5,0.5);
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    },

update: function() {
    
    //restart level and next level
    //var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    
    if(this.conveyor.alpha === 0){
    this.display1();
    }
    
//    else if(this.workers.alive){
//    this.display2();
//    }
//    
    
},

display1: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.conveyor.alpha = 1; 
        game.add.tween(this.light).to({alpha: .9}, 700).to({alpha: 0}, 700,Phaser.Easing.Bounce.InOut).loop().start();    
        game.add.tween(this.workers_spotlight).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
        game.add.tween(this.workers).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
        
        //this.timer913929 = this.game.time.events.add(2000, this.killWorkers, this);    
        this.timer91230 = this.game.time.events.add(5000, this.nextState, this);
        //this.vo2.play();    
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    

killWorkers: function(){
  this.workers.kill();  
},
    
display2: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.workers.kill();
        this.workers_spotlight.kill();
        this.timer91230 = this.game.time.events.add(5000, this.nextState, this);
        //this.vo2.play();    
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},    
    
nextState: function(){
    game.state.start('level10');
},
    
};
