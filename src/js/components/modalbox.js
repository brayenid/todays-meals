import closeModal from '../function/close.js'
import { filterMealsByArea, filterMealsByCat } from '../../data.js'
import { showResult } from '../function/result.js'
import scroll from '../function/scroll.js'

class ModalBox extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set mealId(value) {
    this._mealId = value
  }
  render() {
    this.innerHTML = `
    <div class="modalBoxCont">
    <div class="modalBox">
      <div class="close">
        <svg class="closeBtn" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="imgCont">
        <img src="${this._mealId[0].strMealThumb}" alt="${this._mealId[0].strMeal}" title="${this._mealId[0].strMeal}" />
      </div>
      <div class="content">
        <h1>${this._mealId[0].strMeal}</h1>
        <ul>
          <li><a title="Click to see ${this._mealId[0].strArea} Food!" class="mealArea" href="#${this._mealId[0].strArea}">#${this._mealId[0].strArea}</a></li>
          <li><a title="Click to see ${this._mealId[0].strCategory} Category!" class="mealCategory" href="#${this._mealId[0].strCategory}">#${this._mealId[0].strCategory}</a></li>
        </ul>
        <p class="mealIns">${this._mealId[0].strInstructions}</p>
        <div class="youtube">
          <a href="${this._mealId[0].strYoutube}" target="_blank">Check on Youtube!</a>
        </div>
      </div>
    </div>
  </div>
    `
    this.querySelector('.close').addEventListener('click', closeModal)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    })
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.modalBox')) {
        closeModal()
      }
    })
    this.querySelector('.mealArea').addEventListener('click', async (e) => {
      e.preventDefault()
      const listMeals = document.querySelector('meals-list')
      const data = await filterMealsByArea(this._mealId[0].strArea)
      closeModal()
      showResult(listMeals, data.meals)
      scroll()
    })
    this.querySelector('.mealCategory').addEventListener('click', async (e) => {
      e.preventDefault()
      const listMeals = document.querySelector('meals-list')
      const data = await filterMealsByCat(this._mealId[0].strCategory)
      closeModal()
      showResult(listMeals, data.meals)
      scroll()
    })
  }
}
customElements.define('modal-box', ModalBox)
