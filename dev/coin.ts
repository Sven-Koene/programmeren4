class Coin
{
    private element:HTMLElement
    private speed:number
    public x:number
    public y:number

    constructor()
    {
        this.element = document.createElement("coin")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
        this.speed = Math.floor(Math.random() * 7) + 3
        this.x = Math.random() * (window.innerWidth - 77)
        this.y = -77 - (Math.random() * 450)

    }
    
    public update():void{
        this.y += this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
    public reset(){
        this.x = Math.random() * (window.innerWidth - 200)
        this.y = -400 - (Math.random() * 450) 
    }
}
