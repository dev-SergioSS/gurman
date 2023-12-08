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
  speed: 3200,
  loop: true,
  autoplay: {
    delay: 0,
  },
  grabCursor: true,
  freemode: true,
})

// -- products

// * клонування
const productsWrapper = document.querySelector(
  '.products__slider .swiper-wrapper'
)
const productsSlides = productsWrapper.querySelectorAll(
  '.products__slider .swiper-slide'
)

let clonedSlides = []

for (let i = 0; i < 7; i++) {
  productsSlides.forEach(function (slide) {
    var clone = slide.cloneNode(true)
    clonedSlides.push(clone)
  })
}

clonedSlides.forEach(function (clone) {
  productsWrapper.appendChild(clone)
})

// * слайдер

let productsSlider = new Swiper('.products__slider', {
  initialSlide: 32, //1
  slidesPerView: 1.8,
  centeredSlides: true,
  slidesPerGroup: 1,
  speed: 700,
  loop: true,
  // loopAdditionalSlides: 11,
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

      // ----
    },
  },
  navigation: {
    nextEl: '.products__slider-btn-next',
    prevEl: '.products__slider-btn-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 5.5,
      initialSlide: 33, //0
      speed: 300,
    },
  },
})

// * гортання

var slides = document.querySelectorAll('.products__item')

slides.forEach(function (slide, index) {
  slide.addEventListener('click', function (e) {
    if (!e.target.closest('.swiper-slide-active')) {
      e.preventDefault()
      productsSlider.slideTo(index)
    }
  })
})
