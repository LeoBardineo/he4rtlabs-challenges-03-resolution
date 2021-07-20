let atLoginScreen = false

function addEvents () {
  // Link que muda o formulário para registro ou login
  registerButton = document.querySelector('#switch-form')
  registerButton.addEventListener('click', async (e) => {
    e.preventDefault()
    render()
  })

  // Animação dos inputs que ficam brancos quando tem algo no input
  inputGroup = document.querySelectorAll('.icon-input')
  inputGroup.forEach(element => {
    element.querySelector('input').addEventListener('change', (e) => {
      (e.target.value.length)
        ? element.querySelector('svg').classList.add('active')
        : element.querySelector('svg').classList.remove('active')
    })
  })
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function render () {
  document.querySelector('.anime-right-to-center').classList.add('anime-center-to-left')
  await sleep(900)

  if (atLoginScreen === true) {
    document.querySelector('.login').innerHTML = loginContent
    atLoginScreen = false
  } else {
    document.querySelector('.login').innerHTML = registerContent
    atLoginScreen = true
  }

  feather.replace()
  document.querySelector('.login > div').classList.add('anime-right-to-center')

  addEvents()
}

const template = `
<section class="welcome">
  ${welcomeContent}
</section>
<section class="login">
  ${loginContent}
</section>
`

document.querySelector('.wrapper').innerHTML = template

feather.replace()

addEvents()
