"use strict";
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scaner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Zahvat", price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  const values = [];
  for (let item of arr) {
    if (!item[prop]) {
      // Вообще я бы просто ретурном вышел с функции, но сделал так что бы было как в задании
      continue;
    }
    values.push(item[prop]);
  }
  return values;
};
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
