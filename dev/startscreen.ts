class StartScreen {

    private textfield: HTMLElement
    private game : Game
    private walls:Array<Wall>
    private addNumbers(a:number, b:number){
        console.log( a + b )
    }

    constructor(g:Game) {
        this.addNumbers(2,3)

        this.game = g
        this.textfield = document.createElement("textfield")
        this.walls = new Array()
        let wallLocations = [
            {x:0},
            {x:innerWidth/2 - 50},
            {x:innerWidth - 100}
        ]

        for(let location of wallLocations){
            this.walls.push(new Wall(location.x))
        }
    
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.textfield)
        this.textfield.addEventListener("click", ()=> this.switchScreens())
        console.log('startsceen')
       
        }
    

    public update() {
        this.textfield.innerHTML = "START THE GAME <br><br> Deze game is een game voor 2 spelers. Jullie zijn door het lot aan elkaar verbonden terwijl de geldstorm begint. Het is jullie doel om zoveel mogelijk muntjes uit de lucht te vangen en de vijanden te ontwijken. Jullie krijgen beide 5 levens maar zodra 1 van de 2 alle levens kwijt is is het game over!"
        
        for(let w of this.walls){
            w.update()
        }
    }

    private switchScreens(){
        this.game.emptyScreen()
        this.game.showScreen(new GameScreen(this.game))
    }
}