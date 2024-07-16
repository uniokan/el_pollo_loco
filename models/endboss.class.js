class Endboss extends MovableObject {

    height = 400;
    width = 300;
    y = 35;
    // IMAGES_DEAD = 'img/4_enemie_boss_chicken/5_dead/G26.png';
    energy = 100;
    speed = 2;
    isDead = false;

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'

    ]

    IMAGES_MOVING = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ]

    IMAGES_STATUSBAR = [
        'img/7_statusbars/2_statusbar_endboss/green/green0.png',
        'img/7_statusbars/2_statusbar_endboss/green/green20.png',
        'img/7_statusbars/2_statusbar_endboss/green/green40.png',
        'img/7_statusbars/2_statusbar_endboss/green/green60.png',
        'img/7_statusbars/2_statusbar_endboss/green/green80.png',
        'img/7_statusbars/2_statusbar_endboss/green/green100.png'
    ]

    IMAGES_WALKING = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    ENDBOSS_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ]

    constructor() {
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_MOVING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.ENDBOSS_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 3000;
        this.animate();
    }

    dead() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);
        }, 150)
        clearInterval(this.enbossMoving);
        clearInterval(this.moveLeftInterval);
        clearInterval(this.movingInterval);
    }


    animate() {
        this.enbossMoving = setInterval(() => {
            this.playAnimation(this.IMAGES_MOVING);

        }, 200)

        this.moveLeftInterval = setInterval(() => {
            this.moveLeft();

        }, 1000 / 60);

        this.movingInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            if (this.isHurt()) {
                this.playAnimation(this.ENDBOSS_HURT);
            }
        }, 100)
    }
}