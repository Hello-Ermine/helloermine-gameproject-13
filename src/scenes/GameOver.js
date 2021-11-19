import Phaser from "phaser";
import GameScene from "./GameScene";

let score;
let scoreText;

let g1;
let g2;
let g3;

let mask;

let thum;

let pg;
let tm;

let click;








class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
        
        
    }

    init(data)
    {
        console.log('init', data);
        score = data.score;
    }

    

    preload() {

        this.load.image('pg','src/image/play_again.png');
        this.load.image('tm','src/image/to_menu.png');


        this.load.image('g1','src/image/g1.png');
        this.load.image('g2','src/image/g2.png');
        this.load.image('g3','src/image/g3.png');

        this.load.image('mask','src/image/mask.png');

        this.load.audio('thum', ['src/sound/Thum.mp3']);    

    }

    create() {

    

        
        scoreText = this.add.text(640, 550, score , { fontSize: '80px', fill: '#8B0000' })
        .setDepth(100)
        .setVisible(false);
                    
        thum = this.sound.add('thum').setVolume(1);
        click = this.sound.add('click').setVolume(0.3);


        this.time.addEvent({
            delay: 5000,
            callback: function () {


                thum.play({loop: false});

                g1 = this.add.image(640, 170, 'g1')
                .setScale(1)
                .setDepth(100)
                .setVisible(true);

                








                this.time.addEvent({
                    delay: 2000,
                    callback: function () {

                        thum.play({loop: false});

                        g2 = this.add.image(640, 300, 'g2')
                        .setScale(1)
                        .setDepth(100)
                        .setVisible(true);

                        g3 = this.add.image(640, 400, 'g3')
                        .setScale(1)
                        .setDepth(100)
                        .setVisible(true);









                                this.time.addEvent({
                                    delay: 2000,
                                    callback: function () {

                                        thum.play({loop: false});

                                        scoreText.setVisible(true);

                                        mask = this.add.image(scoreText.x-100, 565, 'mask')
                                        .setScale(0.5)
                                        .setDepth(100)
                                        .setVisible(true);

                                        this.time.addEvent({
                                            delay: 2000,
                                            callback: function () {

                                                tm = this.add.image(170, 650, 'tm')
                                                .setScale(0.5)
                                                .setDepth(100)
                                                .setVisible(true);
                                                tm.setInteractive();
                                                tm.on('pointerdown', () => {
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
                                                tm.on('pointerover', function () {
                                                    tm.setTint(0x9acd32);
                                                });
                                                tm.on('pointerout', function () {
                                                    tm.clearTint();
                                                }); 

                                                // pg = this.add.image(1100, 650, 'pg')
                                                // .setScale(0.5)
                                                // .setDepth(100)
                                                // .setVisible(true);
                                                // pg.setInteractive();
                                                // pg.on('pointerdown', () => {
                                                    
                                                // });
                                                // pg.on('pointerover', function () {
                                                //     pg.setTint(0x9acd32);
                                                // });
                                                // pg.on('pointerout', function () {
                                                //     pg.clearTint();
                                                // }); 
                                             
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
    

      


    }
    update(delta, time) {
        if(score>10){
            this.tweens.add({
                targets: scoreText,
                x: 608,
                paused: false,
                duration: 1,
            })
        }else if(score >100){
            this.tweens.add({
                targets: scoreText,
                x: 588,
                paused: false,
                duration: 1,
            })
    
        }else if(score >1000){
            this.tweens.add({
                targets: scoreText,
                x: 558,
                paused: false,
                duration: 1,
            })
    
        }

      

    }
}
export default GameOver;
