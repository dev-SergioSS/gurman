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

let startBenefits = 'bottom 40%'
let delayBenefits = 0.1

if (widthWindow > 768) {
  startBenefits = 'top 50%'
  delayBenefits = 0.2
}

gsap.set('.benefits__items li', { opacity: 0 })
const benefitsItems = gsap.to('.benefits__items li', {
  opacity: 1,
  stagger: 0.4,
  duration: 0.4,
  ease: 'power2.out',
  delay: delayBenefits,
  paused: true,
})

gsap.from('.benefits__title', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'bottom 40%',
  },
  yPercent: -300,
  opacity: 0,
  duration: 0.7,
  onComplete: function () {
    benefitsItems.play()
  },
})

//  ----- target opacity

let startText = '70%'
let durationText = 0.65
let delayText = 0

if (widthWindow > 768) {
  startText = '40%'
  durationText = 0.8
  delayText = 0.2
}

gsap.from('.target__title', {
  scrollTrigger: {
    trigger: '.target__title',
    start: `top ${startText}`,
  },
  xPercent: -50,
  duration: durationText,
  opacity: 0,
  onComplete: function () {
    targetText.play()
  },
})

const targetText = gsap.from('.target__text p', {
  opacity: 0,
  duration: 0.5,
  paused: true,
  delay: delayText,
})

if (widthWindow > 768) {
  gsap.from('.target__media', {
    scrollTrigger: {
      trigger: '.target__media',
      start: 'top 50%',
    },
    onComplete: function () {
      targetImg4.play()
      targetImg5.play()
      targetImg1.play()
      targetImg2.play()
      targetImg3.play()
    },
  })

  const pos1 = -80
  const pos2 = -120

  let targetImg4 = gsap.from('.target__img_4', {
    paused: true,
    duration: 1,
    opacity: 0,
    yPercent: pos1,
  })
  let targetImg5 = gsap.from('.target__img_5', {
    paused: true,
    duration: 1,
    opacity: 0,
    yPercent: pos1,
  })
  let targetImg1 = gsap.from('.target__img_1', {
    paused: true,
    duration: 1,
    opacity: 0,
    yPercent: pos1,
  })
  let targetImg2 = gsap.from('.target__img_2', {
    paused: true,
    yPercent: pos1,
    duration: 1,
    opacity: 0,
  })
  let targetImg3 = gsap.from('.target__img_3', {
    paused: true,
    yPercent: pos1,
    duration: 1,
    opacity: 0,
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
}

// ------ history

gsap.from('.history__title', {
  scrollTrigger: {
    trigger: '.history__title',
    start: `top ${startText}`,
  },
  xPercent: -50,
  duration: durationText,
  opacity: 0,
  onComplete: function () {
    historyText.play()
  },
})
const historyText = gsap.from('.history__text p', {
  opacity: 0,
  duration: 0.5,
  paused: true,
  delay: delayText,
})

if (widthWindow > 768) {
  gsap.from('.history__media', {
    scrollTrigger: {
      trigger: '.history__media',
      start: 'top 50%',
    },
    onComplete: function () {
      historyImg1.play()
      historyImg2.play()
      historyImg3.play()
    },
  })

  let historyImg1 = gsap.from('.history__img_1', {
    paused: true,
    duration: 1.02,
    yPercent: -100,
    opacity: 0,
    ease: 'power1.out',
  })
  let historyImg2 = gsap.from('.history__img_2', {
    paused: true,
    duration: 1,
    ease: 'power1.out',
    yPercent: -100,
    opacity: 0,
  })
  let historyImg3 = gsap.from('.history__img_3', {
    paused: true,
    duration: 1.01,
    ease: 'power1.out',
    yPercent: -100,
    opacity: 0,
  })
}

// ------- partnership

let partnershipPoint = 'top'

if (widthWindow <= 768) partnershipPoint = 'top'

gsap.from('.partnership__row_1 .partnership__media', {
  scrollTrigger: {
    trigger: '.partnership__title',
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

// ----- preloader
let sizeLogoForm = 25
let durationLogoForm = 0.5
let durationSvgLetter = 0.3
let durationSubtitle = 0.28
let duration = 0.28

if (widthWindow > 768) {
  sizeLogoForm = 30
  durationLogoForm = 1.5
  durationSvgLetter = 0.4
  durationSubtitle = 0.4
}

function startPreloader() {
  gsap.set('#logo-form', {
    scale: sizeLogoForm,
  })
  gsap.set(
    '.logo-animated .svg-letter, .subtitle, .preloader p, .preloader h1, #bg-black, #bg-gold, .hero__products',
    {
      opacity: 0,
    }
  )

  let preloader = gsap
    .timeline()
    .to('.logo-animated .svg-letter', {
      opacity: 1,
      stagger: 0.3,
      duration: durationSvgLetter,
    })
    .to('.logo-animated .subtitle', {
      opacity: 1,
      duration: durationSubtitle,
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
      duration: durationLogoForm,
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
        document.querySelector('.preloader').classList.add('layer-downgrade')
      },
    })
}
startPreloader()
