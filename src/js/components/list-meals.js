import './item-meals.js'

class MealsList extends HTMLElement {
  set mealsItems(value) {
    this._mealsItems = value
    this.render()
  }

  render() {
    this.innerHTML = ''
    this._mealsItems.forEach((meal) => {
      const mealsItem = document.createElement('meals-item')
      mealsItem.meal = meal
      this.appendChild(mealsItem)
    })
    const itemCount = document.createElement('div')
    if (this._mealsItems.length === 1) {
      itemCount.innerHTML = `We found ${this._mealsItems.length} item :`
    } else {
      itemCount.innerHTML = `We found ${this._mealsItems.length} items :`
    }
    const listMeals = document.querySelector('.mealsCount')
    listMeals.innerHTML = ''
    listMeals.appendChild(itemCount)
  }
}

customElements.define('meals-list', MealsList)
