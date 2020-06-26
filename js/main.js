$(document).ready(function () {
  //initialize swiper when document ready
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 25,
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    }
  })

});