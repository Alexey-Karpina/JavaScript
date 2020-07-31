import './styles.css';
import { error } from '../node_modules/@pnotify/core';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '../node_modules/@pnotify/confirm';
import '../node_modules/@pnotify/confirm/dist/PNotifyConfirm.css';
('use strict');
function errorNote(err) {
    error({
      text: `${err}`,
      delay: 2000,
    });
  }
const KEY = '17692964-f8d106e9264a402f5a3ea4398';
const URL = 'https://pixabay.com/api/?';
let page = 1;
let query = '';
const perPage = 12;

const elements = {
  form: document.querySelector('.search__form'),
  input: document.querySelector('.search__input'),
  buttonSearch: document.querySelector('search__button'),
  list: document.querySelector('.gallery__list'),
  buttonLoadMore: document.querySelector('.gallery__loadmore'),
};
elements.form.addEventListener('submit', handleFormSubmit);
async function handleFormSubmit(e) {
  e.preventDefault();
  query = isNewQuery(query);
  renderGallery(query);
  elements.form.reset();
}
const getImages = async query => {
  try {
    const url = `${URL}image_type=photo&min_height=390&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${KEY}`;
    const response = await fetch(url);
    const images = response.json();
    return images;
  } catch (error) {
      errorNote(error);
      throw error;
  }
};
async function renderGallery(query) {
  const items = await getImages(query).then(data => data.hits);
  const markup = await renderTemplate(items);
  elements.list.insertAdjacentHTML('beforeend', markup);
}
function renderTemplate(items) {
  return items.reduce(
    (markup, item) =>
      markup +
      ` <li class="gallery__item">
    <div class="photo-card">
      <img src=${item.webformatURL} alt="" class="gallery__image"/>

      <div class="stats">
        <p class="stats-item">
          <i class="material-icons">thumb_up</i>
          ${item.likes}
        </p>
        <p class="stats-item">
          <i class="material-icons">visibility</i>
          ${item.views}
        </p>
        <p class="stats-item">
          <i class="material-icons">comment</i>
          ${item.comments}
        </p>
        <p class="stats-item">
          <i class="material-icons">cloud_download</i>
          ${item.downloads}
        </p>
      </div>
    </div>
  </li>`,
    '',
  );
}
function isNewQuery(query) {
  const newQuery = elements.input.value;
  if (newQuery !== query) {
    elements.list.innerHTML = '';
    page = 1;
    return newQuery;
  }
  return query;
}
window.addEventListener('scroll', handleScroll);
function handleScroll(e) {
  e.preventDefault();
}
async function handleLoadMore() {
  page += 1;
  const endOfTheList = elements.list.lastElementChild;
  await renderGallery(query);
  endOfTheList.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
}
elements.buttonLoadMore.addEventListener('click', handleLoadMore);
