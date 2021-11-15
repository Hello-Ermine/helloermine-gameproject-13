import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import CreditScene from './scenes/CreditScene';
import TutorialScene from './scenes/TutorialScene';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1254,
    height: 706,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        MainMenu,
        GameScene,
        CreditScene,
        TutorialScene
    ],
    
    
};

const game = new Phaser.Game(config);