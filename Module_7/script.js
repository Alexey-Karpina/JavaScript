"use strict";

//--------------- 1 -------------

// const categories = document.querySelector("#categories");
// const itemCount = categories.children.length;
// console.log(`In this list ${itemCount} categories`);

// const items = document.querySelectorAll(".item");
// console.log(items);
// for (let i = 0; i < items.length; i += 1) {
//   console.log(`Category: ${items[i].firstElementChild.textContent}\n
// Nubers of elements: ${items[i].querySelectorAll("ul > li").length}`);
// }

//---------------- 2 --------------------

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
// ];

// const catList = document.querySelector("#ingredients");
// console.log(catList);
// const container = document.createElement("div");
// console.log(container);
// for(let i = 0; i < ingredients.length; i+=1){
//     const item = document.createElement("li");
//     item.textContent = `${ingredients[i]}`;
//     container.append(item);
// }
// catList.appendChild(container);

//---------------------- 3 ------------------

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryList = document.querySelector("#gallery");
// const container = document.createElement("div");
// for (let i = 0; i < images.length; i += 1) {
//   container.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src="${images[i].url} alt="${images[i].alt}" class="image" ></li>`
//   );
// }
// galleryList.insertAdjacentElement("beforeend", container);
// const image = document.querySelectorAll(".image");
// console.log(image);
// for (let i = 0; i < image.length; i += 1) {
//   image[i].style.width = "300px";
//   image[i].style.height = "100%";
// }
// galleryList.style.listStyle = "none";
// container.style.display = "flex";
// container.style.justifyContent = "space-between";

//----------------- 4 --------------------

// let counterValue = +document.querySelector("#value").textContent;
// const counter = document.querySelector("#value");
// const increment = () => {
//   counterValue += 1;
//   counter.textContent = `${counterValue}`;
// };
// const decrement = () => {
//   counterValue -= 1;
//   counter.textContent = `${counterValue}`;
// };
// const container = document.querySelector("#counter");
// const Style = (block) => {
//   block.style.backgroundColor = "teal";
//   block.style.width = "150px";
//   block.style.height = "50px";
//   block.style.display = "flex";
//   block.style.justifyContent = "space-between";
//   block.style.alignItems = "center";
// };
// Style(container);
// const incButt = document.querySelector(
//   '#counter button[data-action="increment"]'
// );
// const decButt = document.querySelector(
//   '#counter button[data-action="decrement"]'
// );

// incButt.addEventListener("click", increment);
// decButt.addEventListener("click", decrement);

//----------------------- 5 -------------------

// const input = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// const unknown = document.querySelector("#name-output").textContent;
// function onInput() {
//   if (input.value.length !== 0) {
//     nameOutput.innerHTML = input.value;
//   } else {
//     nameOutput.innerHTML = unknown;
//   }
// }
// input.addEventListener("input", onInput);

//-------------------------- 6 ------------------------

// const input = document.querySelector("#validation-input");
// console.log(input);
// input.addEventListener("blur", () => {
//   if (input.value.length > +input.getAttribute("data-length")) {
//     input.classList.add("invalid");
//     return;
//   }
//   input.classList.add("valid");
//   return;
// });
// input.addEventListener("focus", () => {
//   input.classList.remove("valid", "invalid");
// });

//----------------------- 7 -----------------------

// const input = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");
// input.setAttribute("min", 10);
// input.setAttribute("max", 100);
// input.setAttribute("step", 10);
// input.setAttribute("value", 20);
// text.style.fontSize = `${input.getAttribute("value")}px`;
// input.addEventListener("input", () => {
//   text.style.fontSize = `${input.value}px`;
// });

//------------------------ 8 ---------------------------

const input = document.querySelector("#controls input");
const rndrButt = document.querySelector(
  `#controls button[data-action="render"]`
);
const dstrButt = document.querySelector(
  `#controls button[data-action="destroy"]`
);
const box = document.querySelector("#boxes");
let boxSize = 30;
const randColor = () => {
  let color = Math.floor(Math.random() * 16777216).toString(16);
  return "#000000".slice(0, -color.length) + color;
};
const createBoxes = (amount) => {
    const container = document.createElement("div");
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
    item.style.width = `${boxSize}px`;
    item.style.height = `${boxSize}px`;
    item.style.backgroundColor = `${randColor()}`;
    container.append(item);
    boxSize += 10;
  }
  box.appendChild(container);

};

rndrButt.addEventListener("click", () => {
    createBoxes(input.value);
});
dstrButt.addEventListener("click", () => {
    const removeBox = document.querySelectorAll("#boxes > div");
    boxSize = 30;
    input.value = 0;
    box.removeChild(removeBox);
});
