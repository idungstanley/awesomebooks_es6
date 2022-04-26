export default class Book {
  constructor(title, author, id = new Date().getTime()) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}