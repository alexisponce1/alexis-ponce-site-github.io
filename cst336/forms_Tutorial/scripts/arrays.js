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

