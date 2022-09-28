import $ from 'jquery'

const scroll = () => {
  $('html').animate(
    {
      scrollTop: $('#mealsCount').offset().top
    },
    500
  )
}

export default scroll
