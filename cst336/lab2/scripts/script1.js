
let answer = Math.floor(Math.random() * 99) + 1;
console.log(answer);

let guesses = 0;

let total;

let guessButton = document.querySelector("#guessButton");
let guessInput = document.querySelector("#guessInput");
let guessMessage = document.querySelector("#guessMessage");
let numGuesses = document.querySelector("#numGuesses");
let guessCount = document.querySelector("#guessCount");
let restButton = document.querySelector("#resetButton");
let gamesWon = document.querySelector("#gamesWon");
let gamesLost = document.querySelector("#gamesLost");
let lossCount = 0;
let winCount = 0;

restButton.style.display = "none"

const winMessage = "Congratulations you guessed it";
const lowMessage = "Too low guess again";
const highMessage = "Too high guess again";
const outOfBounds = "Number is out of bounds"
const toManyGuesses = "Ran out of guesses"



restButton.addEventListener("click", function () {
    answer = Math.floor(Math.random() * 99) + 1;

    guesses = 0;

    guessInput.value = "";

    guessMessage.textContent = "";

    numGuesses.textContent = "";

    guessCount.textContent = "Attempts: 0";

    restButton.style.display = "none"
    guessButton.style.display = "inline"

})


guessButton.addEventListener("click", function () {
    if (+guessInput.value > 99 || +guessInput.value < 1) {
        guessMessage.textContent = outOfBounds
        guessMessage.style.color = "red";

    } else if (+guessInput.value === answer) {
        guessMessage.textContent = winMessage;
        guessMessage.style.color = "green";

        winCount++;
        gamesWon.textContent = "Games Won: " + winCount;

        numGuesses.append(guessInput.value + " ")
        guesses += 1
        guessCount.textContent = "Attempts: " + guesses
        guessButton.style.display = "none"
        restButton.style.display = "inline"

    } else if (+guessInput.value < answer) {
        guessMessage.textContent = lowMessage;
        guessMessage.style.color = "red";
        numGuesses.append(guessInput.value + ", ")
        guesses += 1
        guessCount.textContent = "Attempts: " + guesses

    } else if (+guessInput.value > answer) {
        guessMessage.textContent = highMessage;
        guessMessage.style.color = "red";
        numGuesses.append(guessInput.value + ", ")
        guesses += 1
        guessCount.textContent = "Attempts: " + guesses
    }

    if (guesses >= 7 && +guessInput.value !== answer) {
        guessMessage.textContent = toManyGuesses + ", The number was " + answer;
        guessMessage.style.color = "red";

        lossCount++;
        gamesLost.textContent = "Games Lost: " + lossCount;
        guessButton.style.display = "none"
        restButton.style.display = "inline"
    }
});
