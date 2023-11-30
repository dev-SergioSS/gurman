let headerRow = new Swiper('.header__top-info-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 8000,
  loop: true,
  autoplay: {
    delay: 1,
  },
  allowTouchMove: false,
})

let storesSlider = new Swiper('.stores__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 0,
  },
  grabCursor: true,
  freemode: true,
  // mousewheel: {
  //   forceToAxis: true,
  // },
})

let productsSlider = new Swiper('.products__slider', {
  initialSlide: 1,
  slidesPerView: 1.8,
  centeredSlides: true,
  slidesPerGroup: 1,
  speed: 500,
  loop: true,
  loopAdditionalSlides: 4,
  on: {
    slideChange: function () {
      this.slides.forEach((slide) => {
        slide.classList.remove('no-shadow')
      })

      var activeIndex = this.activeIndex

      if (activeIndex > 2) {
        var prevSlide = this.slides[activeIndex - 3]
        prevSlide.classList.add('no-shadow')
      }
    },
  },
  navigation: {
    nextEl: '.products__slider-btn-next',
    prevEl: '.products__slider-btn-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 5.5,
      initialSlide: 0,
      speed: 300,
    },
  },
})
