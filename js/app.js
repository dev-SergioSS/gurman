// -- mobileMenu

const body = document.querySelector('html')
const header = document.querySelector('.header')
const btnsMenu = document.querySelectorAll('.header__btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu__link')

btnsMenu.forEach((btn) =>
  btn.addEventListener('click', function () {
    if (!btn.classList.contains('open')) {
      popups.forEach((el) => el.classList.remove('open'))
    }
    toggleMenu()
  })
)

for (link of menuLink) {
  link.addEventListener('click', () => removeMenu)
}

function lockBodyScroll(action) {
  if (action == 'lock') body.classList.add('lock')
  else if (action == 'unlock') body.classList.remove('lock')
}

function removeMenu() {
  btnsMenu.forEach((btn) => btn.classList.remove('open'))
  menu.classList.remove('open')
  header.classList.remove('is-menu')
  header.classList.remove('is-contacts')
  lockBodyScroll('unlock')
}
function toggleMenu() {
  btnsMenu.forEach((btn) => btn.classList.toggle('open'))
  menu.classList.toggle('open')
  body.classList.toggle('lock')
  header.classList.toggle('is-menu')
}

menuLink.forEach(function (link) {
  var linkText = link.innerText
  link.setAttribute('data-text', linkText)
})

const mobileHeader = document.querySelector('.header__mobile-row')

mobileHeader.addEventListener('click', (e) => {
  if (e.target.closest('.header__btn-menu')) {
    return
  }
  if (e.target.closest('.header__btn-contacts')) {
    body.classList.add('lock')
    header.classList.add('is-contacts')
    return
  }
  if (e.target.closest('.header.is-menu')) {
    removeMenu()
  }
  if (e.target.closest('.header.is-contacts')) {
    removeMenu()
  }
})

const btnCloseContacts = document.querySelector(
  '.header__popup-contacts-btn-close'
)
btnCloseContacts.addEventListener('click', () => {
  removeMenu
})

// -- form

const formbtn = document.querySelector('.form button')
const inputs = document.querySelectorAll('.form input[required]')

formbtn.addEventListener('click', (e) => {
  validateForm()
})

inputs.forEach((el) =>
  el.addEventListener('click', (e) => {
    e.target.classList.remove('error')
  })
)

function validateForm() {
  console.log(inputs)
  inputs.forEach(function (input) {
    if (input.value.trim() === '') {
      input.classList.add('error')
    } else {
      input.classList.remove('error')
    }
  })
}

// --fixed logo on mobile

let isMobile = true
let widthWindow = document.body.clientWidth

if (widthWindow > 768) {
  isMobile = false
}

let preloaderEl = document.querySelector('.preloader')
var scrolledPixels = 0

window.addEventListener('scroll', function () {
  scrolledPixels = window.scrollTop || window.pageYOffset

  if (scrolledPixels >= 63 && isMobile) {
    preloaderEl.classList.add('fixed')
  } else preloaderEl.classList.remove('fixed')
})

// -----
