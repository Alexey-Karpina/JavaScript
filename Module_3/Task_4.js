"use strict";
const countTotalSalary = (employees) => {
  const listOfEmployees = Object.keys(employees);
  let total = 0;
  for (let item of listOfEmployees) {
    total += employees[item];
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
