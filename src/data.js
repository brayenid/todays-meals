import axios from 'axios'
const url = 'https://www.themealdb.com'

export const getAllCategories = async () => {
  const res = await fetch(`${url}/api/json/v1/1/categories.php`)
  return res.json()
}

export const searchByName = async (name) => {
  const res = await axios.get(`${url}/api/json/v1/1/search.php?s=${name}`)
  return res.data
}

export const showDetail = async (value) => {
  const res = await axios.get(`${url}/api/json/v1/1/lookup.php?i=${value}`)
  return res.data
}

export const filterMealsByArea = async (area) => {
  const res = await axios.get(`${url}/api/json/v1/1/filter.php?a=${area}`)
  return res.data
}

export const filterMealsByCat = async (cat) => {
  const res = await axios.get(`${url}/api/json/v1/1/filter.php?c=${cat}`)
  return res.data
}
