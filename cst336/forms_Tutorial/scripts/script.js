console.log("It's tuesday");

//making a variable for the input
let basicInput = document.querySelector("#basic-input");
//access its value property to look up what the user typed

console.log(basicInput.value);

//Numberic Input 
let numbericInput = document.querySelector("#age.input");
//still use vlaue to look up waht user typeed
//adding plus converts the input from a string to a number
console.log(+numbericInput.value);

//Drow down input
let dropDownInput = document.querySelector("car-model-input");
console.log(dropDownInput.value);

//CheckBow list input
let lettuceOption = document.querySelector("#lettuce");
let tomatoOption = document.querySelector("#tomato");

if(lettuceOption.checked && tomatoOption.checked){

}


//Radio button list
let selectedOption = document.querySelector("input[name-truth]:checked").value;
console.log(selectedOption);
