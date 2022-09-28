import Swal from 'sweetalert2'
import './axiosprogress.js'

export const showResult = (element, res) => {
  element.mealsItems = res
}
export const noResult = (value) => {
  Swal.fire({
    position: 'top',
    text: `${value}? There is no such a meal with this name here :(`,
    showConfirmButton: false,
    timer: 5000,
    background: '#fff',
    color: '#EB1D36',
    backdrop: false,
  })
  const listMeals = document.querySelector('.mealsCount')
  listMeals.innerHTML = ''
}
export const sayHello = () => {
  Swal.fire({
    position: 'top',
    text: 'Hello! :) nice to meet you!',
    showConfirmButton: false,
    timer: 5000,
    background: '#fff',
    color: '#A1C298',
    backdrop: false,
  })
}
