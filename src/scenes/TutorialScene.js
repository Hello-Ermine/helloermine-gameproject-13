import Phaser from "phaser";
import { BuildGameObject } from "phaser/src/gameobjects";

let bs;
let en;
let it;
let back_button;

let player;
let tHrow;
let evil;
let crow;
let SK;

let basic_button;
let enemies_button;
let items_button;

let click;
let flip;

class TutorialScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TutorialScene'
        });
    }

    preload() {
        this.load.image('bs', 'src/image/BASIC.png');
        this.load.image('en', 'src/image/enemies.png');
        this.load.image('it', 'src/image/ITEMs.png');
        this.load.image('ba', 'src/image/back.png');

        this.load.image('switch', 'src/image/switch.png');

        this.load.spritesheet('player','src/image/ruuning.png',
        { frameWidth: 242 , frameHeight: 266});

        this.load.spritesheet('throw','src/image/throwarggggg.png',
        { frameWidth: 252 , frameHeight: 262});

        this.load.spritesheet('evil','src/image/evilrun.png',
        { frameWidth: 391 , frameHeight: 362});

        this.load.spritesheet('SK','src/image/UTSK.png',
        { frameWidth: 443 , frameHeight: 443});

        this.load.spritesheet('crow','src/image/crow.png',
        { frameWidth: 428 , frameHeight: 296});

        this.load.audio('click','src/sound/click.mp3');
        this.load.audio('flip','src/sound/flip.mp3');
        
    }

    create() {

        this.cameras.main.fadeIn(1000);

        click = this.sound.add('click').setVolume(0.3);
        flip = this.sound.add('flip').setVolume(0.3);

        bs = this.add.image(0, 0, 'bs').setOrigin(0,0).setDepth(1).setVisible(true);
        en = this.add.image(0, 0, 'en').setOrigin(0,0).setDepth(1).setVisible(false);
        it = this.add.image(0, 0, 'it').setOrigin(0,0).setDepth(1).setVisible(false);

        basic_button = this.add.image(144, 90, 'switch')
        .setScale(0.3)
        .setDepth(100)
        .setVisible(true);
        basic_button.setInteractive();
        basic_button.on('pointerup',()=>{
            flip.play({loop: false});
            bs.setVisible(true);
            player.setVisible(true);
            tHrow.setVisible(true);
            
            en.setVisible(false);
            evil.setVisible(false);
            crow.setVisible(false);
            
            it.setVisible(false);
            SK.setVisible(false); 
        })

        enemies_button = this.add.image(450, 80, 'switch')
        .setScale(0.4)
        .setDepth(100)
        .setVisible(true);
        enemies_button.setInteractive();
        enemies_button.on('pointerup',()=>{
            flip.play({loop: false});
            en.setVisible(true);
            evil.setVisible(true);
            crow.setVisible(true);
            
            bs.setVisible(false);
            player.setVisible(false);
            tHrow.setVisible(false);

            it.setVisible(false);
            SK.setVisible(false); 
        })

        items_button = this.add.image(770, 80, 'switch')
        .setScale(0.4)
        .setDepth(100)
        .setVisible(true);
        items_button.setInteractive();
        items_button.on('pointerup',()=>{
            flip.play({loop: false});
            it.setVisible(true);
            SK.setVisible(true);
            
            en.setVisible(false);
            evil.setVisible(false);
            crow.setVisible(false);

            bs.setVisible(false);
            player.setVisible(false);
            tHrow.setVisible(false);

            
        })

        back_button = this.add.image(1100, 70, 'ba')
        .setScale(0.4)
        .setDepth(100)
        .setVisible(true);
        back_button.setInteractive();
        back_button.on('pointerup',()=>{
            click.play({loop: false});
            this.cameras.main.fadeOut(1000);
            this.time.addEvent({
                delay: 1000,
                callback: function () {
                    location.reload();
            },
            callbackScope: this,
            loop: false,
        });
        });
        back_button.on('pointerover', function () {
            back_button.setTint(0x9acd32);
        });
        back_button.on('pointerout', function () {
            back_button.clearTint();
        });


        player = this.physics.add.sprite(160, 200, 'player')
        .setScale(0.5)
        .setDepth(10)
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

        tHrow = this.physics.add.sprite(160, 350, 'throw')
        .setScale(0.5)
        .setDepth(10)
        .setVisible(true);

        this.anims.create({
            key: 'throwAni',
            frames: this.anims.generateFrameNumbers('throw', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        SK = this.physics.add.sprite(player.x-7, 500, 'SK')
        .setDepth(5)
        .setScale(0.5)
        .setVisible(false);
            
        this.anims.create({
            key: 'SKAni',
            frames: this.anims.generateFrameNumbers('SK', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        
        evil = this.physics.add.sprite(170, 270, 'evil')
        .setDepth(5)
        .setScale(0.5)
        .setFlip(true)
        .setVisible(false);
        
 
        this.anims.create({
            key: 'evilAni',
            frames: this.anims.generateFrameNumbers('evil', {
                start: 0,
                end: 3
            }),
            duration: 500,    
            repeat: -1
        })

        crow = this.physics.add.sprite(evil.x, 500, 'crow')
            .setDepth(5)
            .setScale(0.4)
            .setFlip(true)
            .setVisible(false);
     
            this.anims.create({
                key: 'crowAni',
                frames: this.anims.generateFrameNumbers('crow', {
                    start: 0,
                    end: 3
                }),
                duration: 500,    
                repeat: -1
        })
       
        
    }

    update(delta, time) {
        player.anims.play('playerAni', true);
        tHrow.anims.play('throwAni', true);
        evil.anims.play('evilAni', true);
        crow.anims.play('crowAni', true);
        SK.anims.play('SKAni', true);
        
    }
}
export default TutorialScene;
