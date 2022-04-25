const date = document.querySelector('.date')

const currentDate = () => {
  const newDate = new Date()
  date.innerHTML = `${newDate.toDateString()}, ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}am `
  setTimeout(currentDate, 1000)
}

export default currentDate
