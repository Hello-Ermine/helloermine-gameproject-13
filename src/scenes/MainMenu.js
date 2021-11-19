import Phaser from "phaser";

let background;

//Button
let playButton;
let tutorialButton;
let creditButton;
let cross;
let soundButton;
//music
let theme;
let click;
let p;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {

        //button part
        this.load.image('bg', 'src/image/BgMenu.png');
        this.load.image('play', 'src/image/PlayButton.png');
        this.load.image('tutorial', 'src/image/TutorialButton.png');
        this.load.image('credit', 'src/image/CreditButton.png');

        //music part
        this.load.audio('theme', ['src/sound/menu_theme.mp3']);
        this.load.image('sound','src/image/soundbutton.png');
        this.load.image('cross','src/image/cross.png');
        this.load.audio('click','src/sound/click.mp3');
        this.load.audio('p', ['src/sound/pickup.mp3']);



    }

    create() {

        this.cameras.main.fadeIn(1000);

        //music
        theme = this.sound.add('theme').setVolume(0.1);
        theme.play({loop: true});
        click = this.sound.add('click').setVolume(0.3);
        p = this.sound.add('p').setVolume(0.3);
        

        background = this.add.image(640, 360, 'bg').setDepth(5);
        
       //Play
        playButton = this.physics.add.image(240, 380, 'play').setScale(0.5).setDepth(10);
        playButton.setInteractive();
        playButton.on('pointerup', () => {
            theme.stop();
            click.play({loop: false});
            this.cameras.main.fadeOut(1000);
            this.time.addEvent({
                delay: 1000,
                callback: function () {
                    this.scene.start('GameScene');
            },
            callbackScope: this,
            loop: false,
        });
        });
        playButton.on('pointerover', function () {
            playButton.setTint(0x9acd32);
        });
        playButton.on('pointerout', function () {
            playButton.clearTint();
        });    

        //tutorial
        tutorialButton = this.physics.add.image(240, 500, 'tutorial').setScale(0.5).setDepth(10);
        tutorialButton.setInteractive();
        tutorialButton.on('pointerup', () => {
            click.play({loop: false});
            this.cameras.main.fadeOut(1000);
            this.time.addEvent({
                delay: 1000,
                callback: function () {
                    this.scene.start('TutorialScene');
            },
            callbackScope: this,
            loop: false,
        });
        });
        tutorialButton.on('pointerover', function () {
            tutorialButton.setTint(0x9acd32);
        });
        tutorialButton.on('pointerout', function () {
            tutorialButton.clearTint();
        }); 
        
        //credit
        creditButton = this.physics.add.image(240, 620, 'credit').setScale(0.5).setDepth(10);
        creditButton.setInteractive();
        creditButton.on('pointerup', () => {
            theme.stop();
            click.play({loop: false});
            this.cameras.main.fadeOut(1000);
            this.time.addEvent({
                delay: 1000,
                callback: function () {
                    this.scene.start('CreditScene');
            },
            callbackScope: this,
            loop: false,
        });
        });
        creditButton.on('pointerover', function () {
            creditButton.setTint(0x9acd32);
        });
        creditButton.on('pointerout', function () {
            creditButton.clearTint();
        });

        //sound control
        cross = this.add.image(1200, 100, 'cross').setScale(0.2).setDepth(100);
        cross.setVisible(false);

        soundButton = this.add.image(1200, 100, 'sound').setScale(0.7).setDepth(99);
        soundButton.setInteractive();
        soundButton.on('pointerup',()=>{
            p.play({loop: false});
            if(!theme.mute){
                theme.mute = true;
                cross.setVisible(true);
            }else{
                theme.mute = false;
                cross.setVisible(false);
            }             
        })
        soundButton.on('pointerover', function () {
            soundButton.setTint(0x9acd32);
        });
        soundButton.on('pointerout', function () {
            soundButton.clearTint();
        });
    }

    update(delta, time) {

    }
}
export default MainMenu;
