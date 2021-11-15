import Phaser from "phaser";


let player;



let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;
let tHrow;
let wait;
let standright;
let bg;

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

        this.load.image('standright','src/image/emrine stand still.png');

        this.load.image('BARN','src/image/background222.png');



    }

    create() {

        bg = this.physics.add.image(0, 0, 'BARN')
        .setOrigin(0,0)
        .setScale(1);
        
        standright = this.physics.add.image(200, 450, 'standright')
        .setScale(0.90)
        .setVisible(true);
        

        player = this.physics.add.sprite(200, 450, 'player').setScale(0.90)
        .setVisible(false);
        

        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        tHrow = this.physics.add.sprite(200, 450, 'throw').setScale(0.90)
        .setVisible(false);

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
    tHrow.setCollideWorldBounds(true);
    standright.setCollideWorldBounds(true)  

    
    }
    update(delta, time) {

        player.anims.play('playerAni', true);
        tHrow.anims.play('throwAni', true);


        // if(keyW.isDown){
        //     tHrow.setVelocityY(-500);
        // }else if(keyS.isDown){
        //     tHrow.setVelocityY(500);
        // }else{
        //     tHrow.setVelocityY(0);
        // }
        // if(keyA.isDown){
        //     tHrow.setVelocityX(-500);
        // }else if(keyD.isDown){
        //     tHrow.setVelocityX(500);
        // }else{
        //     tHrow.setVelocityX(0);
        // }


        if(keyW.isDown){
            player.setVelocityY(-500);
            player.setVisible(true);
            standright.setVisible(false);
        }else if(keyS.isDown){
            player.setVelocityY(500);
            player.setVisible(true);
            standright.setVisible(false);
        }else{
            player.setVelocityY(0);
            player.setVisible(false);
            standright.setVisible(true);
        }
        if(keyA.isDown){
            player.setVelocityX(-500);
            player.setVisible(true);
            standright.setVisible(false);
        }else if(keyD.isDown){
            player.setVelocityX(500);
            player.setVisible(true);
            standright.setVisible(false);
        }else{
            player.setVelocityX(0);
            player.setVisible(false);
            standright.setVisible(true);
        }
        
        if(keyW.isDown){
            standright.setVelocityY(-500);
        }else if(keyS.isDown){
            standright.setVelocityY(500);
        }else{
            standright.setVelocityY(0);
        }
        if(keyA.isDown){
            standright.setVelocityX(-500);
        }else if(keyD.isDown){
            standright.setVelocityX(500);
        }else{
            standright.setVelocityX(0);
        }

        // if(Phaser.Input.Keyboard.JustDown(keySpace)){
        //     tHrow.setVisible(true);
        //     player.setVisible(false);
        // }else{
        //     tHrow.setVisible(false);
        //     player.setVisible(true);
        // }

        // if(Phaser.Input.Keyboard.JustDown(keySpace)){
            
        // }else{
        //     tHrow.setVisible(false);
        //     player.setVisible(true);
        // }


        
        
    }
}
export default GameScene;
