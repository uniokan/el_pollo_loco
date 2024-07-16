class ThorableObject extends MovableObject {

    FLASK_HIT_IMAGE = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.FLASK_HIT_IMAGE)
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 40;
        this.throw();
    }



    throw() {
        this.speedY = 30;
        this.applyGravity();
        this.bottleThrowing = setInterval(() => {
            this.x += 10;
        }, 25);
    }

    bottleHit() {
        this.bottleExplodes = setInterval(() => {
            this.playAnimation(this.FLASK_HIT_IMAGE);
        }, 100)

    }
}