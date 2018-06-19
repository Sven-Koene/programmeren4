class CharacterObject
{
    private element:HTMLElement
    protected  x:number
    protected  y:number

    protected leftKey:number
    protected rightKey:number
    protected upKey:number
    protected downKey:number
        
    private leftSpeed: number = 0
    private rightSpeed: number = 0
    private upSpeed: number = 0
    private downSpeed: number = 0
    public speed: number = 10
    public lives:number = 5

    constructor()
    {
        this.element = document.createElement("character")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
        
    
        this.leftKey = 37
        this.rightKey = 39
        this.upKey = 38
        this.downKey = 40

        this.x = innerWidth - 100
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
                this.rightSpeed = this.speed
                break
            case this.upKey:
                this.upSpeed = this.speed
                break
            case this.downKey:
                this.downSpeed = this.speed
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
            case this.upKey:
                this.upSpeed = 0
                break
            case this.downKey:
                this.downSpeed = 0
                break
        }
    }
    
    public update() {
  
        let newX = this.x - this.leftSpeed + this.rightSpeed
        let newY = this.y - this.upSpeed + this.downSpeed
        
        if (newX > 90 && newX + 66 < window.innerWidth / 2 - 50) this.x = newX
        if (newX > window.innerWidth / 2 + 45 && newX + 66 < window.innerWidth - 95) this.x = newX
        
        if (newY > 0 && newY + 129 < window.innerHeight) this.y = newY
       
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    
    }
    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

}