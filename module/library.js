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
    let found = null;
    books.forEach((book) => {
      if (event.target.id === book.id) {
        event.target.parentElement.remove()
        found = book
      }
    })
    if(found != null){

      books.splice(books.indexOf(found), 1)
      localStorage.setItem('books', JSON.stringify(books))
    }
  }

  static clearField = () => {
    title.value = ''
    author.value = ''
  }
 
}

export default UI