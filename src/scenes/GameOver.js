import Phaser from "phaser";

let GOS;





class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {

        this.load.audio('GOS', ['src/sound/GameOverSound.mp3']);
        

        

    }

    create() {


        GOS = this.sound.add('GOS').setVolume(20);
        GOS.play({loop: false});

        // this.time.addEvent({
        //     delay: 500,
        //     callback: function () {

                
            
                
             
        //     },
        //     callbackScope: this,
        //     loop: false,
        //     paused: false,
        //     });
    //}

      


    }
    update(delta, time) {

      

    }
}
export default GameOver;
