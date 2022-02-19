import { showToast } from './animate.js'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const usernameRegex = /^[a-zA-Z0-9]*$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,100}$/

let everWrittenInConfirm = false

// Colore a borda do icon-input e o icon, e ativa o toast
const errorWarning = (e, message) => {
  e.target.parentNode.style.borderColor = '#DC3545'
  e.target.previousSibling.previousSibling.style.color = '#DC3545'
  showToast(message)
}

// Descolore a borda do icon-input e o icon
const uncolorInput = e => {
  e.target.parentNode.style.borderColor = ''
  e.target.previousSibling.previousSibling.style.color = '';
  e.target.previousSibling.previousSibling.classList.add('active')
}

const generalValidator = (e, conditions) => {
  let errorOccurred = false
  conditions.forEach((error) => {
    if (error.condition && !errorOccurred) {
      errorWarning(e, error.errorMessage)
      errorOccurred = true
    }
  })
  if (!errorOccurred) uncolorInput(e)
  return errorOccurred
}

const emailConditions = (value) => {
  return [
    { condition: (!value.length), errorMessage: 'Campo e-mail não preenchido' },
    { condition: (!value.match(emailRegex)), errorMessage: 'E-mail inválido' }
  ]
}

const loginPasswordConditions = (value) => {
  return [
    { condition: (!value.length), errorMessage: 'Campo senha não preenchido'}
  ]
}

const registerUsernameConditions = (value) => {
  return [
    { condition: (!value.length), errorMessage:'Campo nome de usuário não preenchido' },
    { condition: (value.length <= 4), errorMessage:'Nome de usuário muito pequeno' },
    { condition: (value.length >= 255), errorMessage:'Nome de usuário muito grande' },
    { condition: (!value.match(usernameRegex)), errorMessage:'Nome de usuário inválido. Apenas letras e números aceitos' }
  ]
}

const registerPasswordConditions = (value, confirmPasswordValue) => {
  return [
    { condition: (!value.length), errorMessage:'Campo senha não preenchido' },
    { condition: (!value.match(passwordRegex)), errorMessage:'Senha fraca. Ela precisa ter ao menos 8 dígitos, 1 caractere especial, 1 dígito numérico, 1 letra maiúscula e 1 minúscula.' },
    { condition: (everWrittenInConfirm && value != confirmPasswordValue), errorMessage:'Campo confirmar senha não é igual ao campo senha' },
  ]
}

const registerConfirmPasswordConditions = (value) => {
  return [
    { condition: (!value.length), errorMessage: 'Campo confirmar senha não preenchido' },
    { condition: (value != document.querySelector('#registerPassword').value), errorMessage: 'Campo confirmar senha não é igual ao campo senha' },
  ]
}

const emailValidator = (e) => {
  const conditions = emailConditions(e.target.value)
  generalValidator(e, conditions)
}

const loginPasswordValidator = (e) => {
  const conditions = loginPasswordConditions(e.target.value)
  generalValidator(e, conditions)
}

const registerUsernameValidator = (e) => {
  const conditions = registerUsernameConditions(e.target.value)
  generalValidator(e, conditions)
}

const registerPasswordValidator = (e) => {
  const confirmPassword = document.querySelector('#registerConfirmPassword')
  const conditions = registerPasswordConditions(e.target.value, confirmPassword.value)
  const errorOccurred = generalValidator(e, conditions)
  if(errorOccurred && everWrittenInConfirm){
    confirmPassword.parentNode.style.borderColor = '#DC3545'
    confirmPassword.previousSibling.previousSibling.style.color = '#DC3545'
  }else{
    confirmPassword.parentNode.style.borderColor = ''
    confirmPassword.previousSibling.previousSibling.style.color = '';
    confirmPassword.previousSibling.previousSibling.classList.add('active')
  }
}

const registerConfirmPasswordValidator = (e) => {
  const conditions = registerConfirmPasswordConditions(e.target.value)
  generalValidator(e, conditions)
  everWrittenInConfirm = true
}

export default {
  emailValidator,
  loginPasswordValidator,
  registerUsernameValidator,
  registerPasswordValidator,
  registerConfirmPasswordValidator
}