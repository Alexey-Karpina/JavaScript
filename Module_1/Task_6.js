"use strict";
let input;
let total = 0;
do {
  input = prompt(`Enter the number`);
  if (input != Number(input) && input !== null) {
    alert(`No number was entered, try again`);
    continue;
  } else if (input !== null) {
    total += Number(input);
  }
} while (input !== null);
alert(`The total sum of numbers is ${total}`);
