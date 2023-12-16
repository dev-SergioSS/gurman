const videoHero = document.querySelector('.hero__video')
const videoProcess = document.querySelector('.label-block__video')
const heroBg = document.querySelector('.hero__bg-img-1')

document.addEventListener('DOMContentLoaded', function () {
  heroBg.style.background = 'none'
  videoHero.play()
  videoProcess.play()
})

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.overflow = 'hidden'
  setTimeout(function () {
    document.body.style.overflow = ''
  }, 5000)
})

// -- seo text

const seoBtnMore = document.querySelector('.seo-text__btn-more')
const seoTextWrap = document.querySelector('.seo-text')
seoBtnMore.addEventListener('click', () => {
  seoTextWrap.classList.toggle('show-all')
})
