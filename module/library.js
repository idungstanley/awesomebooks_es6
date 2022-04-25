import Book from "./addBook.js"


class UI {
  static renderBooks = () => {
    const books = Book.getStorage()
    books.forEach((book) => {
      Book.createBook(book)
    })
  }
  static deleteBook = (event) => {
    const books = Book.getStorage()
    books.forEach((book) => {
      if (event.target.id === book.id) {
        event.target.parentElement.remove()
        books.splice(books.indexOf(book), 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(array))
  }

  static clearField = () => {
    title.value = ''
    author.value = ''
  }
 
}

export default UI