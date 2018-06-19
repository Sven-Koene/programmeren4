"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CharacterObject = (function () {
    function CharacterObject() {
        var _this = this;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.upSpeed = 0;
        this.downSpeed = 0;
        this.speed = 10;
        this.lives = 5;
        this.element = document.createElement("character");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.leftKey = 37;
        this.rightKey = 39;
        this.upKey = 38;
        this.downKey = 40;
        this.x = innerWidth - 100;
        this.y = innerHeight - 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    CharacterObject.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = this.speed;
                break;
            case this.rightKey:
                this.rightSpeed = this.speed;
                break;
            case this.upKey:
                this.upSpeed = this.speed;
                break;
            case this.downKey:
                this.downSpeed = this.speed;
                break;
        }
    };
    CharacterObject.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
            case this.upKey:
                this.upSpeed = 0;
                break;
            case this.downKey:
                this.downSpeed = 0;
                break;
        }
    };
    CharacterObject.prototype.update = function () {
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newX > 90 && newX + 66 < window.innerWidth / 2 - 50)
            this.x = newX;
        if (newX > window.innerWidth / 2 + 45 && newX + 66 < window.innerWidth - 95)
            this.x = newX;
        if (newY > 0 && newY + 129 < window.innerHeight)
            this.y = newY;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    CharacterObject.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return CharacterObject;
}());
var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        var _this = _super.call(this) || this;
        _this.leftKey = 65;
        _this.rightKey = 68;
        _this.upKey = 87;
        _this.downKey = 83;
        _this.x = 100;
        _this.y = innerHeight - 200;
        return _this;
    }
    return Character;
}(CharacterObject));
var Character2 = (function (_super) {
    __extends(Character2, _super);
    function Character2() {
        var _this = _super.call(this) || this;
        _this.leftKey = 37;
        _this.rightKey = 39;
        _this.upKey = 38;
        _this.downKey = 40;
        _this.x = innerWidth - 166;
        _this.y = innerHeight - 200;
        return _this;
    }
    return Character2;
}(CharacterObject));
var Coin = (function () {
    function Coin() {
        this.element = document.createElement("coin");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.speed = Math.floor(Math.random() * 7) + 3;
        this.x = Math.random() * (window.innerWidth - 77);
        this.y = -77 - (Math.random() * 450);
    }
    Coin.prototype.update = function () {
        this.y += this.speed;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Coin.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    Coin.prototype.reset = function () {
        this.x = Math.random() * (window.innerWidth - 200);
        this.y = -400 - (Math.random() * 450);
    };
    return Coin;
}());
var enemyObject = (function () {
    function enemyObject() {
        this.speed = Math.floor(Math.random() * 10) + 5;
        this.element = document.createElement("enemy");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
    }
    enemyObject.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return enemyObject;
}());
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super.call(this) || this;
        _this.y = Math.random() * (window.innerHeight - 77);
        _this.x = -77 - (Math.random() * 450);
        return _this;
    }
    Enemy.prototype.update = function () {
        this.x += this.speed;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Enemy.prototype.reset = function () {
        this.y = Math.random() * (window.innerHeight - 200);
        this.x = -77 - (Math.random() * 450);
    };
    return Enemy;
}(enemyObject));
var Enemy2 = (function (_super) {
    __extends(Enemy2, _super);
    function Enemy2() {
        var _this = _super.call(this) || this;
        _this.y = Math.random() * (window.innerHeight - 77);
        _this.x = (window.innerWidth + 77) + (Math.random() * 450);
        return _this;
    }
    Enemy2.prototype.update = function () {
        this.x -= this.speed;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Enemy2.prototype.reset = function () {
        this.y = Math.random() * (window.innerHeight - 200);
        this.x = (window.innerWidth + 77) + (Math.random() * 450);
    };
    return Enemy2;
}(enemyObject));
var Game = (function () {
    function Game() {
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.emptyScreen = function () {
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.innerHTML = "";
    };
    Game.prototype.showScreen = function (screen) {
        this.currentscreen = screen;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOver = (function () {
    function GameOver(g) {
        this.gamescreen = g;
        this.textfield = document.createElement("textfield");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.textfield);
    }
    GameOver.prototype.update = function () {
        this.textfield.innerHTML = "GAME OVER, MAN!" + "<br> Player 1 score:" + this.gamescreen.score1 + "<br> Player 2 score:" + this.gamescreen.score2;
    };
    return GameOver;
}());
var GameScreen = (function () {
    function GameScreen(g) {
        this.hitCoin = 0;
        this.game = g;
        this.character = new Character();
        this.character2 = new Character2();
        this.enemies2 = [new Enemy2(), new Enemy2()];
        this.enemies = [new Enemy(), new Enemy()];
        this.coins = [new Coin(), new Coin(), new Coin()];
        this.score1 = 0;
        this.score2 = 0;
        this.textfield = document.createElement("textfield");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.textfield);
        console.log('gamescreen');
    }
    GameScreen.prototype.update = function () {
        this.character.update();
        this.character2.update();
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var e = _a[_i];
            e.update();
            if (this.checkCollision(this.character.getRectangle(), e.getRectangle())) {
                e.reset();
                console.log("player 1 lost a life!");
                this.character.lives--;
            }
            if (this.checkCollision(this.character2.getRectangle(), e.getRectangle())) {
                e.reset();
                console.log("player 2 lost a life!");
                this.character2.lives--;
            }
            if (e.getRectangle().right - e.getRectangle().width > window.innerWidth) {
                e.reset();
            }
            for (var _b = 0, _c = this.enemies2; _b < _c.length; _b++) {
                var e2 = _c[_b];
                e2.update();
                if (this.checkCollision(this.character.getRectangle(), e2.getRectangle())) {
                    e2.reset();
                    console.log("player 1 lost a life!");
                    this.character.lives--;
                }
                if (this.checkCollision(this.character2.getRectangle(), e2.getRectangle())) {
                    e2.reset();
                    console.log("player 2 lost a life!");
                    this.character2.lives--;
                }
                if (e2.getRectangle().left + e2.getRectangle().width < 0) {
                    e2.reset();
                }
                if (this.character.lives == 0 || this.character2.lives == 0) {
                    this.game.emptyScreen();
                    this.game.showScreen(new GameOver(this));
                }
                for (var _d = 0, _e = this.coins; _d < _e.length; _d++) {
                    var c = _e[_d];
                    c.update();
                    if (this.checkCollision(this.character.getRectangle(), c.getRectangle())) {
                        c.reset();
                        console.log("player 1 scored a point!");
                        this.score1 += 10;
                    }
                    if (this.checkCollision(this.character2.getRectangle(), c.getRectangle())) {
                        c.reset();
                        console.log("player 2 scored a point!");
                        this.score2 += 10;
                    }
                    if (c.getRectangle().bottom - c.getRectangle().height > window.innerHeight) {
                        c.reset();
                        this.hitCoin++;
                        console.log(this.hitCoin);
                    }
                }
                this.textfield.innerHTML = "Player 1 score:" + this.score1 + "<br> Player 1 levens:" + this.character.lives + "<br> Player 2 score:" + this.score2 + "<br> Player 2 levens:" + this.character2.lives;
            }
        }
    };
    GameScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return GameScreen;
}());
var Platform = (function () {
    function Platform(x, y) {
        this.element = document.createElement("platform");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.x = x;
        this.y = y;
    }
    Platform.prototype.update = function () {
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Platform.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Platform;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.addNumbers(2, 3);
        this.game = g;
        this.textfield = document.createElement("textfield");
        this.walls = new Array();
        var wallLocations = [
            { x: 0 },
            { x: innerWidth / 2 - 50 },
            { x: innerWidth - 100 }
        ];
        for (var _i = 0, wallLocations_1 = wallLocations; _i < wallLocations_1.length; _i++) {
            var location_1 = wallLocations_1[_i];
            this.walls.push(new Wall(location_1.x));
        }
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.textfield);
        this.textfield.addEventListener("click", function () { return _this.switchScreens(); });
        console.log('startsceen');
    }
    StartScreen.prototype.addNumbers = function (a, b) {
        console.log(a + b);
    };
    StartScreen.prototype.update = function () {
        this.textfield.innerHTML = "START THE GAME <br><br> Deze game is een game voor 2 spelers. Jullie zijn door het lot aan elkaar verbonden terwijl de geldstorm begint. Het is jullie doel om zoveel mogelijk muntjes uit de lucht te vangen en de vijanden te ontwijken. Jullie krijgen beide 5 levens maar zodra 1 van de 2 alle levens kwijt is is het game over!";
        for (var _i = 0, _a = this.walls; _i < _a.length; _i++) {
            var w = _a[_i];
            w.update();
        }
    };
    StartScreen.prototype.switchScreens = function () {
        this.game.emptyScreen();
        this.game.showScreen(new GameScreen(this.game));
    };
    return StartScreen;
}());
var Wall = (function () {
    function Wall(x) {
        this.element = document.createElement("wall");
        var foreground = document.getElementsByTagName("background")[0];
        foreground.appendChild(this.element);
        this.x = x;
        this.y = 0;
    }
    Wall.prototype.update = function () {
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Wall;
}());
//# sourceMappingURL=main.js.map