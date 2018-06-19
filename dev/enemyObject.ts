class enemyObject{
    protected element:HTMLElement
    protected speed:number


    constructor(){
        this.speed = Math.floor(Math.random() * 10) + 5
        this.element = document.createElement("enemy")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
    }
    
    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
}