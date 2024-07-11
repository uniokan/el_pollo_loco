class Endboss extends MovableObject {

    height = 400;
    width = 300;
    y = 35;
    IMAGES_DEAD ='img/4_enemie_boss_chicken/5_dead/G26.png';
    energy = 100 ; 

        IMAGES_WALKING = [
            './img/4_enemie_boss_chicken/2_alert/G5.png',
            './img/4_enemie_boss_chicken/2_alert/G6.png',
            './img/4_enemie_boss_chicken/2_alert/G7.png',
            './img/4_enemie_boss_chicken/2_alert/G8.png',
            './img/4_enemie_boss_chicken/2_alert/G9.png',
            './img/4_enemie_boss_chicken/2_alert/G10.png',
            './img/4_enemie_boss_chicken/2_alert/G11.png',
            './img/4_enemie_boss_chicken/2_alert/G12.png',
        ]

        IMAGES_STATUSBAR = [
            'img/7_statusbars/2_statusbar_endboss/green/green0.png',
            'img/7_statusbars/2_statusbar_endboss/green/green20.png',
            'img/7_statusbars/2_statusbar_endboss/green/green40.png',
            'img/7_statusbars/2_statusbar_endboss/green/green60.png',
            'img/7_statusbars/2_statusbar_endboss/green/green80.png',
            'img/7_statusbars/2_statusbar_endboss/green/green100.png'
        ]

    constructor() {
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2000;
        this.animate();
    }

    dead() {
        this.loadImage(this.IMAGES_DEAD);
        clearInterval(this.enbossWalking);
    }


    animate() {
       this.enbossWalking= setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200)
    }
}