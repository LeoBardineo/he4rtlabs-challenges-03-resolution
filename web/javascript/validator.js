import { showToast } from './animate.js'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const usernameRegex = /^[a-zA-Z0-9]*$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,100}$/

let everWrittenInConfirm = false

// Colore a borda do icon-input e o icon, e ativa o toast
const errorWarning = (e, message) => {
  e.parentNode.style.borderColor = '#DC3545'
  e.previousSibling.previousSibling.style.color = '#DC3545'
  showToast(message)
}

// Descolore a borda do icon-input e o icon
const uncolorInput = (e) => {
  e.parentNode.style.borderColor = ''
  e.previousSibling.previousSibling.style.color = '';
  e.previousSibling.previousSibling.classList.add('active')
}

const generalValidator = (inputConditions) => {
  let errorOccurred = false
  inputConditions.conditions.forEach((error) => {
    if (error.condition && !errorOccurred) {
      errorWarning(inputConditions.element, error.errorMessage)
      errorOccurred = true
    }
  })
  if (!errorOccurred) uncolorInput(inputConditions.element)
  return errorOccurred
}

const loginEmailConditions = (value) => {
  return {
    element: document.querySelector('#loginEmail'),
    conditions: [
      { condition: (!value.length), errorMessage: 'Campo e-mail não preenchido' },
      { condition: (!value.match(emailRegex)), errorMessage: 'E-mail inválido' }
    ]
  }
}

const registerEmailConditions = (value) => {
  return {
    element: document.querySelector('#registerEmail'),
    conditions: [
      { condition: (!value.length), errorMessage: 'Campo e-mail não preenchido' },
      { condition: (!value.match(emailRegex)), errorMessage: 'E-mail inválido' }
    ]
  }
}

const loginPasswordConditions = (value) => {
  return {
    element: document.querySelector('#loginPassword'),
    conditions: [
      { condition: (!value.length), errorMessage: 'Campo senha não preenchido'}
    ]
  }
}

const registerUsernameConditions = (value) => {
  return {
    element: document.querySelector('#registerUsername'),
    conditions: [
      { condition: (!value.length), errorMessage:'Campo nome de usuário não preenchido' },
      { condition: (value.length <= 4), errorMessage:'Nome de usuário muito pequeno' },
      { condition: (value.length >= 255), errorMessage:'Nome de usuário muito grande' },
      { condition: (!value.match(usernameRegex)), errorMessage:'Nome de usuário inválido. Apenas letras e números aceitos' }
    ]
  }
}

const registerPasswordConditions = (value, confirmPasswordValue) => {
  return {
    element: document.querySelector('#registerPassword'),
    conditions: [
      { condition: (!value.length), errorMessage:'Campo senha não preenchido' },
      { condition: (!value.match(passwordRegex)), errorMessage:'Senha fraca. Ela precisa ter ao menos 8 dígitos, 1 caractere especial, 1 dígito numérico, 1 letra maiúscula e 1 minúscula.' },
      { condition: (everWrittenInConfirm && value != confirmPasswordValue), errorMessage:'Campo confirmar senha não é igual ao campo senha' },
    ]
  }
}

const registerConfirmPasswordConditions = (value) => {
  return {
    element: document.querySelector('#registerConfirmPassword'),
    conditions: [
      { condition: (!value.length), errorMessage: 'Campo confirmar senha não preenchido' },
      { condition: (value != document.querySelector('#registerPassword').value), errorMessage: 'Campo confirmar senha não é igual ao campo senha' },
    ]
  }
}

const loginEmailValidator = (e) => {
  const conditions = loginEmailConditions(e.target.value)
  generalValidator(conditions)
}

const loginPasswordValidator = (e) => {
  const conditions = loginPasswordConditions(e.target.value)
  generalValidator(conditions)
}

const registerEmailValidator = (e) => {
  const conditions = registerEmailConditions(e.target.value)
  generalValidator(conditions)
}

const registerUsernameValidator = (e) => {
  const conditions = registerUsernameConditions(e.target.value)
  generalValidator(conditions)
}

const registerPasswordValidator = (e) => {
  const confirmPassword = document.querySelector('#registerConfirmPassword')
  const conditions = registerPasswordConditions(e.target.value, confirmPassword.value)
  const errorOccurred = generalValidator(conditions)
  if(errorOccurred && everWrittenInConfirm){
    confirmPassword.parentNode.style.borderColor = '#DC3545'
    confirmPassword.previousSibling.previousSibling.style.color = '#DC3545'
  }else{
    confirmPassword.parentNode.style.borderColor = ''
    confirmPassword.previousSibling.previousSibling.style.color = '';
  }
}

const registerConfirmPasswordValidator = (e) => {
  const conditions = registerConfirmPasswordConditions(e.target.value)
  const errorOccurred = generalValidator(conditions)
  if(!errorOccurred) uncolorInput(document.querySelector('#registerPassword'))
  everWrittenInConfirm = true
}

const loginSubmit = (e) => {
  e.preventDefault()

  const emailConditions = loginEmailConditions(document.querySelector('#loginEmail').value)
  const passwordConditions = loginPasswordConditions(document.querySelector('#loginPassword').value)

  const error = generalValidator(emailConditions) || generalValidator(passwordConditions)

  if(!error) console.log('logado :D')
}

const registerSubmit = (e) => {
  e.preventDefault()

  const emailConditions = registerEmailConditions(document.querySelector('#registerEmail').value)
  const usernameConditions = registerUsernameConditions(document.querySelector('#registerUsername').value)
  const passwordConditions = registerPasswordConditions(document.querySelector('#registerPassword').value)
  const confirmPasswordConditions = registerConfirmPasswordConditions(document.querySelector('#registerConfirmPassword').value)

  const error = generalValidator(emailConditions) || generalValidator(usernameConditions) || generalValidator(passwordConditions) || generalValidator(confirmPasswordConditions)

  if(!error) console.log('registrado :D')
}

export default {
  loginEmailValidator,
  loginPasswordValidator,
  registerEmailValidator,
  registerUsernameValidator,
  registerPasswordValidator,
  registerConfirmPasswordValidator,
  loginSubmit,
  registerSubmit
}