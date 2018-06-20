/// <reference path="enemyObject.ts"/>

class Enemy2 extends enemyObject
{

    private x:number
    private y:number

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
        this.y = Math.random() * (window.innerHeight - 100)
        this.x = (window.innerWidth + 77) + (Math.random() * 450)
    }
}