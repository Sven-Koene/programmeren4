class GameOver {
    private gamescreen: GameScreen
    private textfield: HTMLElement

    constructor(g:GameScreen) {
        this.gamescreen = g
       
        this.textfield = document.createElement("textfield")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.textfield)
    }
    public update() {
        this.textfield.innerHTML = "GAME OVER, MAN!"+"<br> Player 1 score:"+this.gamescreen.score1+ "<br> Player 2 score:"+this.gamescreen.score2

    }
}