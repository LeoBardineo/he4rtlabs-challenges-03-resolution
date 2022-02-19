import { wrapperLogin, wrapperRegister, toast } from './components.js'
import validator from './validator.js'

document.querySelector('.app').innerHTML = wrapperLogin + wrapperRegister + toast

const animatedNode = document.querySelector('.anime-top-to-center')
const toastElement = document.querySelector('.toast')
const inputGroup = document.querySelectorAll('.icon-input')
const formAnimationMiliseconds = 900

const loginEmail = document.querySelector('#loginEmail')
const loginPassword = document.querySelector('#loginPassword')
const loginSwitch = document.querySelector('#switch-login')

const registerUsername = document.querySelector('#registerUsername')
const registerEmail = document.querySelector('#registerEmail')
const registerPassword = document.querySelector('#registerPassword')
const registerConfirmPassword = document.querySelector('#registerConfirmPassword')
const registerSwitch = document.querySelector('#switch-register')

// Substitui os <i> por icones do feather
feather.replace()

// Realizar a animação ao elemento com classe on-top
const anime = async () => {
  document.querySelector('.on-top').classList.add('animate-switch-form')
  setTimeout(() => {
    document.querySelector('.on-top').classList.remove('on-top')
    document.querySelector('.animate-switch-form').classList.remove('animate-switch-form')
  }, formAnimationMiliseconds)
}

// Animação dos inputs que ficam brancos quando tem algo no input
inputGroup.forEach(element => {
  element.querySelector('input').addEventListener('change', (e) => {
    (e.target.value.length)
      ? element.querySelector('svg').classList.add('active')
      : element.querySelector('svg').classList.remove('active')
  })
})

// Após realizar a animação uma vez, não realizar mais
animatedNode.addEventListener('animationend', () => {
  animatedNode.classList.remove('anime-top-to-center')
  document.querySelector('.anime-bottom-to-center').classList.remove('anime-bottom-to-center')
  document.querySelector('.anime-right-to-center').classList.remove('anime-right-to-center')
})

// Realizar animação de transição do formulário de login para o de registro
loginSwitch.addEventListener('click', async (e) => {
  e.preventDefault()
  if (e.target.pointerEvents == "none") return

  loginSwitch.pointerEvents = "none"
  registerSwitch.pointerEvents = "none"

  anime()

  setTimeout(() => {
    loginSwitch.pointerEvents = "auto"
    registerSwitch.pointerEvents = "auto"
  
    document.querySelector('.wrapper-register').classList.add('on-top')
  }, formAnimationMiliseconds)
})

// Realizar animação de transição do formulário de registro para o de login
registerSwitch.addEventListener('click', async (e) => {
  e.preventDefault()
  if (e.target.pointerEvents == "none") return

  loginSwitch.pointerEvents = "none";
  registerSwitch.pointerEvents = "none";

  anime()

  setTimeout(() => {
    loginSwitch.pointerEvents = "auto";
    registerSwitch.pointerEvents = "auto";
  
    document.querySelector('.wrapper-login').classList.add('on-top')
  }, formAnimationMiliseconds)

})

loginEmail.addEventListener('focusout', validator.emailValidator)
loginPassword.addEventListener('focusout', validator.loginPasswordValidator)
registerUsername.addEventListener('focusout', validator.registerUsernameValidator)
registerEmail.addEventListener('focusout', validator.emailValidator)
registerPassword.addEventListener('focusout', validator.registerPasswordValidator)
registerConfirmPassword.addEventListener('focusout', validator.registerConfirmPasswordValidator)

// Remove o toast ao clicar nele
toastElement.addEventListener('click', (e) => {
  e.target.classList.remove('show')
})