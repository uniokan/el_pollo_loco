class World {

    character = new Character();
    level = levelStatus;
    endBoss = this.level.enemies.length - 1;
    winScreen;
    endScreen;
    canvas;
    ctx;
    camera_x = 0;
    statusBar = new StatusBar(this.character.IMAGES_HEALTH, 50, 0, 'health', 100);
    statusBarCoins = new StatusBar(this.character.IMAGES_COINS, 50, 50, 'coins', 0);
    statusBarFlasks = new StatusBar(this.character.IMAGES_FLASKS, 50, 100, 'flasks', 0);
    health_Endboss = new StatusBar(this.level.enemies[this.endBoss].IMAGES_STATUSBAR, 500, 40, 'endboss', 100)
    throwableObject = [new ThorableObject()]
    sound_bottle = Object.assign(new Audio('sound/throw_bottle.ogg'), { volume: 0.7 });
    GAME_MUSIC = Object.assign(new Audio('sound/game_music.ogg'), { volume: 0.5 });
    CHICKEN_SOUND = Object.assign(new Audio('sound/chicken.ogg'), { volume: 0.7 });
    ENEMY_HIT_SOUND = Object.assign(new Audio('sound/hurt_chicken.ogg'), { volume: 0.7 });
    GAME_WIN_SOUND = new Audio('sound/game_win.ogg');
    GAME_LOST_SOUND = new Audio('sound/game_lost.ogg');


    /**
       * Constructs a new World instance.
       * @param {HTMLCanvasElement} canvas - The canvas element for rendering the game.
       * @param {Keyboard} keyboard - The keyboard controller for user input.
       * @param {HTMLElement} endScreen - The element for displaying the game over screen.
       * @param {HTMLElement} winScreen - The element for displaying the game win screen.
       */
    constructor(canvas, keyboard, endScreen, winScreen) {
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.endScreen = endScreen;
        this.winScreen = winScreen;

        this.draw = this.draw.bind(this);
        this.draw();
        this.setWorld();
        this.run();
        this.GAME_MUSIC.play();
        this.CHICKEN_SOUND.play();
    }

    /**
     * Starts the game loop and collision checks.
     */
    run() {
        this.character.setStoppableInterval(() => {
            this.checkCollisions();
        }, 50);

        setInterval(() => {
            this.checkThrowObjects();
        }, 200);
    }

    /**
     * Checks if the character throws objects (bottles) and handles collisions.
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.character.flasks > 0) {
            let bottle = new ThorableObject(this.character.x + 100, this.character.y + 30);
            this.throwableObject.push(bottle);
            this.sound_bottle.play();
            this.character.decreaseFlasks();
            this.statusBarFlasks.setPercentage(this.character.flasks);

            this.character.setStoppableInterval(() => {
                this.level.enemies.forEach((enemy) => {
                    this.checkFlasksCollisionsWithEnemy(enemy, bottle);
                });
            }, 50);
        }
    }

    /**
     * Checks collisions between the character and enemies, coins, and flasks.
     */
    checkCollisions() {
        this.level.enemies.forEach(enemy => this.checkCollisionsWithEnemy(enemy));
        this.level.coins.forEach(coin => this.checkCollisionsWithCoins(coin));
        this.level.flasks.forEach(flask => this.checkCollisionsWithFlasks(flask));
    }

    /**
     * Checks collisions between throwable objects (bottles) and enemies.
     * @param {Enemy} enemy - The enemy to check collision with.
     * @param {ThorableObject} bottle - The bottle object being thrown.
     */
    checkFlasksCollisionsWithEnemy(enemy, bottle) {
        if (bottle.isColliding(enemy)) {
            if (enemy instanceof Chicken) {
                this.enemyDead(enemy);
            } else {
                this.hitEndboss(enemy, bottle);
            }
        }
    }

    /**
     * Handles the effect of a bottle hitting the end boss.
     * @param {Enemy} enemy - The end boss enemy.
     * @param {ThorableObject} bottle - The bottle object hitting the end boss.
     */
    hitEndboss(enemy, bottle) {
        if (enemy.energy <= 0) {
            enemy.energy = 0;
            this.enemyDead(enemy);
            this.gameWin();
        } else {
            this.level.enemies[this.endBoss].hit(30);
            this.health_Endboss.setPercentage(enemy.energy);
            bottle.bottleHit(enemy);
            this.ENEMY_HIT_SOUND.play();
        }
    }

    /**
     * Handles an enemy's death.
     * @param {Enemy} enemy - The enemy that is dead.
     */
    enemyDead(enemy) {
        enemy.dead();
        setTimeout(() => {
            this.level.enemies = this.level.enemies.filter(e => e !== enemy);
            this.endBoss = this.level.enemies.length - 1;
        }, 2000);
    }

    /**
     * Checks collisions between the character and enemies.
     * @param {Enemy} enemy - The enemy to check collision with.
     */
    checkCollisionsWithEnemy(enemy) {
        if (this.character.isColliding(enemy)) {
            if (enemy instanceof Endboss) {
                this.character.hit(100);
                this.character.stopGame();
                this.gameOver();
            }
            if (!enemy.isDead) {
                this.chickenIsNotDead(enemy);
            }
        }
    }

    /**
     * Handles the character's interaction with non-dead chickens.
     * @param {Enemy} enemy - The chicken enemy.
     */
    chickenIsNotDead(enemy) {
        if (this.character.isJumpingOn(enemy)) {
            this.jumpOnChicken(enemy);
        } else {
            this.character.hit(5);
            this.statusBar.setPercentage(this.character.energy);
            if (this.character.energy <= 0) {
                this.gameOver();
            }
        }
    }

    /**
     * Handles the character jumping on a chicken.
     * @param {Enemy} enemy - The chicken enemy.
     */
    jumpOnChicken(enemy) {
        if (enemy instanceof Chicken) {
            this.enemyDead(enemy);
            this.character.speedY = 25;
        }
    }

    /**
     * Displays the game win screen.
     */
    gameWin() {
        this.GAME_WIN_SOUND.play();
        this.stopSoundsAndIntervalls();
        this.winScreen.classList.remove('d-none');
    }

    /**
     * Displays the game over screen.
     */
    gameOver() {
        this.GAME_LOST_SOUND.play();
        this.endScreen.classList.remove('d-none');
        this.stopSoundsAndIntervalls();
    }

    /**
    * Mutes or unmutes all game sounds.
    * @param {boolean} state - The mute state. `true` to mute the sounds, `false` to unmute.
    */
    stopSounds(state) {
        this.GAME_MUSIC.muted = state;
        this.CHICKEN_SOUND.muted = state;
        this.GAME_LOST_SOUND.muted = state;
        this.GAME_WIN_SOUND.muted = state;
        this.ENEMY_HIT_SOUND.muted = state;
        this.sound_bottle.muted = state;
        this.character.walking_sound.muted = state;
        this.character.jumping_sound.muted = state;
        this.character.hurt_sound.muted = state;
    }

    /**
    * Stops all game sounds and clears all intervals associated with the character.
    */
    stopSoundsAndIntervalls() {
        this.stopSounds;
        this.character.intervalIds.forEach(clearInterval);
    }

    /**
     * Checks collisions between the character and coins.
     * @param {Coin} c - The coin object to check collision with.
     */
    checkCollisionsWithCoins(c) {
        if (this.character.isColliding(c)) {
            this.character.increaseCoins();
            this.statusBarCoins.setPercentage(this.character.coins);
            this.level.coins = this.level.coins.filter(coin => coin !== c);
        }
    }

    /**
     * Checks collisions between the character and flasks.
     * @param {Flask} f - The flask object to check collision with.
     */
    checkCollisionsWithFlasks(f) {
        if (this.character.isColliding(f)) {
            this.character.increaseFlasks();
            this.statusBarFlasks.setPercentage(this.character.flasks);
            this.level.flasks = this.level.flasks.filter(flask => flask !== f);
        }
    }

    /**
     * Sets the world reference for the character.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Draws all objects in the game world.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.getObjectsToDraw();
        requestAnimationFrame(this.draw);
    }

    /**
     * Translates the canvas and draws all objects in the game world.
     */
    getObjectsToDraw() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMapContainer();
        this.ctx.translate(-this.camera_x, 0);

        this.addStatusBarToMap();
    }

    /**
     * Adds status bars to the map.
     */
    addStatusBarToMap() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarFlasks);
        this.addToMap(this.health_Endboss);
    }

    /**
     * Adds objects to the map container.
     */
    addObjectsToMapContainer() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.flasks);
    }

    /**
     * Adds objects to the map.
     * @param {Array<Object>} object - The array of objects to add.
     */
    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Adds an object to the map.
     * @param {Object} mo - The object to add to the map.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flips an image horizontally.
     * @param {Object} mo - The object whose image to flip.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Flips an image back to its original orientation.
     * @param {Object} mo - The object whose image to flip back.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}