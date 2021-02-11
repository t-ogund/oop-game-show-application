/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const alphabet = ["a", "b", "c", "d", "e", "f", 
                "g", "h", "i", "j", "k", "l", 
                "m", "n", "o", "p", "q", "r", 
                "s", "t", "u", "v", "w", "x", 
                "y", "z"];

const ul = document.querySelector("ul");
const boardLetters = document.getElementsByClassName("letter");

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     // Adds selected phrase to the display
     addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            const character = document.createElement("li");
            character.textContent = this.phrase[i].toLowerCase();
            if (alphabet.includes(character.textContent) === true) {
                character.classList.add("hide", "letter", character.textContent);
            } else {
                character.classList.add("space");
            }
            ul.appendChild(character);
        }
     }

     // Checks if the selected letter is in the phrase
     checkLetter(letter) {
        if (this.phrase.includes(letter) === true) {
            return true
        } return false
     }

     // Reveals the letter
     showMatchedLetter(letter) {
        for (let i = 0; i < boardLetters.length; i++) {
            if (boardLetters[i].classList.contains(letter)) {
                boardLetters[i].classList.remove("hide");
                boardLetters[i].classList.add("show");
            } 
        } 
     }
 }
