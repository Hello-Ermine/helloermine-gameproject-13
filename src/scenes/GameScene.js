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

let evil_die;

let armor_drop;
let armor_group;
let armor_bar
let armor;
let heart ;
let hp = 1;
let over;


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

        this.load.image('village','src/image/Background naruto.png');

        this.load.image('BARN','src/image/backgao3.png');

        this.load.image('grass','src/image/AUTgrass.png');

        this.load.image('wall','src/image/b734.png');

        this.load.image('over','src/image/b734.png');

        this.load.image('heart','src/image/heart.png');

        this.load.image('armor','src/image/armor.png');

        this.load.image('armor_drop','src/image/armor.png');

        this.load.image('evil_die','src/image/evil_die.png');

        





    }

    create() {

        armor_bar = this.add.image(200, 100, 'armor')
        .setScale(0.17)
        .setDepth(100)
        .setVisible(false);

        heart = this.add.image(100, 100, 'heart')
        .setScale(0.15)
        .setDepth(100)
        .setVisible(true);

        over = this.add.image(500, 450, 'over')
        .setScale(1)
        .setDepth(100)
        .setVisible(false);

        wall = this.physics.add.image(640, -180, 'wall')
        .setScale(2)
        .setDepth(100)
        .setImmovable()
        .setVisible(false);

        village = this.add.tileSprite(960, 350, 1280, 720, 'village')
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

        
            
        this.anims.create({
            key: 'SKAni',
            frames: this.anims.generateFrameNumbers('SK', {
                start: 0,
                end: 3
            }),
            duration: 250,    
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
        armor_group = this.physics.add.group();



    // Timer Event
       evilCall = this.time.addEvent({
        delay: 500,
        callback: function () {
        //สร้าง evil
        evil = this.physics.add.sprite(1290, Phaser.Math.Between(350,700), 'evil').setScale(0.37)
        .setVisible(true);
        evil_group.add(evil);
 
                 //กำหนดการเคลื่อนไหวของ evil
        this.anims.create({
            key: 'evilAni',
            frames: this.anims.generateFrameNumbers('evil', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })
        evil.anims.play('evilAni', true);
        //evil เดินไปทางซ้าย
        evil.setVelocityX(Phaser.Math.Between(-1000,-800));

        this.physics.add.overlap(player, evil_group,(player,evil)=>{
            evil.destroy();
            hp = hp - 1;
            console.log("WRYYYYYY")

        });
    },
    callbackScope: this,
    loop: true,
    paused: false,
    });
        
        armor_drop = this.time.addEvent({
            delay: 5000,
            callback: function () {
            //สร้าง armor
            armor = this.physics.add.image(1380, Phaser.Math.Between(350,700), 'armor_drop').setScale(0.2)
            .setDepth(90)
            .setVisible(true);
            armor_group.add(armor);

                     
            armor.setVelocityX(Phaser.Math.Between(-1000,-800));
    
            this.physics.add.overlap(player, armor_group,(player,armor)=>{
                armor.destroy();
                hp = hp + 1;
            
            });  
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

       

        if(Phaser.Input.Keyboard.JustDown(keySpace)){

            this.time.addEvent({
                delay: 100,
                callback: function () {

                    SK = this.physics.add.sprite(player.x+80, player.y-20, 'SK').setScale(0.1)
                    .setVisible(true);
                    bullet_group.add(SK);

                    SK.anims.play('SKAni', true);
                    SK.setVelocityX(700);

                    this.physics.add.collider(bullet_group, evil_group,(SK,evil)=>{

                        SK.destroy();
                        evil_die =  this.physics.add.image(evil.x, evil.y, 'evil_die').setScale(0.4)
                        .setDepth(100)
                        .setVisible(true);
                        evil_die.setVelocityX(500);
                        evil.destroy();
                        
                        
                        this.time.addEvent({
                            delay: 250,
                            callback: function(){
                                evil_die.destroy();
                            },
                            callbackScope: this,
                            loop: false,
                            paused: false,
                        });
                    });       


                
       
                },
                callbackScope: this,
                loop: false,
                paused: false,
                });
            

        tHrow.setVisible(true);
            player.setVisible(false);

            this.time.addEvent({
                delay: 250,
                callback: function () {

                    tHrow.setVisible(false);
                    player.setVisible(true);
                
                    
                 
                },
                callbackScope: this,
                loop: false,
                paused: false,
                });
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

        if(hp>=2){

            hp = 2;
            armor_bar.setVisible(true);
            heart.setVisible(true);

        }
        if(hp ==1){

            armor_bar.setVisible(false);
            heart.setVisible(true);

        }
        if(hp <=0){

            hp = 0;
            armor_bar.setVisible(false);
            heart.setVisible(false);

            over.setVisible(true);

        }

        for (let i = 0; i < evil_group.getChildren().length; i++) {
            if (evil_group.getChildren()[i].x < -50) {
                    evil_group.getChildren()[i].destroy();
            }
        }
        for (let i = 0; i < bullet_group.getChildren().length; i++) {
            if (bullet_group.getChildren()[i].x > 1310) {
                    bullet_group.getChildren()[i].destroy();
            }
        }
        for (let i = 0; i < armor_group.getChildren().length; i++) {
            if (armor_group.getChildren()[i].x < -50) {
                    armor_group.getChildren()[i].destroy();
            }
        }
    }
}
export default GameScene;
