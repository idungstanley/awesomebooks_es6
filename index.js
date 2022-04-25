import UI from "./module/library.js"
import currentDate from "./module/date.js"

const navList = document.querySelector('.list-container')
const list = document.querySelector('.book-list')
const addNew = document.querySelector('.book-form')
const contact = document.querySelector('.contact')

navList.addEventListener('click', (e) => {
  if (e.target.classList.contains('list')) {
    list.classList.add('active')
    contact.classList.remove('active')
    addNew.classList.remove('active')
  } else if (e.target.classList.contains('new')) {
    addNew.classList.add('active')
    list.classList.remove('active')
    contact.classList.remove('active')
  } else {
    contact.classList.add('active')
    list.classList.remove('active')
    addNew.classList.remove('active')
  }
})

document.addEventListener('DOMContentLoaded', UI.renderBooks)
window.onload = currentDate()