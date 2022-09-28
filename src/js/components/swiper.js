import Swiper from 'swiper/bundle'
import 'swiper/css'
import { getAllCategories } from '../../data.js'

const swiperWrapper = document.querySelector('.swiper-wrapper')
getAllCategories().then((res) => {
  res.categories.forEach((meal) => {
    if (meal.strCategory !== 'Miscellaneous') {
      const swiperItem = document.createElement('div')
      swiperItem.setAttribute('class', 'swiper-slide')
      swiperItem.innerHTML = `${meal.strCategory}?`
      swiperWrapper.appendChild(swiperItem)
    }
  })
  const swiper = new Swiper('.swiper', {
    allowTouchMove: false,
    direction: 'vertical',
    autoplay: {
      enabled: true,
      delay: 4000,
      disableOnInteraction: false
    },
    spaceBetween: 100,
    loop: true
  })
})
