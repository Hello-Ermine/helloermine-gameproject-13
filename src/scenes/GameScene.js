import Phaser from "phaser";


let player;



let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;
let tHrow;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        

        this.load.spritesheet('player','src/image/ruuning.png',
        { frameWidth: 242 , frameHeight: 266});

        this.load.spritesheet('throw','src/image/throwarggggg.png',
        { frameWidth: 252 , frameHeight: 262});



    }

    create() {
        

        player = this.physics.add.sprite(200, 450, 'player').setScale(0.75);

        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        tHrow = this.physics.add.sprite(200, 450, 'throw').setScale(0.75).setVisible(false);

        this.anims.create({
            key: 'throwAni',
            frames: this.anims.generateFrameNumbers('throw', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        

        // soundButton = this.add.image(410, 100, 'sound').setScale(0.2).setDepth(1);
        // soundButton.setInteractive();
        // soundButton.on('pointerup',()=>{
        //     if(!this.sound.mute){
        //         this.sound.mute = true;
        //         cross.setVisible(true);
        //     }else{
        //         this.sound.mute = false;
        //         cross.setVisible(false);
        //     }             
        // })
        
        

        // menuButton = this.add.image(410, 50, 'exit').setScale(0.3);
        // menuButton.setInteractive();
        // menuButton.on('pointerup',()=>{
        //     this.scene.start('MainMenu');
        //     music.stop(); 
        //     running.stop();          
        // })
        



        //Player Control
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    

    player.setCollideWorldBounds(true);
    tHrow.setCollideWorldBounds(true)  

    
    }
    update(delta, time) {

        player.anims.play('playerAni', true);
        tHrow.anims.play('throwAni', true);


        if(keyW.isDown){
            tHrow.setVelocityY(-500);
        }else if(keyS.isDown){
            tHrow.setVelocityY(500);
        }else{
            tHrow.setVelocityY(0);
        }
        if(keyA.isDown){
            tHrow.setVelocityX(-500);
        }else if(keyD.isDown){
            tHrow.setVelocityX(500);
        }else{
            tHrow.setVelocityX(0);
        }


        if(keyW.isDown){
            player.setVelocityY(-500);
        }else if(keyS.isDown){
            player.setVelocityY(500);
        }else{
            player.setVelocityY(0);
        }
        if(keyA.isDown){
            player.setVelocityX(-500);
        }else if(keyD.isDown){
            player.setVelocityX(500);
        }else{
            player.setVelocityX(0);
        }

        if(Phaser.Input.Keyboard.JustDown(keySpace,500)){
            tHrow.setVisible(true);
            player.setVisible(false);
        }else{
            tHrow.setVisible(false);
            player.setVisible(true);
        }

        
        
    }
}
export default GameScene;
