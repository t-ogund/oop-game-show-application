/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 const overlay = document.querySelector("#overlay");
 const qwertyGame = document.querySelector("#qwerty");
 const gameOverMessage = document.querySelector("#game-over-message");
 const start = document.querySelector(".start");


 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [
                            new Phrase("Minnesota Timberwolves"),
                            new Phrase("Karl Anthony Towns"),
                            new Phrase("Basketball"),
                            new Phrase("Crunch"),
                            new Phrase("Minneapolis")
                        ];
         this.activePhrase = null
     }

    // Starts game by a random phrase being displayed
     startGame() {
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
     }

    // Selects a random phrase from the array of phrases
     getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * 5);
        let randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
     }

     // Checks if all the letters in the phrase have been displayed
     checkForWin() {
        let hiddenLetters = document.querySelectorAll(".hide");
         if (hiddenLetters.length === 0) {
             return true
         }
         return false
     }

    // Removes a life if a guessed letter is not in the phrase and ends the game after 5 incorrect guesses
     removeLife(letterGame) {
        this.missed += 1
        const img = document.querySelectorAll("img");
        if (game.getRandomPhrase().phrase.includes(letterGame) === false) {
            img[this.missed - 1].src = `images/lostHeart.png`;
        }
        if (this.missed === 5) {
            this.gameOver(true);
        }
     }

    // Ends the game. If player has guess the phrase, winning message is display.
    // If player has run out of lives, losing message is displayed
     gameOver(gameWon) {
         gameWon = null;
         let gameBoard = document.querySelectorAll("ul > li")
         for (let i = 0; i < gameBoard.length; i++) {
            if (!gameBoard[i].classList.contains("hide") && this.missed < 5) {
                gameWon = true
                overlay.style.display = "flex";
                overlay.classList.remove("lose");
                start.classList.remove("start");
                start.classList.add("win");
                gameOverMessage.textContent = "You win! Nice Job! :)"
             } else {
                gameWon = false
                overlay.style.display = "flex";
                overlay.classList.remove("win");
                start.classList.remove("start");
                start.classList.add("lose");
                gameOverMessage.textContent = "Better Luck Next Time :(";
             }
             this.reset();
         }
     }

    // Resets the game board
     reset() {
         this.missed = 0;
         ul.innerHTML = "";
        const key = document.querySelectorAll(".key");
        const tries = document.querySelectorAll(".tries");

        for (let i = 0; i < key.length; i++) {
            if (key[i].disabled === true) {
                key[i].disabled = false;
            }
            if (key[i].classList.contains("chosen") === true) {
                key[i].classList.remove("chosen")
            }
            if (key[i].classList.contains("wrong") === true) {
                key[i].classList.remove("wrong")
            }
        }

        for (let i = 0; i < tries.length; i++) {
            tries[i].firstElementChild.src = `images/liveHeart.png`
        }
     }

    // Handles the main logic of the game
     handleInteraction(e) {
        e.target.disabled = true;
       if (game.activePhrase.checkLetter(e.target.textContent) === false) {
           e.target.classList.add("wrong");
           this.removeLife();
       } else {
            e.target.classList.add("chosen");
            game.activePhrase.showMatchedLetter(e.target.textContent);
            this.checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver();
                this.reset();
            }
       }
     }
 }
 