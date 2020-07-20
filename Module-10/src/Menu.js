'use strict';
const menuData = require('./menu.json');
const source = document.querySelector('#menu-template').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(menuData);
const container = document.querySelector('.js-menu');
container.innerHTML = markup;
