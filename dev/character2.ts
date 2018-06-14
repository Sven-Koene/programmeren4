class Character2
{
    private element:HTMLElement
    public  x:number
    public  y:number

    private leftKey:number
    private rightKey:number
    private WKey:number
        
    private leftSpeed: number = 0
    private rightSpeed: number = 0
    public speed: number = 10

    public fallSpeed:number = 10

    constructor()
    {
        this.element = document.createElement("character")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
        
    
        this.leftKey = 37
        this.rightKey = 39
        this.WKey = 38

        this.x = 1650
        this.y = innerHeight - 200
    
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    
    }
    

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = this.speed
                break
            case this.rightKey:
                this.rightSpeed= this.speed
                break
            case this.WKey:
                this.jump()
                break
             
        }
    }

    private onKeyUp(e: KeyboardEvent): void 
    {
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0
                break
            case this.rightKey:
                this.rightSpeed = 0
                break
        }
    }
    private jump(){
        this.y -= 75
        requestAnimationFrame(()=>this.jump2())
        
    }
    private jump2(){
        this.y -= 75
        requestAnimationFrame(()=>this.jump3())
        
    }
    private jump3(){
        this.y -= 75
        requestAnimationFrame(()=>this.jump4())
        
    }
    private jump4(){
        this.y -= 75       
    }

    public update() {
        if(this.y < innerHeight - 150){
        this.y += this.fallSpeed
        }

        let newX = this.x - this.leftSpeed + this.rightSpeed

        // check of de paddle binnen beeld blijft
        if (newX > 100 && newX + 66 < window.innerWidth / 2 - 50) this.x = newX
        if (newX > window.innerWidth / 2 + 50 && newX + 66 < window.innerWidth - 100) this.x = newX
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    
    }
    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

}
