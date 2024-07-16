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
    sound_bottle = new Audio('sound/throw_bottle.ogg');
    GAME_MUSIC = new Audio('sound/game_music.ogg');
    CHICKEN_SOUND = new Audio('sound/chicken.ogg');
    ENEMY_HIT_SOUND = new Audio('sound/hurt_chicken.ogg');
    GAME_WIN_SOUND = new Audio('sound/game_win.ogg');
    GAME_LOST_SOUND = new Audio('sound/game_lost.ogg');



    constructor(canvas, keyboard, endScreen, winScreen, levelCounter) {
        this.ctx = canvas.getContext('2d');
        this.draw = this.draw.bind(this);
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.run();
        this.GAME_MUSIC.play();
        this.CHICKEN_SOUND.play();
        this.endScreen = endScreen;
        this.winScreen = winScreen;
    }


    run() {
        this.character.setStoppableInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.character.flasks > 0) {
            let bottle = new ThorableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObject.push(bottle);
            this.sound_bottle.play();
            this.character.decreaseFlasks();
            this.statusBarFlasks.setPercentage(this.character.flasks);

            this.character.setStoppableInterval(() => {
                this.level.enemies.forEach((enemy) => {
                    this.checkFlasksCollisionsWithEnemy(enemy, bottle);
                });
            }, 100)

        }
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => this.checkCollisionsWithEnemy(enemy));
        this.level.coins.forEach(coin => this.checkCollisionsWithCoins(coin));
        this.level.flasks.forEach(flask => this.checkCollisionsWithFlasks(flask));
    }


    checkFlasksCollisionsWithEnemy(enemy, bottle) {
        if (bottle.isColliding(enemy)) {
            if (enemy instanceof Chicken) {
                this.enemyDead(enemy);
            }

            else {
                this.hitEndboss(enemy)
            }
        }
    }



    hitEndboss(enemy) {
        if (enemy.energy <= 0) {
            enemy.energy = 0;
            this.enemyDead(enemy);
            this.gameWin();
        }

        else {
            this.level.enemies[this.endBoss].hit(30);
            this.health_Endboss.setPercentage(enemy.energy);
            this.ENEMY_HIT_SOUND.play();
        }
    }


    enemyDead(enemy) {
        enemy.dead();
        setTimeout(() => {
            this.level.enemies = this.level.enemies.filter(e => e !== enemy);
            this.endBoss = this.level.enemies.length - 1;
        }, 2000);
    }

    checkCollisionsWithEnemy(enemy) {
        if (this.character.isColliding(enemy)) {
            if (enemy instanceof Endboss) {
                this.character.hit(100);
            }

            if (!enemy.isDead) {
                this.chickenIsNotDead(enemy);
            }
        }
    }


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



    jumpOnChicken(enemy) {
        if (enemy instanceof Chicken) {
            this.enemyDead(enemy);
            this.character.speedY = 25;
        }
    }


    gameWin() {
        this.GAME_WIN_SOUND.play();
        this.stopSoundsAndIntervalls();
        this.winScreen.classList.remove('d-none');

    }

    gameOver() {
        this.GAME_LOST_SOUND.play();
        this.endScreen.classList.remove('d-none');
        this.stopSoundsAndIntervalls();

    }

    stopSoundsAndIntervalls() {
        this.GAME_MUSIC.pause();
        this.CHICKEN_SOUND.pause();
        this.character.intervalIds.forEach(clearInterval);
    }


    checkCollisionsWithCoins(c) {
        if (this.character.isColliding(c)) {
            this.character.increaseCoins();
            this.statusBarCoins.setPercentage(this.character.coins);
            this.level.coins = this.level.coins.filter(coin => coin !== c);
        }
    }


    checkCollisionsWithFlasks(f) {
        if (this.character.isColliding(f)) {
            this.character.increaseFlasks();
            this.statusBarFlasks.setPercentage(this.character.flasks);
            this.level.flasks = this.level.flasks.filter(flask => flask !== f);
        }
    }


    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.getObjectsToDraw();
        requestAnimationFrame(this.draw);
    }


    getObjectsToDraw() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMapContainer();
        this.ctx.translate(-this.camera_x, 0);

        this.addStatusBarToMap();

    }


    addStatusBarToMap() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarFlasks);
        this.addToMap(this.health_Endboss);
    }


    addObjectsToMapContainer() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.flasks);
    }


    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o)
        })
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
