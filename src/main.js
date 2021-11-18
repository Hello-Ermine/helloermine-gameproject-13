import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import CreditScene from './scenes/CreditScene';
import TutorialScene from './scenes/TutorialScene';
import GameOver from './scenes/GameOver';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        MainMenu,
        GameScene,
        GameOver,
        CreditScene,
        TutorialScene,
        
    ],
    
    
};

const game = new Phaser.Game(config);