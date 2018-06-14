class Coin
{
    private element:HTMLElement
    public x:number
    public y:number
    
    constructor()
    {
        this.element = document.createElement("coin")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)

        this.x = 500
        this.y = 100

    }
    
    public update(){
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
}
