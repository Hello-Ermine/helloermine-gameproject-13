import Phaser from "phaser";

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

    }

    create() {
        playButton = this.add.image(, , 'play').setScale().setDepth(1);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {
            this.scene.start('GameScene')
        })

        tutorialButton = this.add.image(, , 'tutorial').setScale().setDepth(1);
        tutorialButton.setInteractive();
        tutorialButton.on('pointerdown', () => {
            this.scene.start('Tutorial')
        })

        creditButton = this.add.image(, , 'credit').setScale().setDepth(1);
        creditButton.setInteractive();
        creditButton.on('pointerdown', () => {
            this.scene.start('Credit')
        })
    }

    update(delta, time) {

    }
}
export default MainMenu;
