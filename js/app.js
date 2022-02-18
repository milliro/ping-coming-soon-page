const form = document.querySelector('form')
const inputEmail = document.querySelector('#email')
const divInput = document.querySelector('.div-input') 

const submitForm = event => {
  event.preventDefault()
  sucessful()
  setInterval(() => {
    divInput.classList.remove('sucess')
  }, 3000)
}

const handleError = event => {
  event.preventDefault()
  error()
  setInterval(() => {
    divInput.classList.remove('error')
  }, 3000)
}

const sucessful = () => {
  divInput.classList.remove('error')
  divInput.classList.add('sucess')
  inputEmail.value = ''
}

const error = () => {
  divInput.classList.remove('sucess')
  divInput.classList.add('error')
  inputEmail.value = 'example@email/com'
}

form.addEventListener('submit', submitForm)
inputEmail.addEventListener('invalid', handleError)