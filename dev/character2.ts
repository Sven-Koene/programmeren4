/// <reference path="characterObject.ts"/>
class Character2 extends CharacterObject
{
    constructor()
    {
        super()
        this.leftKey = 37
        this.rightKey = 39
        this.upKey = 38
        this.downKey = 40

        this.x = innerWidth - 166
        this.y = innerHeight - 200
    }
}
