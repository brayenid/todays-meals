import { showDetail } from '../../data.js'

const readMore = async (value) => {
  const data = await showDetail(value)
  const forModal = document.querySelector('.forModal')
  const modalBox = document.createElement('modal-box')
  modalBox.mealId = data.meals
  forModal.appendChild(modalBox)
  forModal.classList.add('dBlock')
  document.body.classList.add('overflowY-hidden')
}
export default readMore
