import Phaser from "phaser";

let lb;
let back_button;
let cg;
let click;

class CreditScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'CreditScene'
        });
    }

    preload() {

        this.load.image('ba', 'src/image/back.png');
        this.load.image('lb', 'src/image/lb.png');

        this.load.audio('cg', ['src/sound/congra.mp3']);  
        this.load.audio('click','src/sound/click.mp3');
        
    }

    create() {

        this.cameras.main.fadeIn(1000);

        cg = this.sound.add('cg').setVolume(0.1);
        cg.play({loop: true});
        click = this.sound.add('click').setVolume(0.3);

        lb = this.add.image(0, 0, 'lb').setOrigin(0,0).setDepth(1).setVisible(true);

        back_button = this.add.image(1180, 70, 'ba')
        .setScale(0.4)
        .setDepth(100)
        .setVisible(true);
        back_button.setInteractive();
        back_button.on('pointerup',()=>{
            cg.stop();
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
        
    }

    update(delta, time) {
        
    }
}
export default CreditScene;
