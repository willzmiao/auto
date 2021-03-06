var bootState = {

    
preload: function () {
// Load the image
//game.load.image('progressBar', 'assets/progressBar.png');
},


create: function() {
// Set some game settings 
    game.stage.backgroundColor = '#000000'; 
    game.physics.startSystem(Phaser.Physics.ARCADE); 
    game.renderer.renderSession.roundPixels = true;
    //this.timer = game.time.events.loop(1500); 
    
    //scaling options EXACT_FIT SHOW_ALL 
    //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //this.game.scale.compatibility.forceMinimumDocumentHeight = true;
    //this.game.scale.compatibility.canExpandParent = false;
    
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    //this.scale.setScreenSize(true);
    //game.scale.setScreenSize(true);
    

    // Start the load state
    game.state.start('load');
    }
};