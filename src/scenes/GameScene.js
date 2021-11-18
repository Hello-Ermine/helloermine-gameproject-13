import Phaser from "phaser";


let player;
let ar;
let at;



let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;
let tHrow;

let armor_up = 0;

let shadow;

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
let hp = 2;
let over;
let crow;
let crowCall;
let crow_group;

let hurt;

let GOS;
let pickUp;
let ab;
let hit;
let SKT;
let kill;
let go;
let ga;
let ct;

let meterCount = 0;

let rock;

let score = 0;
let scoreText;

let mask;
let score_bar;




class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    init(data)
    {
        score = 0;
    }

    preload() {
        

        this.load.spritesheet('player','src/image/ruuning.png',
        { frameWidth: 242 , frameHeight: 266});

        this.load.spritesheet('throw','src/image/throwarggggg.png',
        { frameWidth: 252 , frameHeight: 262});

        this.load.spritesheet('ar','src/image/ermine_armor.png',
        { frameWidth: 317 , frameHeight: 343});

        this.load.spritesheet('at','src/image/ar_throw.png',
        { frameWidth: 339 , frameHeight: 343});

        this.load.spritesheet('evil','src/image/evilrun.png',
        { frameWidth: 391 , frameHeight: 362});

        this.load.spritesheet('SK','src/image/UTSK.png',
        { frameWidth: 443 , frameHeight: 443});

        this.load.spritesheet('Go','src/image/GO.png',
        { frameWidth: 600 , frameHeight: 338});

        this.load.spritesheet('crow','src/image/crow.png',
        { frameWidth: 428 , frameHeight: 296});

        this.load.image('village','src/image/Hokage_Rock.png');

        this.load.image('BARN','src/image/backgao3.png');

        this.load.image('grass','src/image/AUTgrass.png');

        this.load.image('wall','src/image/b734.png');

        this.load.image('over','src/image/blood.jpg');

        this.load.image('heart','src/image/heart.png');

        this.load.image('armor','src/image/armor.png');

        this.load.image('armor_drop','src/image/armor.png');

        this.load.image('evil_die','src/image/evil_die.png');

        this.load.image('shadow','src/image/shadow.png');

        this.load.image('mask','src/image/mask.png');

        this.load.image('score_bar','src/image/score_board.png');

        this.load.image('hurt','src/image/Jeb .png');

        this.load.image('rock', ['src/image/Tree.png']);

        this.load.audio('GOS', ['src/sound/GameOverSound.mp3']);

        this.load.audio('pickUp', ['src/sound/pickup.mp3']);

        this.load.audio('armor_break', ['src/sound/armor_break.mp3']);

        this.load.audio('hit', ['src/sound/hit.mp3']);

        this.load.audio('SK_Throw', ['src/sound/SK_Throw.mp3']);

        this.load.audio('kill', ['src/sound/kill.mp3']);

        this.load.audio('GameMusic', ['src/sound/GameMusic.mp3']);

        this.load.audio('countDown', ['src/sound/countdown.mp3']);



        

        





    }

    create() {

        mask = this.add.image(1200, 80, 'mask')
        .setScale(0.5)
        .setDepth(100)
        .setVisible(true);

        score_bar = this.add.image(1085, 90, 'score_bar')
        .setScale(0.3)
        .setDepth(99)
        .setVisible(true);

        scoreText = this.add.text(1113, 65, score, { fontSize: '60px', fill: '#FFFFFF' }).setDepth(100);

        rock = this.physics.add.image(3000, -20, 'rock')
        .setDepth(3)
        .setScale(2)
        .setVelocityX(-1000);

        armor_bar = this.add.image(100, 80, 'armor')
        .setScale(0.28)
        .setDepth(100)
        .setVisible(false);

        heart = this.add.image(100, 100, 'heart')
        .setScale(0.2)
        .setDepth(100)
        .setVisible(true);

        over = this.add.image(600, 400, 'over')
        .setScale(2)
        .setDepth(105)
        .setVisible(false);

        wall = this.physics.add.image(640, -180, 'wall')
        .setScale(2)
        .setDepth(100)
        .setImmovable()
        .setVisible(false);

        village = this.add.tileSprite(960, 350, 1280, 720, 'village')
        .setDepth(2)
        .setScale(1.5);

        bg = this.add.tileSprite(640, 360, 1280, 720, 'BARN')
        .setDepth(4)
        .setScale(1);

        grass = this.add.tileSprite(640, 420, 1280, 720, 'grass')
        .setScale(1)
        .setDepth(99);
        
        // standright = this.physics.add.image(200, 450, 'standright')
        // .setScale(0.90)
        // .setVisible(true);

        hurt = this.physics.add.image(200, 450, 'hurt')
        .setScale(0.37)
        .setDepth(99)
        .setVisible(false);
        

        player = this.physics.add.sprite(200, 450, 'player')
        .setScale(0.5)
        .setDepth(10)
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

        ar = this.physics.add.sprite(200, 450, 'ar')
        .setScale(0.36)
        .setDepth(10)
        .setVisible(true);
        

        this.anims.create({
            key: 'arAni',
            frames: this.anims.generateFrameNumbers('ar', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        tHrow = this.physics.add.sprite(200, 450, 'throw')
        .setScale(0.5)
        .setDepth(10)
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

        at = this.physics.add.sprite(200, 450, 'at')
        .setScale(0.36)
        .setDepth(10)
        .setVisible(false);

        this.anims.create({
            key: 'atAni',
            frames: this.anims.generateFrameNumbers('at', {
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

        shadow = this.physics.add.image(200, 450, 'shadow').setScale(0.5)
        .setDepth(5)
        .setVisible(true);


                    
        


       

        bullet_group = this.physics.add.group();
        evil_group = this.physics.add.group();
        armor_group = this.physics.add.group();
        crow_group = this.physics.add.group();


        this.time.addEvent({
            delay: 4000,
            callback: function () {

                ct = this.sound.add('countDown').setVolume(0.5);
                ct.play({loop: false});

                go = this.physics.add.sprite(650, 400, 'Go').setScale(2)
                .setDepth(101)
                .setVisible(true);

                this.anims.create({
                    key: 'GoAni',
                    frames: this.anims.generateFrameNumbers('Go', {
                        start: 0,
                        end: 23
                    }),
                    duration: 2000,    
                    repeat: -1
                })
                go.anims.play('GoAni', true);

                this.time.addEvent({
                    delay: 2000,
                    callback: function () {

                        go.destroy();

                        rock.destroy();

                    },
                    callbackScope: this,
                    loop: false,
                    paused: false,
                    });
            },
            callbackScope: this,
            loop: false,
            paused: false,
            });


           















        this.time.addEvent({
            delay: 7000,
            callback: function () {

        crowCall = this.time.addEvent({
            delay: 2000,
            callback: function () {
            //สร้าง evil
            crow = this.physics.add.sprite(1290, Phaser.Math.Between(350,700), 'crow')
            .setDepth(5)
            .setScale(0.2)
            .setVisible(true);
            crow_group.add(crow);
     
                     //กำหนดการเคลื่อนไหวของ evil
            this.anims.create({
                key: 'crowAni',
                frames: this.anims.generateFrameNumbers('crow', {
                    start: 0,
                    end: 3
                }),
                duration: 250,    
                repeat: -1
            })
            crow.anims.play('crowAni', true);
            //evil เดินไปทางซ้าย
            crow.setVelocityX(-1250);
    
            this.physics.add.overlap(player, crow_group,(player,crow)=>{
                crow.destroy();
                if(hp>=2){

                    ab = this.sound.add('armor_break').setVolume(1);
                    ab.play({loop: false});
        
                }
                hp = hp - 1;

                hurt.setVisible(true);

            tHrow.setVisible(false);
            player.setVisible(false);

            this.time.addEvent({
                delay: 250,
                callback: function () {

                    hurt.setVisible(false);
                    player.setVisible(true);
                
                    
                 
                },
                callbackScope: this,
                loop: false,
                paused: false,
                });
                
    
            });
        },
        callbackScope: this,
        loop: true,
        paused: false,
        });

    },

        callbackScope: this,
        loop: false,
        paused: false,
        });







    this.time.addEvent({
            delay: 7000,
            callback: function () {


       evilCall = this.time.addEvent({
        delay: 1000,
        callback: function () {
        //สร้าง evil
        evil = this.physics.add.sprite(1290, Phaser.Math.Between(350,700), 'evil')
        .setDepth(5)
        .setScale(0.37)
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
            evil.setVelocityX(Phaser.Math.Between(-1200,-1000));

        

        this.physics.add.overlap(player, evil_group,(player,evil)=>{
            evil.destroy();
            if(hp>=2){

            ab = this.sound.add('armor_break').setVolume(1);
            ab.play({loop: false});

        }
            hp = hp - 1;

            hurt.setVisible(true);

            tHrow.setVisible(false);
            player.setVisible(false);

            this.time.addEvent({
                delay: 250,
                callback: function () {

                    hurt.setVisible(false);
                    player.setVisible(true);
                
                    
                 
                },
                callbackScope: this,
                loop: false,
                paused: false,
                });

        });
    },
    callbackScope: this,
    loop: true,
    paused: false,
    });
},

callbackScope: this,
loop: false,
paused: false,
});



    

    this.time.addEvent({
        delay: 7000,
        callback: function () {

        armor_drop = this.time.addEvent({
            delay: 10000,
            callback: function () {
            //สร้าง armor
            armor = this.physics.add.image(1380, Phaser.Math.Between(350,700), 'armor_drop').setScale(0.2)
            .setDepth(90)
            .setVisible(true);
            armor_group.add(armor);

                     
            armor.setVelocityX(Phaser.Math.Between(-1000,-800));
    
            this.physics.add.overlap(player, armor_group,(player,armor)=>{

                pickUp = this.sound.add('pickUp').setVolume(1);
                pickUp.play({loop: false});

                armor.destroy();

                ar.setVisible(true);

                hp = hp + 1;
            
            });  
        },
        callbackScope: this,
        loop: true,
        paused: false,
        });

    },
    callbackScope: this,
    loop: false,
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
    hurt.setCollideWorldBounds(true);
    shadow.setCollideWorldBounds(true);
    ar.setCollideWorldBounds(true);
    at.setCollideWorldBounds(true);
    


    this.physics.add.collider(player, wall);
    this.physics.add.collider(tHrow, wall);
    this.physics.add.collider(hurt, wall);
    this.physics.add.collider(shadow, wall);
    this.physics.add.collider(ar, wall);
    this.physics.add.collider(at, wall);


    ga = this.sound.add('GameMusic').setVolume(0.5);
    ga.play({loop: true});





    }
    update(delta, time) {

        // meterCount++

        // console.log(meterCount)

        player.anims.play('playerAni', true);
        ar.anims.play('arAni', true);
        tHrow.anims.play('throwAni', true);
        at.anims.play('atAni', true);


        
        bg.tilePositionX += 5;
        village.tilePositionX += 0.1;
        grass.tilePositionX += 10;
        
        if(score > 20){
            evilCall.delay = 500;

        }else if(score > 50){
            evilCall.delay = 250;

        }else if(score > 100){
            evilCall.delay = 100;
        }


    if(score>10){
        this.tweens.add({
            targets: scoreText,
            x: 1078,
            paused: false,
            duration: 1,
        })
    }else if(score >100){
        this.tweens.add({
            targets: scoreText,
            x: 1048,
            paused: false,
            duration: 1,
        })

    }else if(score >1000){
        this.tweens.add({
            targets: scoreText,
            x: 1018,
            paused: false,
            duration: 1,
        })

    }


        if(keyW.isDown){
            player.setVelocityY(-500);
            tHrow.setVelocityY(-500);
            hurt.setVelocityY(-500);
            shadow.setVelocityY(-500);
            ar.setVelocityY(-500);
            at.setVelocityY(-500);
        }else if(keyS.isDown){
            player.setVelocityY(500);
            tHrow.setVelocityY(500);
            hurt.setVelocityY(500);
            shadow.setVelocityY(500);
            ar.setVelocityY(500);
            at.setVelocityY(500);
        }else{
            player.setVelocityY(0);
            tHrow.setVelocityY(0);
            hurt.setVelocityY(0);
            shadow.setVelocityY(0);
            ar.setVelocityY(0);
            at.setVelocityY(0);
        }
        if(keyA.isDown){
            player.setVelocityX(-500);
            tHrow.setVelocityX(-500);
            hurt.setVelocityX(-500);
            shadow.setVelocityX(-500);
            ar.setVelocityX(-500);
            at.setVelocityX(-500);
        }else if(keyD.isDown){
            player.setVelocityX(500);
            tHrow.setVelocityX(500);
            hurt.setVelocityX(500);
            shadow.setVelocityX(500);
            ar.setVelocityX(500);
            at.setVelocityX(500);
        }else{
            player.setVelocityX(0);
            tHrow.setVelocityX(0);
            hurt.setVelocityX(0);
            shadow.setVelocityX(0);
            ar.setVelocityX(0);
            at.setVelocityX(0);
        }

        if(hp>=2){

            hp = 2;

            player.setVisible(false);
            
            

            armor_bar.setVisible(true);
            heart.setVisible(false);

        }
        if(hp ==1){

            
            ar.setVisible(false);
            

            armor_bar.setVisible(false);
            heart.setVisible(false);

        }
        if(hp <=0){

            hp = 0;

            ar.setVisible(true);

            armor_bar.setVisible(false);
            heart.setVisible(false);

            over.setVisible(true);

            ga.stop();
            
            this.time.addEvent({
                delay: 100,
                callback: function () {

                    hit = this.sound.add('hit').setVolume(1);
                    hit.play({loop: false});      

            this.scene.start('GameOver', {score : score});

            GOS = this.sound.add('GOS').setVolume(1.5);
            GOS.play({loop: false});

                
            
            },
            callbackScope: this,
            loop: false,
            paused: false,
            });

            
    

        }


        if(Phaser.Input.Keyboard.JustDown(keySpace)){

            this.time.addEvent({
                delay: 100,
                callback: function () {
                    SKT = this.sound.add('SK_Throw').setVolume(1);
                    SKT.play({loop: false});

                    SK = this.physics.add.sprite(player.x+80, player.y-20, 'SK')
                    .setDepth(5)
                    .setScale(0.1)
                    .setVisible(true);
                    bullet_group.add(SK);
                    SK.anims.play('SKAni', true);
                    SK.setVelocityX(700);

                    this.physics.add.collider(bullet_group, evil_group,(SK,evil)=>{

                        score += 1;
                        scoreText.setText(score);

                        kill = this.sound.add('kill').setVolume(1);
                        kill.play({loop: false});

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

                if(hp>=2){
                    
                    at.setVisible(true)
                    ar.setVisible(false);

            this.time.addEvent({
                delay: 250,
                callback: function () {

                    at.setVisible(false);
                    ar.setVisible(true);
                
                    
                 
                },
                callbackScope: this,
                loop: false,
                paused: false,
                });
                }else{
            

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
                })
            }
        }
            
        


        

        for (let i = 0; i < evil_group.getChildren().length; i++) {
            if (evil_group.getChildren()[i].x < -100) {
                    evil_group.getChildren()[i].destroy();
            }
        }
        for (let i = 0; i < bullet_group.getChildren().length; i++) {
            if (bullet_group.getChildren()[i].x > 1310) {
                    bullet_group.getChildren()[i].destroy();
            }
        }
        for (let i = 0; i < armor_group.getChildren().length; i++) {
            if (armor_group.getChildren()[i].x < -100) {
                    armor_group.getChildren()[i].destroy();
            }
        }
        for (let i = 0; i < crow_group.getChildren().length; i++) {
            if (crow_group.getChildren()[i].x < -100) {
                    crow_group.getChildren()[i].destroy();
            }
        }
    }
}
export default GameScene;
