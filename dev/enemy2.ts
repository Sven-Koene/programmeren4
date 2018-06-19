/// <reference path="enemyObject.ts"/>

class Enemy2 extends enemyObject
{

    public x:number
    public y:number

    constructor ()
    {
        super()
       

        this.y = Math.random() * (window.innerHeight - 77)
        this.x = (window.innerWidth + 77) + (Math.random() * 450)

    }
    
    public update():void{
        this.x -= this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public reset(){
        this.y = Math.random() * (window.innerHeight - 200)
        this.x = (window.innerWidth + 77) + (Math.random() * 450)
    }
}