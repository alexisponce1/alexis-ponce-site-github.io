document.querySelector("button").addEventListener("click", gradeQuiz);

const correctMessage = "Correct";
const incorrectMessage = "Incorrect";

let q1Message = document.querySelector("#q1Message");
let q2Message = document.querySelector("#q2Message");
let q3Message = document.querySelector("#q3Message");
let q4Message = document.querySelector("#q4Message");
let q5Message = document.querySelector("#q5Message");

let attempts = localStorage.getItem("attempts");

if (attempts == null) {
    attempts = 0;
}

document.querySelector("#attempts").textContent = "Attempts: " + attempts;



function gradeQuiz() {
    let score = 0;

    let q1Answer = "Otter";
    let userAnswerQ1 = document.querySelector("input[name=q1]:checked").value;
    let q1Image = document.querySelector("#q1Image");

    let q2Answer = "peregrine falcon";
    let userAnswerQ2 = document.querySelector("#q2").value;
    let q2Image = document.querySelector("#q2Image");

    let q3Answer = "Monterey";
    let userAnswerQ3 = document.querySelector("#CSUMB_Locations").value;
    let q3Image = document.querySelector("#q3Image");

    let q4Answer = "250";
    let userAnswerQ4 = document.querySelector("#US_age").value;
    let q4Image = document.querySelector("#q4Image");

    let userAnswerQ5_1 = document.querySelector("#Mars").checked;
    let userAnswerQ5_2 = document.querySelector("#Earth").checked;
    let userAnswerQ5_3 = document.querySelector("#Venus").checked;
    let userAnswerQ5_4 = document.querySelector("#Jupiter").checked;
    let q5Image = document.querySelector("#q5Image");

    if (q1Answer == userAnswerQ1) {
        q1Message.textContent = correctMessage;
        q1Image.src = "./images/checkMark.jpg";
        q1Image.style.display = "inline"
        score += 20;
    } else {
        q1Message.textContent = incorrectMessage;
        q1Image.src = "./images/xMark.jpeg";
        q1Image.style.display = "inline"
    }


    if (q2Answer == userAnswerQ2) {
        q2Message.textContent = correctMessage;
        q2Image.src = "./images/checkMark.jpg";
        q2Image.style.display = "inline"
        score += 20;
    } else {
        q2Message.textContent = incorrectMessage;
        q2Image.src = "./images/xMark.jpeg";
        q2Image.style.display = "inline"
    }

    if (q3Answer == userAnswerQ3) {
        q3Message.textContent = correctMessage;
        q3Image.src = "./images/checkMark.jpg";
        q3Image.style.display = "inline"
        score += 20;
    } else {
        q3Message.textContent = incorrectMessage;
        q3Image.src = "./images/xMark.jpeg";
        q3Image.style.display = "inline"
    }

    if (q4Answer == userAnswerQ4) {
        q4Message.textContent = correctMessage;
        q4Image.src = "./images/checkMark.jpg";
        q4Image.style.display = "inline"
        score += 20;
    } else {
        q4Message.textContent = incorrectMessage;
        q4Image.src = "./images/xMark.jpeg";
        q4Image.style.display = "inline"
    }

    if (userAnswerQ5_1 == true && userAnswerQ5_2 == true && userAnswerQ5_3 == true && userAnswerQ5_4 == true) {
        q5Message.textContent = correctMessage;
        q5Image.src = "./images/checkMark.jpg";
        q5Image.style.display = "inline"
        score += 20;
    } else {
        q5Message.textContent = incorrectMessage;
        q5Image.src = "./images/xMark.jpeg";
        q5Image.style.display = "inline"
    }


    if (score > 80) {
        let congratulationsMessage = document.querySelector("#congratulations");
        congratulationsMessage.textContent = "Congratulations!!"
    }

    let scoreMessage = document.querySelector("#score");
    scoreMessage.textContent = "Score: " + score;

    attempts++;
    localStorage.setItem("attempts", attempts);
    document.querySelector("#attempts").textContent = "Attempts: " + attempts;
}




shuffleQ1();
function shuffleQ1() {

    let q1Choices = ["Otter", "Lion", "Tiger", "Dog"];
    q1Choices = shuffleArray(q1Choices);
    console.log(q1Choices);

    for (let i of q1Choices) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;

        labelElement.prepend(inputElement);

        document.querySelector("#q1Choices").append(labelElement);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
