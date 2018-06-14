class Wall
{
    protected x:number
    protected y:number
    private element:HTMLElement

    constructor(x:number)
    {
        this.element = document.createElement("wall")
        let foreground = document.getElementsByTagName("background")[0]
        foreground.appendChild(this.element)

        this.x = x       
        this.y = 0

    }
    
    public update(){
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}