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

const cardContainer = document.querySelector('.container__card');

const createTemplate = function (tempName, val) {
  const source = document
    .querySelector(`#${tempName}__template`)
    .innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = template(val);
  cardContainer.innerHTML = markup;
};

const createList = function (val) {
  const List = {
    names: val.map(val => val.name),
  };
  createTemplate('list', List);
};

const createCard = function (val) {
  const country = val[0];
  const Card = {
    name: country.name,
    capital: country.capital,
    population: country.population,
    languages: country.languages.map(lang => lang.name),
    flag: country.flag,
  };
  createTemplate('card', Card);
};

const fetching = function (val) {
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

      console.log(data);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
};

const onInput = function () {
  fetching(input.value);
};

const debounced = _.debounce(onInput, 500);

input.addEventListener('input', debounced);
