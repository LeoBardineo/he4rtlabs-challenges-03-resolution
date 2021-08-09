document.querySelector('.app').innerHTML = wrapperLogin + wrapperRegister

const animatedNode = document.querySelector('.anime-top-to-center')
const loginButton = document.querySelector('#switch-login-btn')
const registerButton = document.querySelector('#switch-register-btn')

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Realizar a animação ao elemento com classe on-top
const anime = async () => {
  document.querySelector('.on-top').classList.add('animate-switch-form')
  await sleep(900)
  document.querySelector('.on-top').classList.remove('on-top')
  document.querySelector('.animate-switch-form').classList.remove('animate-switch-form')
}

const addEvents = () => {
  // Animação dos inputs que ficam brancos quando tem algo no input
  inputGroup = document.querySelectorAll('.icon-input')
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
  loginButton.addEventListener('click', async (e) => {
    e.preventDefault()
    if (e.target.pointerEvents == "none") return

    loginButton.pointerEvents = "none"
    registerButton.pointerEvents = "none"

    await anime()

    loginButton.pointerEvents = "auto"
    registerButton.pointerEvents = "auto"

    document.querySelector('.wrapper-register').classList.add('on-top')
  })

  // Realizar animação de transição do formulário de registro para o de login
  registerButton.addEventListener('click', async (e) => {
    e.preventDefault()
    if (e.target.pointerEvents == "none") return

    loginButton.pointerEvents = "none";
    registerButton.pointerEvents = "none";

    await anime()

    loginButton.pointerEvents = "auto";
    registerButton.pointerEvents = "auto";

    document.querySelector('.wrapper-login').classList.add('on-top')
  })
}

feather.replace()

addEvents()