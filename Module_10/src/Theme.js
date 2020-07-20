'use strict';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.js-switch-input');
const getStartTheme = localStorage.getItem('theme');
console.log(getStartTheme);

switch (getStartTheme) {
  case Theme.DARK:
    body.classList.add(Theme.DARK);
    themeSwitcher.setAttribute('cheked', true);
    break;
  case Theme.LIGHT:
    body.classList.add(Theme.LIGHT);
    themeSwitcher.setAttribute('cheked', false);
    break;
  default:
    body.classList.add(Theme.LIGHT);
    themeSwitcher.setAttribute('cheked', false);
    break;
}
themeSwitcher.addEventListener('change', () => {
  switch (themeSwitcher.getAttribute('cheked')) {
    case 'false':
      themeSwitcher.setAttribute('cheked', true);
      body.classList.replace(Theme.LIGHT, Theme.DARK);
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.DARK);
      console.log(localStorage.getItem('theme'));
      console.log('true');
      break;
    case 'true':
      themeSwitcher.setAttribute('cheked', false);
      body.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
      console.log(localStorage.getItem('theme'));
      console.log('false');
      break;
  }
});
