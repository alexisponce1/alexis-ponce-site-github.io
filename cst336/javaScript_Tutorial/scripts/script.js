console.log("Whoa")
// make a variable called answer with a value of 48
let answer = 48;

let guesses;

let triesLeft = 7;

const winMessage = "Congratulation you guessed it!";

//look up element with an id of guessMessage (#guessMessage)
//and bind it to a variable named guessMessage
let guessMessage = document.querySelector("#guessMessage");


//making a function sets aside the code so you can runit later
//it's a named block of code, it starts and ends with curly braces

function showWin() {

    //equals (=) change the values of the variable
    //change the text inside the element
    guessMessage.textContent = winMessage;

    //the style object in any element lets you change the CSS stuff
    //change the color of the font to green
    guessMessage.style.color = "green"
}

//a fuction name with parathesis after it
//makes the function happen immediately
showWin();

let guessButton = document.querySelector("#guessButton")
//this makes it so when you click on guess button, the function showWIn happens
guessButton.addEventListener("click", showWin);

//shortHand
guessButton.addEventListener("click",function () {
    guessMessage.textContent = winMessage;
    guessMessage.style.color = "green"

    triesLeft -= 1;
});


let guessUnput = document.querySelector("guessInput");