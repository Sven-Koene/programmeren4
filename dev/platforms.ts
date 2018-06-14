class Platform
{
    private element:HTMLElement
    public x:number
    public y:number
    
    
    constructor(x:number, y:number)
    {
        this.element = document.createElement("platform")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)

        this.x = x
        this.y = y

    }
    
    public update(){
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
}
