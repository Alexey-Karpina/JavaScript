"use strict";
//--------------------------- 1 ----------------------

// const delay = (ms) => {
//   const promise = new Promise((resolve, reject) => {
//     if (Number(ms) !== NaN) {
//       setTimeout(() => {
//         resolve(ms);
//       }, ms);
//     } else {
//       reject(`There was not a number!!!`);
//     }
//   });
//   return promise;
// };
// const logger = (time) => console.log(`Resolved after ${time}ms`);

// delay(2000).then(logger);
// delay(1000).then(logger);
// delay(1500).then(logger);

//----------------------------- 2 --------------------

// const users = [
//     {name: "Mango", active: true},
//     {name: "Poly", active: false},
//     {name: "Ajax", active: true},
//     {name: "Lux", active: false},
// ];
// const toggleUserState = (allUsers, userName) =>{
//     const promise = new Promise((resolve, reject) => {
//         const updatedUsers = allUsers.map(user => user.name === userName ? {...user, active: !user.active} : user,);
//         resolve (updatedUsers);
//     })
//     return promise;
// };

// const logger = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);

//---------------------------- 3 -----------------------

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  const canProcess = Math.random() > 0.3;
  const promiseId = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canProcess) {
        resolve(transaction.id);
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
  const promiseTime = new Promise((resolve) => {
    if (canProcess) {
      resolve(delay);
    }
  });
  return Promise.all([promiseId, promiseTime]);
};
const logSuccess = (value) => {
  console.log(`Transaction ${value[0]} processed in ${value[1]}ms`);
};
const logError = (id) => {
  console.log(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
