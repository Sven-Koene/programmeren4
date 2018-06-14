class GameScreen {

    private game:Game
    private character: Character
    private character2: Character2
    private coin: Coin
    private platforms:Array<Platform>

    //private platform:Platform

    constructor(g:Game) {
        this.game = g
        this.character = new Character()
        this.character2 = new Character2()
        this.coin = new Coin()
        this.platforms = new Array()
        let platformLocations = [
            {x: 110, y:220},
            {x: 1020, y:220},
            {x: 110, y:520},
            {x: 1020, y:520},
            {x: 559, y:370},
            {x: 1464, y:370},
            {x: 559, y:670},
            {x: 1464, y:670},
            {x: 110, y:820},
            {x: 1020, y:820},
        ]

        for(let location of platformLocations){
            this.platforms.push(new Platform(location.x, location.y))
        }
        console.log('gamescreen')
    }

    public update(): void {
        this.character.update()
        this.character2.update()
        this.coin.update()

        for(let p of this.platforms){
            if (this.checkCollision(this.character.getRectangle(), p.getRectangle())) {
                console.log("collission character 1")
            this.character.fallSpeed = 0
            }
            else{
                this.character.fallSpeed = 10
            }
                
                
            if (this.checkCollision(this.character2.getRectangle(), p.getRectangle())) {
                console.log("collission character 2") 
                this.character2.fallSpeed = 0
            }
            else{
                this.character2.fallSpeed = 10
            }
            p.update()
        }
        

        if (this.checkCollision(this.character.getRectangle(), this.coin.getRectangle())) {
            console.log("next screen")
        
            this.game.emptyScreen()
            this.game.showScreen(new GameOver())
        }
    }
        

    public checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public collisionWithPlat() : boolean {
        let falling = false
        for(let p of this.platforms){
            if(this.checkCollision(this.character.getRectangle(), p.getRectangle())){
                falling = true
                break
            }
        }
    
        return falling
    }
}