class DrawableObject{
    img;
    imageChache = {};
    currentImg = 0;
    x = 120;
    y = 275;
    height = 150;
    width = 100;
    intervalIds=[];

    setStoppableInterval(fn,time){
        let id = setInterval(fn,time);
        this.intervalIds.push(id);
    }

    stopGame(){
        this.intervalIds.forEach(clearInterval);
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


}