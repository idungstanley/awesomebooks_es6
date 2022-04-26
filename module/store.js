export default class Store {
  static getStorage = () => JSON.parse(localStorage.getItem('books'))

  static setStorage = (bookList) => {
    localStorage.setItem('books', JSON.stringify(bookList));
  }
}
