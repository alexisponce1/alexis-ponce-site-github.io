
let answer = 28;

let guesses = 0;

let total;

let guessButton = document.querySelector("#guessButton");
let guessInput = document.querySelector("#guessInput");
let guessMessage = document.querySelector("#guessMessage");
let numGuesses = document.querySelector("#numGuesses");
let guessCount = document.querySelector("#guessCount");

const winMessage = "Congratulations you guessed it";
const lowMessage = "To low guess again";
const highMessage = "To high guess again";
const outOfBounds = "Please Enter new number"
const toManyGuesses = "Ran out of guesses"


guessButton.addEventListener("click", function () {
    if (guesses >= 7) {
        guessMessage.textContent = toManyGuesses;
    }
    else if (+guessInput.value > 99 || +guessInput.value < 1) {
        guessMessage.textContent = outOfBounds
        guessMessage.style.color = "red";

    } else if (+guessInput.value === answer) {
        guessMessage.textContent = winMessage;
        guessMessage.style.color = "green";
        numGuesses.append(guessInput.value + " ")
        guesses += 1
        guessCount.append("Attempts: " + guesses)
        
    } else if (+guessInput.value <= answer) {
        guessMessage.textContent = lowMessage;
        guessMessage.style.color = "red";
        numGuesses.append(guessInput.value + ", ")
        guesses += 1
        
    } else if (+guessInput.value >= answer) {
        guessMessage.textContent = highMessage;
        guessMessage.style.color = "red";
        numGuesses.append(guessInput.value + ", ")
        guesses += 1
        
    }
});
