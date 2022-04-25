import UI from "./library.js"

const addNew = document.querySelector('.book-form')
const bookContainer = document.querySelector('.book-container')
const author = document.querySelector('#author')
const form = document.getElementsByTagName('form')[0]
const title = document.querySelector('#title')


let array = [];
class Book {
  constructor(title, author, id = new Date().getTime()) {
    this.title = title
    this.author = author
    this.id = id
  }

  static createBook = (book) => {
    const bookList = document.createElement('li')
    bookList.classList.add('li')
    bookList.innerHTML = `<p class="title">"${book.title}" by ${book.author}</p>
    <button id=${book.id} class="delete">Remove</button>`
    bookContainer.appendChild(bookList);
    const deleteBtn = bookList.querySelector("button");
    deleteBtn.onclick = UI.deleteBook;

  }

  static setStorage = () => {
    localStorage.setItem('books', JSON.stringify(array))
  }

  static getStorage = () => {
    if (localStorage.getItem('books') === null) {
      return Book.setStorage()
    }
    array = JSON.parse(localStorage.getItem('books'))
    return array
  }

  static store = (event) => {
    const booktitle = title.value
    const bookauthor = author.value
    const time = new Date().getTime()
    const id = time.toString()
    const book = new Book(booktitle, bookauthor, id)
    Book.getStorage()
    array.push(book)
    Book.setStorage()
    Book.createBook(book)
    UI.clearField()
    event.preventDefault()
  }
}

window.onload = addNew.classList.add('active')
form.addEventListener('submit', Book.store)

export default Book