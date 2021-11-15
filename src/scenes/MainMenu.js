import Phaser from "phaser";

let background;

//Button
let playButton;
let tutorialButton;
let creditButton;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/BgMenu.png');
        this.load.image('play', 'src/image/PlayButton.png');
        this.load.image('tutorial', 'src/image/TutorialButton.png');
        this.load.image('credit', 'src/image/CreditButton.png');

    }

    create() {

        background = this.add.image(640, 360, 'bg').setDepth(5);
        
       
        playButton = this.physics.add.image(240, 390, 'play').setScale(0.5).setSize(350,200).setOffset(175,225).setDepth(10);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {
            this.scene.start('GameScene')
         })

        tutorialButton = this.physics.add.image(240, 510, 'tutorial').setScale(0.5).setSize(350,200).setOffset(175,225).setDepth(10);
        // tutorialButton.setInteractive();
        // tutorialButton.on('pointerdown', () => {
        //     this.scene.start('Tutorial')
        // })

        creditButton = this.physics.add.image(240, 630, 'credit').setScale(0.5).setSize(350,200).setOffset(175,225).setDepth(10);
        // creditButton.setInteractive();
        // creditButton.on('pointerdown', () => {
        //     this.scene.start('Credit')
        // })
    }

    update(delta, time) {

    }
}
export default MainMenu;
