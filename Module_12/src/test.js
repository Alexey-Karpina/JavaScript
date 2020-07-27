'use strict';
import { error } from '../node_modules/@pnotify/core';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '../node_modules/@pnotify/confirm';
import '../node_modules/@pnotify/confirm/dist/PNotifyConfirm.css';
function click() {
  error({
    text: 'Too many matches found. Please enter a more specific query',
    delay: 1000,
  });
}
const input = document.querySelector('#input');
let cardContainer = document.querySelector('.container__card');

function createTemplate(tempName, val) {
  const source = document
    .querySelector(`#${tempName}__template`)
    .innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = template(val);
  cardContainer.innerHTML = markup;
}
function createList(val) {
  const List = {
    names: val.map(val => val.name),
  };
  cardContainer.innerHTML = `<template id="list__template">
  <ul class="name__list">
    {{#each names}}
      <li class="name__item">{{this}}</li>
    {{/each}}
  </ul>
</template>`;
  createTemplate('list', List);
}

function createCard(val) {
  const country = val[0];
  const Card = {
    name: country.name,
    capital: country.capital,
    population: country.population,
    languages: country.languages.map(lang => lang.name),
    flag: country.flag,
  };
  cardContainer.innerHTML = `<template id="card__template">
  <div class="country__info">
    <h2 class="country__name">{{name}}</h2>
    <ul class="country__list">
      <li class="country__item">
        <span class="text-bold">Capital: </span>{{capital}}
      </li>
      <li class="country__item">
        <span class="text-bold">Population: </span>{{population}}
      </li>
      <li class="country__item">
        <ul class="country__languages">
          <span class="text-bold">Languages:</span>
          {{#each languages}}
          <li class="languages__item">-{{this}}</li>
          {{/each}}
        </ul>
      </li>
    </ul>
    <div class="country__img">
      <img src="{{flag}}" alt="" />
    </div>
  </div>
</template>`;
  createTemplate('card', Card);
}
function fetching(val) {
  if (val.length === 0) return;
  const url = 'https://restcountries.eu/rest/v2/name/';
  fetch(`${url}${val}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      if (data.length > 10) {
        click();
        return;
      }
      if (data.length > 2 && data.length < 10) {
        createList(data);
        return;
      }
      if (data.length === 1) {
        createCard(data);
        return;
      }
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
}
function onInput() {
  fetching(input.value);
}

const debounced = _.debounce(onInput, 500);

input.addEventListener('input', debounced);
