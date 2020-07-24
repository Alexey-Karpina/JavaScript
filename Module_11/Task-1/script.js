"use strict";
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const body = document.querySelector("body");
const startBtn = document.querySelector(`button[data-action = "start"]`);
const stopBtn = document.querySelector(`button[data-action = "stop"]`);
let timerId = null;
let isActive = false;
let colorIdx = 0;
startBtn.addEventListener("click", () => {
  if (isActive) return;
  isActive = true;
  timerId = setInterval(() => {
    colorIdx = randomIntegerFromInterval(0, colors.length);
    body.style.backgroundColor = colors[colorIdx];
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  if (!isActive) return;
  colorIdx = 0;
  isActive = false;
  body.style.backgroundColor = "#ffffff";
  clearInterval(timerId);
});
