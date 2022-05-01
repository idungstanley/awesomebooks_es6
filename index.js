import UI from './module/UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementsByTagName('form')[0];
  const navList = document.querySelector('.list-container');
  navList.addEventListener('click', (e) => UI.showSection(e));
  form.addEventListener('submit', UI.newBook);
  UI.currentDate();
  UI.renderBooks();
});