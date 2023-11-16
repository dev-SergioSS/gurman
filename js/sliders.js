let storesSlider = new Swiper('.stores__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 5000,
  loop: true,
  // autoplay: {
  //   delay: 1,
  // },
  allowTouchMove: false,

  breakpoints: {
    // 576: {
    //   spaceBetween: 42,
    // },
  },
})

let productsSlider = new Swiper('.products__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 500,
  loop: true,
  loopAdditionalSlides: 4,
  // autoplay: {
  //   delay: 1,
  // },
  allowTouchMove: true,

  breakpoints: {
    // 576: {
    //   spaceBetween: 42,
    // },
  },
})
