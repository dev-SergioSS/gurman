gsap.registerPlugin(ScrollTrigger)

// ------ hero
if (widthWindow > 768) {
  const heroProducts = document.querySelector('.hero__products')
  let heroAnimFinish = true

  heroProducts.addEventListener('mouseenter', () => {
    if (heroAnimFinish) {
      heroLightShow.restart()
      heroLightMove.restart()
      heroAnimFinish = false

      setTimeout(() => {
        heroAnimFinish = true
      }, 1300)
    }
  })

  // setInterval(() => {}, 7_000)

  let heroLightMove = gsap.from('.hero__products-light', {
    xPercent: -640,
    duration: 0.8,
    onComplete: function () {
      heroLightHide.restart()
    },
  })
  let heroLightShow = gsap.fromTo(
    '.hero__products-light',
    {
      opacity: 0,
      scale: 0,
    },
    {
      paused: true,
      duration: 0.2,
      opacity: 1,
      scale: 1,
    }
  )
  let heroLightHide = gsap.fromTo(
    '.hero__products-light',
    {
      opacity: 1,
      scale: 1,
    },
    {
      paused: true,
      duration: 0.5,
      opacity: 0,
      scale: 0,
    }
  )
}

//  ------ benefits

gsap.from('.benefits__title', {
  scrollTrigger: {
    trigger: '.benefits__title',
    start: '50% top',
  },
  yPercent: -300,
  opacity: 0,
  duration: 0.7,
})
gsap.from('.benefits__items li', {
  scrollTrigger: {
    trigger: '.benefits__title',
    start: '30% top',
  },

  opacity: 0,
  stagger: 0.3,
  duration: 0.4,
  ease: 'power2.out',
  delay: 0.9,
})

//  ----- target

gsap.from('.target__title', {
  scrollTrigger: {
    trigger: '.target__title',
    start: 'top 40%',
  },
  xPercent: -50,
  duration: 0.8,
  opacity: 0,
  onComplete: function () {
    targetText.play()
  },
})
const targetText = gsap.from('.target__text p', {
  opacity: 0,
  duration: 0.5,
  paused: true,
  delay: 0.2,
})

gsap.from('.target__media', {
  scrollTrigger: {
    trigger: '.target__media',
    start: 'top 50%',
  },
  opacity: 0,
  duration: 0.1,
  onComplete: function () {
    targetImg4.play()
    targetImg5.play()
    targetImg1.play()
    targetImg2.play()
    targetImg3.play()
  },
})

let targetImg4 = gsap.from('.target__img_4', {
  paused: true,
  duration: 1.3,
  yPercent: -200,
})
let targetImg5 = gsap.from('.target__img_5', {
  paused: true,
  duration: 1.3,
  yPercent: -200,
})
let targetImg1 = gsap.from('.target__img_1', {
  paused: true,
  duration: 1.3,
  yPercent: -200,
})
let targetImg2 = gsap.from('.target__img_2', {
  paused: true,
  yPercent: -300,
  duration: 1.3,
})
let targetImg3 = gsap.from('.target__img_3', {
  paused: true,
  yPercent: -300,
  duration: 1.3,
  delay: 0.05,
  onComplete: function () {
    targetVegetables.play()
  },
})

const targetVegetables = gsap.from('.target .target__vegetable', {
  opacity: 0,
  duration: 1.3,
  paused: true,
  delay: 0.2,
})

// ------ history

gsap.from('.history__title', {
  scrollTrigger: {
    trigger: '.history__title',
    start: 'top 40%',
  },
  xPercent: -50,
  duration: 0.8,
  opacity: 0,
  onComplete: function () {
    historyText.play()
  },
})
const historyText = gsap.from('.history__text p', {
  opacity: 0,
  duration: 0.5,
  paused: true,
})

gsap.from('.history__media', {
  scrollTrigger: {
    trigger: '.history__media',
    start: 'top 50%',
  },
  opacity: 0,
  duration: 0.1,
  onComplete: function () {
    historyImg1.play()
    historyImg2.play()
    historyImg3.play()
  },
})

let historyImg1 = gsap.from('.history__img_1', {
  paused: true,
  duration: 1.3,
  yPercent: -300,
  delay: 0.08,
})
let historyImg2 = gsap.from('.history__img_2', {
  paused: true,
  duration: 1.3,
  yPercent: -200,
})
let historyImg3 = gsap.from('.history__img_3', {
  paused: true,
  duration: 1.3,
  yPercent: -250,
  delay: 0.05,
})

// ------- partnership

let partnershipPoint = 'center'

if (widthWindow <= 768) partnershipPoint = 'top'

gsap.from('.partnership__row_1 .partnership__media', {
  scrollTrigger: {
    trigger: '.partnership__row_1',
    start: `${partnershipPoint} center`,
  },
  yPercent: -100,
  opacity: 0,
  duration: 0.6,
  onComplete: function () {
    partnershipObj1.play()
  },
})
gsap.from('.partnership__row_2 .partnership__media', {
  scrollTrigger: {
    trigger: '.partnership__row_2',
    start: `${partnershipPoint} center`,
  },
  yPercent: -100,
  opacity: 0,
  duration: 0.6,
  onComplete: function () {
    partnershipObj2.play()
  },
})
gsap.from('.partnership__row_3 .partnership__media', {
  scrollTrigger: {
    trigger: '.partnership__row_3',
    start: `${partnershipPoint} center`,
  },
  yPercent: -100,
  opacity: 0,
  duration: 0.6,
  onComplete: function () {
    partnershipObj3.play()
  },
})
const partnershipObj1 = gsap.from(
  '.partnership__row_1 .partnership__media-obj',
  {
    opacity: 0,
    duration: 1,
    paused: true,
  }
)
const partnershipObj2 = gsap.from(
  '.partnership__row_2 .partnership__media-obj',
  {
    opacity: 0,
    duration: 1,
    paused: true,
  }
)
const partnershipObj3 = gsap.from(
  '.partnership__row_3 .partnership__media-obj',
  {
    opacity: 0,
    duration: 1,
    paused: true,
  }
)

// ----- header

gsap.set('#logo-form', {
  scale: 30,
})
gsap.set(
  '.logo-animated .svg-letter, .logo-animated .subtitle, .preloader p, .preloader h1, #bg-black, #bg-gold, .hero__products',
  {
    opacity: 0,
  }
)

let preloader = gsap
  .timeline()
  .to('.logo-animated .svg-letter', {
    opacity: 1,
    stagger: 0.3,
    duration: 0.4,
  })
  .to('.logo-animated .subtitle', {
    opacity: 1,
    duration: 0.4,
  })
  .fromTo(
    '.preloader p',
    {
      xPercent: -100,
      opacity: 0,
      duration: 0.2,
    },
    {
      xPercent: 0,
      opacity: 1,
    }
  )
  .fromTo(
    '.preloader h1',
    {
      opacity: 0,
      duration: 0.1,
    },
    {
      opacity: 1,
    }
  )
  .to('#logo-form', {
    scale: 1,
    duration: 1.5,
    ease: 'power1.out',
    transformOrigin: 'center 10%',
    onComplete: function () {
      gsap.set('.preloader h1, .preloader p,#logo-form', { opacity: 0 })
    },
  })
  .to('#bg-black, #bg-gold', {
    opacity: 1,
    duration: 0.3,
    onComplete: function () {
      gsap.set('.preloader p, .preloader h1, #logo-form', { opacity: 0 })
    },
  })
  .to('.hero__products', {
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    onComplete: function () {
      body.classList.remove('lock')
    },
  })
