"use strict";
const spamWord = "spam";
const saleWord = "sale";
const checkForSpam = function (message) {
  if (message.toLowerCase().includes(spamWord)) {
    return true;
  }
  if (message.toLowerCase().includes(saleWord)) {
    return true;
  }
  return false;
};
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
