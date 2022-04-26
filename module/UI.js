import { DateTime } from './luxon.js';
import Store from './store.js';
import Book from './book.js';

const list = document.querySelector('.book-list');
const addNew = document.querySelector('.book-form');
const contact = document.querySelector('.contact');
const date = document.querySelector('.date');
const bookContainer = document.querySelector('.book-container');
const author = document.querySelector('#author');
const title = document.querySelector('#title');

export default class UI {
  static createBook = (book) => {
    const bookList = document.createElement('li');
    bookList.classList.add('li');
    bookList.innerHTML = `<p class="title">"${book.title}" by ${book.author}</p>
    <button id=${book.id} class="delete">Remove</button>`;
    bookContainer.appendChild(bookList);
    const deleteBtn = bookList.querySelector('button');
    deleteBtn.onclick = UI.deleteBook;
  }

  static deleteBook = (event) => {
    const books = Store.getStorage();
    let found = null;
    books.forEach((book) => {
      if (event.target.id === book.id) {
        event.target.parentElement.remove();
        found = book;
      }
    });
    if (found != null) {
      books.splice(books.indexOf(found), 1);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static clearField = () => {
    title.value = '';
    author.value = '';
  }

  static showSection = (e) => {
    if (e.target.classList.contains('list')) {
      list.classList.add('active');
      contact.classList.remove('active');
      addNew.classList.remove('active');
    } else if (e.target.classList.contains('new')) {
      addNew.classList.add('active');
      list.classList.remove('active');
      contact.classList.remove('active');
    } else {
      contact.classList.add('active');
      list.classList.remove('active');
      addNew.classList.remove('active');
    }
  }

  static currentDate = () => {
    date.innerHTML = DateTime.now().toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS,
    );
    setTimeout(UI.currentDate, 1000);
  }

  static renderBooks = () => {
    const books = Store.getStorage();
    books.forEach((book) => {
      UI.createBook(book);
    });
  }

  static newBook = (event) => {
    const booktitle = title.value;
    const bookauthor = author.value;
    const time = new Date().getTime();
    const id = time.toString();
    const book = new Book(booktitle, bookauthor, id);
    const array = Store.getStorage();
    array.push(book);
    Store.setStorage(array);
    UI.createBook(book);
    UI.clearField();
    event.preventDefault();
  }
}
