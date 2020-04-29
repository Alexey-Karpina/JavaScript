"use strict";
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt(`Enter the number`);
  if (input === null) {
    break;
  }
  if (input == Number(input)) {
    numbers.push(input);
  }
  if (input != Number(input)) {
    alert(`It was not a number, try again`);
  }
}
if (numbers.length > 0){
    for (let item of numbers) {
        total += item.pop();
    }
} else {
    console.log(`Your array is empty`);
}
