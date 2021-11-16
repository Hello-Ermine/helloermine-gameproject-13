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
let village;
let grass;
let wall;
let evil;
let evilCall;
let evil_group;
let SK;
let bullet_group;

let delay = 400;
let timeSinceLastAttack = -400;

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

        this.load.spritesheet('evil','src/image/evilrun.png',
        { frameWidth: 391 , frameHeight: 342});

        this.load.spritesheet('SK','src/image/UTSK.png',
        { frameWidth: 443 , frameHeight: 443});

        this.load.image('standright','src/image/emrine stand still.png');

        this.load.image('village','src/image/1200px-Ninja_Village.png');

        this.load.image('BARN','src/image/background80.png');

        this.load.image('grass','src/image/AUTgrass.png');

        this.load.image('wall','src/image/b734.png');



    }

    create() {

        wall = this.physics.add.image(640, -180, 'wall')
        .setScale(2)
        .setDepth(100)
        .setImmovable()
        .setVisible(false);

        village = this.add.tileSprite(640, 360, 1280, 800, 'village')
        .setScale(1.5);

        bg = this.add.tileSprite(640, 360, 1280, 720, 'BARN')
        .setScale(1);

        grass = this.add.tileSprite(640, 420, 1280, 720, 'grass')
        .setScale(1)
        .setDepth(100);
        
        // standright = this.physics.add.image(200, 450, 'standright')
        // .setScale(0.90)
        // .setVisible(true);
        

        player = this.physics.add.sprite(200, 450, 'player').setScale(0.5)
        .setVisible(true);
        

        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        tHrow = this.physics.add.sprite(200, 450, 'throw').setScale(0.5)
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

        


        // evil = this.physics.add.sprite(200, 450, 'evil').setScale(0.37)
        // .setVisible(true);

        // this.anims.create({
        //     key: 'evilAni',
        //     frames: this.anims.generateFrameNumbers('evil', {
        //         start: 0,
        //         end: 3
        //     }),
        //     duration: 500,    
        //     repeat: -1
        // })

        bullet_group = this.physics.add.group();

        
        evil_group = this.physics.add.group();
    //Timer Event
        evilCall = this.time.addEvent({
        delay: 1000,
        callback: function () {
        //สร้าง evil
        evil = this.physics.add.sprite(1290, Phaser.Math.Between(350,700), 'evil').setScale(0.37)
        .setVisible(true);

        evil_group.add(evil);

        // this.physics.add.collider(SK, evil,()=>{
        //     SK.destroy();
        //     evil.destroy();
        // });
        //กำหนดการเคลื่อนไหวของ evil
        // this.anims.create({
        //     key: 'evilAni',
        //     frames: this.anims.generateFrameNumbers('evil', {
        //         start: 0,
        //         end: 3
        //     }),
        //     duration: 500,    
        //     repeat: -1
        // })
        // evil.anims.play('evilAni', true);
        //evil เดินไปทางซ้าย
        evil.setVelocityX(Phaser.Math.Between(-700,-300));

         
        },
        callbackScope: this,
        loop: true,
        paused: false,
        });


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

    this.physics.add.collider(player, wall);
    this.physics.add.collider(tHrow, wall);




    

    
    }
    update(delta, time) {

        player.anims.play('playerAni', true);
        tHrow.anims.play('throwAni', true);

        

        bg.tilePositionX += 3;
        village.tilePositionX += 0.1;
        grass.tilePositionX += 6;


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
        
        // if(keyW.isDown){
        //     standright.setVelocityY(-500);
        // }else if(keyS.isDown){
        //     standright.setVelocityY(500);
        // }else{
        //     standright.setVelocityY(0);
        // }
        // if(keyA.isDown){
        //     standright.setVelocityX(-500);
        // }else if(keyD.isDown){
        //     standright.setVelocityX(500);
        // }else{
        //     standright.setVelocityX(0);
        // }

        // if(Phaser.Input.Keyboard.JustDown(keySpace)){
        //     tHrow.setVisible(true);
        //     player.setVisible(false);
        // }else{
        //     tHrow.setVisible(false);
        //     player.setVisible(true);
        // }

        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            SK = this.physics.add.sprite(player.x+100, player.y-20, 'SK').setScale(0.1)
        .setVisible(true);

        this.anims.create({
            key: 'SKAni',
            frames: this.anims.generateFrameNumbers('SK', {
                start: 0,
                end: 3
            }),
            duration: 250,    
            repeat: -1
        })
        SK.anims.play('SKAni', true);
        bullet_group.add(SK);
        
        SK.setVelocityX(700);
        }
            
        


        
        for (let i = 0; i < evil_group.getChildren().length; i++) {
            if (evil_group.getChildren()[i].X < 100) {
                evil_group.getChildren()[i].destroy();
            }
        }

        for (let i = 0; i < bullet_group.getChildren().length; i++) {
            if (bullet_group.getChildren()[i].X > 700) {
                bullet_group.getChildren()[i].destroy();
            }

        }

        // if(65 in Phaser.Input.Keyboard.JustDown(keySpace) 
        //     && time > (timeSinceLastAttack + delay) ) {
        //         SK = this.physics.add.sprite(player.x+100, player.y-20, 'SK').setScale(0.1)
        //         .setVisible(true);
        
        //         this.anims.create({
        //             key: 'SKAni',
        //             frames: this.anims.generateFrameNumbers('SK', {
        //                 start: 0,
        //                 end: 3
        //             }),
        //             duration: 250,    
        //             repeat: -1
        //         })
        //         SK.anims.play('SKAni', true);
        //         bullet_group.add(SK);
                
        //         SK.setVelocityX(700);
        //     timeSinceLastAttack = time;
        // }
        
    }
}
export default GameScene;
