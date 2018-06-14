"use strict";
var Character = (function () {
    function Character() {
        var _this = this;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.speed = 10;
        this.fallSpeed = 10;
        this.element = document.createElement("character");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.leftKey = 65;
        this.rightKey = 68;
        this.WKey = 87;
        this.x = 750;
        this.y = innerHeight - 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Character.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = this.speed;
                break;
            case this.rightKey:
                this.rightSpeed = this.speed;
                break;
            case this.WKey:
                this.jump();
                break;
        }
    };
    Character.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
        }
    };
    Character.prototype.jump = function () {
        var _this = this;
        this.y -= 75;
        requestAnimationFrame(function () { return _this.jump2(); });
    };
    Character.prototype.jump2 = function () {
        var _this = this;
        this.y -= 75;
        requestAnimationFrame(function () { return _this.jump3(); });
    };
    Character.prototype.jump3 = function () {
        var _this = this;
        this.y -= 75;
        requestAnimationFrame(function () { return _this.jump4(); });
    };
    Character.prototype.jump4 = function () {
        this.y -= 75;
    };
    Character.prototype.update = function () {
        if (this.y < innerHeight - 150) {
            this.y += this.fallSpeed;
        }
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newX > 100 && newX + 66 < window.innerWidth / 2 - 50)
            this.x = newX;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Character.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Character;
}());
var Character2 = (function () {
    function Character2() {
        var _this = this;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.speed = 10;
        this.fallSpeed = 10;
        this.element = document.createElement("character");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.leftKey = 37;
        this.rightKey = 39;
        this.WKey = 38;
        this.x = 1650;
        this.y = innerHeight - 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Character2.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = this.speed;
                break;
            case this.rightKey:
                this.rightSpeed = this.speed;
                break;
            case this.WKey:
                this.jump();
                break;
        }
    };
    Character2.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
        }
    };
    Character2.prototype.jump = function () {
        var _this = this;
        this.y -= 75;
        requestAnimationFrame(function () { return _this.jump2(); });
    };
    Character2.prototype.jump2 = function () {
        var _this = this;
        this.y -= 75;
        requestAnimationFrame(function () { return _this.jump3(); });
    };
    Character2.prototype.jump3 = function () {
        var _this = this;
        this.y -= 75;
        requestAnimationFrame(function () { return _this.jump4(); });
    };
    Character2.prototype.jump4 = function () {
        this.y -= 75;
    };
    Character2.prototype.update = function () {
        if (this.y < innerHeight - 150) {
            this.y += this.fallSpeed;
        }
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        if (newX > 100 && newX + 66 < window.innerWidth / 2 - 50)
            this.x = newX;
        if (newX > window.innerWidth / 2 + 50 && newX + 66 < window.innerWidth - 100)
            this.x = newX;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Character2.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Character2;
}());
var Coin = (function () {
    function Coin() {
        this.element = document.createElement("coin");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.x = 500;
        this.y = 100;
    }
    Coin.prototype.update = function () {
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Coin.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Coin;
}());
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
    function GameOver() {
        this.textfield = document.createElement("textfield");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.textfield);
    }
    GameOver.prototype.update = function () {
        this.textfield.innerHTML = "GAME OVER, MAN!";
    };
    return GameOver;
}());
var GameScreen = (function () {
    function GameScreen(g) {
        this.game = g;
        this.character = new Character();
        this.character2 = new Character2();
        this.coin = new Coin();
        this.platforms = new Array();
        var platformLocations = [
            { x: 110, y: 220 },
            { x: 1020, y: 220 },
            { x: 110, y: 520 },
            { x: 1020, y: 520 },
            { x: 559, y: 370 },
            { x: 1464, y: 370 },
            { x: 559, y: 670 },
            { x: 1464, y: 670 },
            { x: 110, y: 820 },
            { x: 1020, y: 820 },
        ];
        for (var _i = 0, platformLocations_1 = platformLocations; _i < platformLocations_1.length; _i++) {
            var location_1 = platformLocations_1[_i];
            this.platforms.push(new Platform(location_1.x, location_1.y));
        }
        console.log('gamescreen');
    }
    GameScreen.prototype.update = function () {
        this.character.update();
        this.character2.update();
        this.coin.update();
        for (var _i = 0, _a = this.platforms; _i < _a.length; _i++) {
            var p = _a[_i];
            if (this.checkCollision(this.character.getRectangle(), p.getRectangle())) {
                console.log("collission character 1");
                this.character.fallSpeed = 0;
            }
            else {
                this.character.fallSpeed = 10;
            }
            if (this.checkCollision(this.character2.getRectangle(), p.getRectangle())) {
                console.log("collission character 2");
                this.character2.fallSpeed = 0;
            }
            else {
                this.character2.fallSpeed = 10;
            }
            p.update();
        }
        if (this.checkCollision(this.character.getRectangle(), this.coin.getRectangle())) {
            console.log("next screen");
            this.game.emptyScreen();
            this.game.showScreen(new GameOver());
        }
    };
    GameScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    GameScreen.prototype.collisionWithPlat = function () {
        var falling = false;
        for (var _i = 0, _a = this.platforms; _i < _a.length; _i++) {
            var p = _a[_i];
            if (this.checkCollision(this.character.getRectangle(), p.getRectangle())) {
                falling = true;
                break;
            }
        }
        return falling;
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
            { x: innerWidth - 105 }
        ];
        for (var _i = 0, wallLocations_1 = wallLocations; _i < wallLocations_1.length; _i++) {
            var location_2 = wallLocations_1[_i];
            this.walls.push(new Wall(location_2.x));
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
        this.textfield.innerHTML = "START THE GAME";
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