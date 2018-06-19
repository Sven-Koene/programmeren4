class GameScreen {

    private textfield:HTMLElement
    private game:Game
    private character: Character
    private character2: Character2
    private coins: Coin[]
    private hitCoin:number = 0
    private enemies: Enemy[]
    private enemies2: Enemy2[]
    public score1:number
    public score2:number

    constructor(g:Game) {
        this.game = g
        this.character = new Character()
        this.character2 = new Character2()
        this.enemies2 = [new Enemy2(), new Enemy2()]
        this.enemies = [new Enemy(), new Enemy()]
        this.coins = [new Coin(), new Coin(), new Coin()]
        this.score1 = 0
        this.score2 = 0 
        this.textfield = document.createElement("textfield")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.textfield)
       
        console.log('gamescreen')
    }

    public update(): void 
    {
        this.character.update()
        this.character2.update()

        for(let e of this.enemies)
        {
            e.update()
            if (this.checkCollision(this.character.getRectangle(), e.getRectangle())) {
                e.reset()
                console.log("player 1 lost a life!")
                this.character.lives--
            }
            if (this.checkCollision(this.character2.getRectangle(), e.getRectangle())) {
                e.reset()
                console.log("player 2 lost a life!")
                this.character2.lives--
            }
            if (e.getRectangle().right - e.getRectangle().width > window.innerWidth) {
                e.reset()
        }

        for(let e2 of this.enemies2)
        {
            e2.update()
            if (this.checkCollision(this.character.getRectangle(), e2.getRectangle())) {
                e2.reset()
                console.log("player 1 lost a life!")
                this.character.lives--
            }
            if (this.checkCollision(this.character2.getRectangle(), e2.getRectangle())) {
                e2.reset()
                console.log("player 2 lost a life!")
                this.character2.lives--
            }
            if (e2.getRectangle().left + e2.getRectangle().width < 0) {
                e2.reset()
        }

            if (this.character.lives == 0 || this.character2.lives == 0){          
                this.game.emptyScreen()
                this.game.showScreen(new GameOver(this))
            }
           
        
        for (let c of this.coins) 
        {
            c.update()

            if (this.checkCollision(this.character.getRectangle(), c.getRectangle())) {
                c.reset()
                console.log("player 1 scored a point!")
                this.score1 += 10
            }
            if (this.checkCollision(this.character2.getRectangle(), c.getRectangle())) {
                c.reset()
                console.log("player 2 scored a point!")
                this.score2 += 10
            }

            if (c.getRectangle().bottom - c.getRectangle().height > window.innerHeight) {
                c.reset()
                this.hitCoin++
                console.log(this.hitCoin)
                // if(this.hitCoin > 20)
                // {
                //     this.game.emptyScreen()
                //     this.game.showScreen(new GameOver())
                // }
            }
        }
        
        this.textfield.innerHTML = "Player 1 score:"+this.score1+"<br> Player 1 levens:"+this.character.lives+ "<br> Player 2 score:"+this.score2+"<br> Player 2 levens:"+this.character2.lives
    }
        }}
    public checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}