"use strict";
const findBestEmployee = (employees) => {
  const employee = Object.keys(employees);
  let best = employee[0];
  for (let item of employee) {
    if (employees[item] > employees[best]) {
      best = item;
    }
  }
  return best;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 45,
  })
); // ajax

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
