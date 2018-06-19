/// <reference path="characterObject.ts"/>
class Character extends CharacterObject
{
    constructor()
    {
        super()
        this.leftKey = 65
        this.rightKey = 68
        this.upKey = 87
        this.downKey = 83

        this.x = 100
        this.y = innerHeight - 200
    }
}
