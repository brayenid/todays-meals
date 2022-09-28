import '../css/style.css'
import '../js/components/search-meals.js'
import '../js/components/list-meals.js'
import '../js/components/swiper.js'
import '../js/components/modalbox.js'
import { searchByName, filterMealsByCat, filterMealsByArea } from '../data.js'
import { showResult, noResult, sayHello } from '../js/function/result.js'
import scroll from '../js/function/scroll.js'

const main = () => {
  const searchElement = document.querySelector('meals-search')
  const listMeals = document.querySelector('meals-list')
  const mealsCount = document.querySelector('.mealsCount')
  const resultsStuff = () => {
    setTimeout(scroll, 200)
    listMeals.classList.add('addPadding')
    mealsCount.classList.add('addPaddingCount')
  }
  const searchFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await searchByName(searchElement.value)
      if (searchElement.value === 'hello' || searchElement.value === 'Hello') {
        sayHello()
        return
      }
      showResult(listMeals, data.meals)
      resultsStuff()
    } catch (err) {
      try {
        const data = await filterMealsByCat(searchElement.value)
        showResult(listMeals, data.meals)
        resultsStuff()
      } catch (err) {
        try {
          const data = await filterMealsByArea(searchElement.value)
          showResult(listMeals, data.meals)
          resultsStuff()
        } catch (err) {
          if (listMeals.classList.contains('addPadding')) {
            listMeals.classList.remove('addPadding')
            mealsCount.classList.remove('addPaddingCount')
            noResult(searchElement.value)
          } else {
            noResult(searchElement.value)
          }
        }
      }
    }
  }
  searchElement.search = searchFormSubmit
}
export default main
