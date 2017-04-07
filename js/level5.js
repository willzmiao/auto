var level5State = {
    
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the images and sounds 
        //game.load.image('bird', 'assets/bird.png'); 
        game.load.spritesheet('heart', 'assets/heart.png', 68, 62, 6);
		
        game.load.image('background', 'assets/level5/background.png'); 
        game.load.image('pipe', 'assets/level5/block_large.png');
        game.load.image('cloud1', 'assets/level5/cloud1.png');
        game.load.image('cloud2', 'assets/level5/cloud2.png');
        game.load.image('cloud3', 'assets/level5/cloud3.png');
        game.load.image('bird1', 'assets/level5/bird1.png');
        game.load.spritesheet('bird', 'assets/level5/bird_sheet.png', 215, 209, 2);
        
        game.load.image('text1', 'assets/level5/text1.png');
        game.load.image('text2', 'assets/level5/text2.png');
        
		game.load.audio('oof1','assets/level5/oof1.wav');
        game.load.audio('oof2','assets/level5/oof2.wav');
        game.load.audio('whistle','assets/level5/whistle.wav');
    },

    create: function() { 
    // Change the background color of the game to blue
    game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
        
    // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Display the bird at the position x=100 and y=245
    this.bird = game.add.sprite(100, 245, 'bird1');
    //bird = this.game.add.sprite(100, 245, 'bird');
//    var flap = bird.animations.add('flap');
//    bird.animations.play('flap', 6, true);
//    bird.animations.add('beats',[0,1], 6, true);
//    bird.animations.play('beats');
        
        
//    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'heart');
//    //var beat = heart.animations.add('beat');
//    //heart.animations.play('beat', 4, true);
//    heart.animations.add('beats',[0,1], 6, true);
//    heart.animations.play('beats');

        
        
    this.cursor = game.input.keyboard.createCursorKeys();

        
    // Add physics to the bird
    // Needed for: movements, gravity, collisions, etc.
    game.physics.arcade.enable(this.bird);
    this.bird.body.collideWorldBounds = true;
    
        
    // Add gravity to the bird to make it fall
    //this.bird.body.gravity.y = 1000;  

//    var label = game.add.text(game.width/5, game.height/7,
//    'My boss isn\'t around much.', { font: '40px Arial', fill: '#ffffff'});
        
    this.pipes = game.add.group();
    game.physics.arcade.enable(this.pipes);

    this.clouds = game.add.group();
    game.physics.arcade.enable(this.clouds);
        
    this.clouds2 = game.add.group();
    game.physics.arcade.enable(this.clouds2);


    this.oof = game.add.audio('oof1');
    this.whistle = game.add.audio('whistle');
    this.whistle.loop = true;
    this.whistle.play();
        
    //this.timer = game.time.events.loop(3000, this.addRowOfPipes, this); 
    this.changeTimer = this.game.time.events.add(15000, this.nextState, this);
    this.timerCloud = game.time.events.loop(2000, this.addRowOfClouds, this); 
    this.timerCloud2 = game.time.events.loop(4000, this.addRowOfClouds2, this);
    this.timer = game.time.events.loop(3000, this.addRowOfPipes, this); 
        
    this.timerText = this.game.time.events.add(10000, this.addText, this);
    
    this.text1 = game.add.sprite(game.width/2,200,'text1');
    this.text1.anchor.setTo(.5,.5);
    
        
    },
    
update: function() {
    // If the bird is out of the screen (too high or too low)
    // Call the 'restartGame' function
//    if (this.bird.y < 0 || this.bird.y > 490)
//        this.restartGame();
        
    this.movePlayer();
    //game.physics.arcade.overlap(this.bird, this.pipe, this.killPipe, null, this);
    game.physics.arcade.overlap(this.bird, this.pipes, this.restartLevel, null, this);
        
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    this.game.world.bringToTop(this.pipes);
    this.game.world.bringToTop(this.clouds);
    this.game.world.bringToTop(this.bird);
    this.game.world.bringToTop(this.text1);
    
//    if(this.text2.alive){
//    this.game.world.bringToTop(this.text2);
//    }
    
},
    
    
movePlayer: function(){
    if(this.cursor.up.isDown){
        this.bird.body.y -= 10;
    }
    else if(this.cursor.down.isDown){
        this.bird.body.y += 10;
    }  

},
        
addOnePipe: function(x, y) {
    // Create a pipe at the position x and y
    var pipe = game.add.sprite(x, y, 'pipe');
    
    // Add the pipe to our previously created group
    this.pipes.add(pipe);

    // Enable physics on the pipe 
    game.physics.arcade.enable(pipe);

    // Add velocity to the pipe to make it move left
    pipe.body.velocity.x = -300; 
    //cloud1.body.velocity.x = -200; 

    // Automatically kill the pipe when it's no longer visible 
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
},
    
    
addRowOfPipes: function() {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    var hole = Math.floor(Math.random() * 10) + 1;


    // Add the 6 pipes 
    // With one big hole at position 'hole' and 'hole + 1'
    for (var i = 0; i < 20; i++)
        if (i != hole && i != hole + 1 && i != hole + 2) 
            this.addOnePipe(1000, i * 110 + 10);   
},
    
addCloud: function(x, y) {
    // Create a pipe at the position x and y
    var cloud1 = game.add.sprite(x, y, 'cloud1');
    
    // Add the pipe to our previously created group
    this.clouds.add(cloud1);

    // Enable physics on the pipe 
    game.physics.arcade.enable(cloud1);

    // Add velocity to the pipe to make it move left
    cloud1.body.velocity.x = -350; 

    // Automatically kill the pipe when it's no longer visible 
    cloud1.checkWorldBounds = true;
    cloud1.outOfBoundsKill = true;
},
    
    
addRowOfClouds: function() {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    //var cloudx = 500;
    var cloudy = Math.floor(Math.random() * 1920) + 1;


    // Add the 6 pipes 
    // With one big hole at position 'hole' and 'hole + 1'
//    for (var i = 0; i < 20; i++)
            this.addCloud(game.width-200, cloudy);   
},
    
addCloud2: function(x, y) {
    // Create a pipe at the position x and y
    var cloud3 = game.add.sprite(x, y, 'cloud3');
    
    // Add the pipe to our previously created group
    this.clouds2.add(cloud3);

    // Enable physics on the pipe 
    game.physics.arcade.enable(cloud3);

    // Add velocity to the pipe to make it move left
    cloud3.body.velocity.x = -200; 

    // Automatically kill the pipe when it's no longer visible 
    cloud3.checkWorldBounds = true;
    cloud3.outOfBoundsKill = true;
},
    
    
addRowOfClouds2: function() {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    //var cloudx = 500;
    var cloudy = Math.floor(Math.random() * 1920) + 1;


    // Add the 6 pipes 
    // With one big hole at position 'hole' and 'hole + 1'
//    for (var i = 0; i < 20; i++)
            this.addCloud2(game.width-200, cloudy);   
},

addText: function() {
    
    //var label = game.add.text(game.width/5, game.height/7+100, 'The autonomy is nice.', { font: '40px Arial', fill: '#ffffff'});
    this.text2 = game.add.sprite(game.width/2,game.height-200,'text2');
    this.text2.anchor.setTo(.5,.5);
    this.game.world.bringToTop(this.text2);

    
},
    
nextState: function(){
    game.state.start('level6');
    this.whistle.stop();
},
    
// Restart the game
restartGame: function() {
    // Start the 'main' state, which restarts the game
    game.state.start('menu');
},
  
restartLevel: function() {
    // Start the 'main' state, which restarts the game
    this.oof.play();
    this.whistle.stop();
    game.state.start('level5');
},
    
};
