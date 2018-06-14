class Character
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
    //private falling:boolean = true


    constructor(){
        
        this.element = document.createElement("character")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element)
        
    
        this.leftKey = 65
        this.rightKey = 68
        this.WKey = 87

        this.x = 750
        this.y = innerHeight - 200

        // this.fallSpeed = (this.falling) ? 10 : 0

        // let hitsFloor = (this.y > 720 - 200)
        // let hitsPlat = this.gamescreen.collisionWithPlat()

        // if(hitsFloor || hitsPlat){
        //     this.falling = false
        // } else {
        //     this.falling = true
        // }
    
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
                // if(this.falling == false){
                    this.jump()
                //}    
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

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    
    }
    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

}
