/**
 * Represents a drawable object.
 */

class DrawableObject{
    img;
    imageChache = {};
    currentImg = 0;
    x = 120;
    y = 275;
    height = 150;
    width = 100;
    intervalIds=[];
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

     /**
     * Sets a stoppable interval that repeatedly calls a function.
     * @param {Function} fn - The function to execute.
     * @param {number} time - The interval time in milliseconds.
     */
    setStoppableInterval(fn,time){
        let id = setInterval(fn,time);
        this.intervalIds.push(id);

        return id;
    }

      /**
     * Stops all intervals stored in intervalIds.
     */
    stopGame(){
        this.intervalIds.forEach(clearInterval);
    }

    /**
     * Loads an image from the given path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

     /**
     * Draws the object onto the canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2d rendering context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // drawFrame(ctx){

    //        ctx.beginPath();
    //        ctx.lineWidth = '5';
    //        ctx.strokeStyle = 'blue';
    //        let offsetX = this.x + this.offset.left;
    //        let offsetY = this.y + this.offset.top;
    //        let offsetWidth = this.width - this.offset.left - this.offset.right;
    //        let offsetHeight = this.height - this.offset.top - this.offset.bottom;

    //        ctx.rect(offsetX, offsetY, offsetWidth, offsetHeight);
    //        ctx.stroke();

        
    // }

    /**
     * Loads multiple images into the image cache.
     * @param {Array<string>} arr - Array of image paths.
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }
}