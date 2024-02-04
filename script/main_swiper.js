const main_swiper = new Swiper('.main_swiper', {
    //effect: 'fade',
    grabCursor: true,
    arrow: true,
    centeredSlides: false,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      prevEl: '.arrow.left',
      nextEl: '.arrow.right',
    },
    autoplay: {
        delay: 8000,
    },
    disableOnInteraction: false,
    speed: 2000,
});

const client_swiper = new Swiper('.client_swiper', {
  grabCursor: true,
  arrow: true,
  centeredSlides: false,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: '.arrow',
    nextEl: '.arrow',
  },
  autoplay: {
      delay: 8000,
  },
  loopAddBlankSlides: true,
  disableOnInteraction: false,
  speed: 2000,
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
})