const inputGroup = document.querySelectorAll('.icon-input')
const toastAnimationMiliseconds = 2700
const formAnimationMiliseconds = 900
let toastOnScreen = false

// Realizar a animação ao elemento com classe on-top
const anime = () => {
  document.querySelector('.on-top').classList.add('animate-switch-form')
  setTimeout(() => {
    document.querySelector('.on-top').classList.remove('on-top')
    document.querySelector('.animate-switch-form').classList.remove('animate-switch-form')
  }, formAnimationMiliseconds)
}

// Adiciona animação dos inputs que ficam brancos quando tem algo no input
const addAnimationInputGroupIcon = () => {
  inputGroup.forEach(element => {
    element.querySelector('input').addEventListener('change', (e) => {
      (e.target.value.length)
        ? element.querySelector('svg').classList.add('active')
        : element.querySelector('svg').classList.remove('active')
    })
  })
}

// Após realizar a animação uma vez ao carregar a página, não realizar mais
const removeAnimations = () => {
  document.querySelector('.anime-top-to-center').classList.remove('anime-top-to-center')
  document.querySelector('.anime-bottom-to-center').classList.remove('anime-bottom-to-center')
  document.querySelector('.anime-right-to-center').classList.remove('anime-right-to-center')
}

// Realizar animação de transição do formulário de login para o de registro
const animateLoginToRegister = (e) => {
  const loginSwitch = document.querySelector('#switch-login')
  const registerSwitch = document.querySelector('#switch-register')

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
}

// Realizar animação de transição do formulário de registro para o de login
const animateRegisterToLogin = async (e) => {
  const loginSwitch = document.querySelector('#switch-login')
  const registerSwitch = document.querySelector('#switch-register')

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

}

export const showToast = (message) => {
  const toastElement = document.querySelector('.toast')
  if(!toastOnScreen){
    toastOnScreen = true
    toastElement.classList.add('show')
    toastElement.querySelector('b').innerText = message
    setTimeout(() => {
      toastElement.classList.remove('show')
      toastOnScreen = false
    }, toastAnimationMiliseconds)
  }
}

const removeToast = (e) => {
  e.target.classList.remove('show')
}

export default {
  addAnimationInputGroupIcon,
  removeAnimations,
  animateLoginToRegister,
  animateRegisterToLogin,
  removeToast
}