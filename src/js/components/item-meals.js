import readMore from '../function/readmore.js'
class MealsItem extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set meal(value) {
    this._meal = value
    this.render()
  }

  render() {
    this.innerHTML = `
        <div class="showMeal">
          <div class='imgItemCont'>
            <img class="imgMeal" src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}" title="Click to see detail : ${this._meal.strMeal}"/>
            <h3 class="itemTitle">${this._meal.strMeal}</h3>
          </div>
        </div>
        `
    this.querySelector('.imgMeal').addEventListener('click', () => {
      readMore(this._meal.idMeal)
    })
  }
}
customElements.define('meals-item', MealsItem)
