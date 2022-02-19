import { wrapperLogin, wrapperRegister, toast } from './components.js'
import validator from './validator.js'
import animate from './animate.js'

document.querySelector('.app').innerHTML = wrapperLogin + wrapperRegister + toast

const animatedNode = document.querySelector('.anime-top-to-center')
const toastElement = document.querySelector('.toast')

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

animate.addAnimationInputGroupIcon()

animatedNode.addEventListener('animationend', animate.removeAnimations)
loginSwitch.addEventListener('click', animate.animateLoginToRegister)
registerSwitch.addEventListener('click', animate.animateRegisterToLogin)

loginEmail.addEventListener('focusout', validator.emailValidator)
loginPassword.addEventListener('focusout', validator.loginPasswordValidator)
registerUsername.addEventListener('focusout', validator.registerUsernameValidator)
registerEmail.addEventListener('focusout', validator.emailValidator)
registerPassword.addEventListener('focusout', validator.registerPasswordValidator)
registerConfirmPassword.addEventListener('focusout', validator.registerConfirmPasswordValidator)

// Remove o toast ao clicar nele
toastElement.addEventListener('click', animate.removeToast)