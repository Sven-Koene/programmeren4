class enemyObject{
    protected element:HTMLElement
    protected speed:number


    constructor(){
        this.speed = Math.floor(Math.random() * 5) + 4
        this.element = document.createElement("enemy")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
    }
    
    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
}