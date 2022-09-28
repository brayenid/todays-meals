const closeModal = () => {
  const forModal = document.querySelector('.forModal')
  forModal.classList.remove('dBlock')
  document.body.classList.remove('overflowY-hidden')
  forModal.innerHTML = ''
}

export default closeModal
