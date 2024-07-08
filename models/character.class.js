class Character extends MovableObject {
    height = 300;
    width = 150;
    y = 120;
    speed=5;
    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ]
    world;

    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {

        setInterval(()=>{
            if (this.world.keyboard.RIGHT === true) {
                this.x+=this.speed;
                this.otherDirection=false;
            }

            if (this.world.keyboard.LEFT === true) {
                this.x-=this.speed;
                this.otherDirection=true;
            }

            this.world.camera_x = -this.x;

        }, this.fps60)

        setInterval(() => {
            if (this.world.keyboard.RIGHT === true || this.world.keyboard.LEFT === true ) {
                this.x += this.speed+1; 
                let i = this.currentImg % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageChache[path];
                this.currentImg++;
            }
        }, 50)
    }

    jump() {

    }
}