"use strict";
const findLongestWord = function (string) {
  string = string.split(" ");
  let longestWord = string[0];
  for (let item of string) {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }
  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'