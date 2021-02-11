/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

// Creates new instance of game class and starts the game
const startGameButton = document.querySelector("#btn__reset");
startGameButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})

// Listens for clicks to determine what letter was guessed
const qwerty = document.querySelector("#qwerty");
qwerty.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const letter = e.target.textContent;
        game.handleInteraction(e);
    }
})