//empty array named colors 
let colors = [];

console.log(colors.length);

let toppings = ['lettuce', 'tomato', 'chesse'];

//adding to an array (basic)
//pushing adds to end of the array
colors.push('red');
colors.push('green');

// looking up vlaue in array 
colors[0];
colors[1];

//querySelectorAll lets you group html elements into an array
let toppingsInputs = document.querySelectorAll("input[name=toppings]");
let buttons = document.querySelectorAll(".confirm-btn");

for (let color of colors){
    console.log(color);
}


let ages = [50, 40, 20, 25, 80];
let average = 0;

for (let age of ages){
    average += age;
}

average = average/ages.length;
console.log(average);



let checkboxs = document.querySelectorAll("input[name=toppings]");
let totalChecked = 0;

for (let checkbox of checkboxs){
    if (checkboxs.checked){
        totalChecked++;
    }
}

let newParagraph = document.createElement("p");


newParagraph.textContent = "I have been created";
newParagraph.id = "dynamic-paragraph"

let insertArea = document.querySelector('#insert-area');
insertArea.appendChild(newParagraph);


let names = ['mario', 'luma', 'rosalina', 'yoshi'];

for (let name of names){
    let paragraph = document.createElement("p");
    paragraph.textContent = name;
    insertArea.appendChild(paragraph);
}

let nameDropdown = document.querySelector("#names-dropdown");
for (let name of names){
    let nameItem = document.createElement("option");
    nameItem.textContent = name;
    nameItem.value = name;
    nameDropdown.appendChild(nameItem);
}

let limit = 20;


//"async" is like a stamp that lets the OS knowthat this function could take
// an unknown amount of time to finish
async function getCats(){
    let catsResult = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    console.log(catsResult);

    let catsData = await catsResult.json();
    console.log(catsData);
}

getCats();

