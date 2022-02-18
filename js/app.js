const form = document.querySelector('form')
const inputEmail = document.querySelector('#email')
const divInput = document.querySelector('.div-input')

const submitForm = event => {
  event.preventDefault()
  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  if (regex.test(inputEmail.value)) {
    divInput.classList.remove('error')
    divInput.classList.add('sucess')
    setInterval(() => {
      divInput.classList.remove('sucess')
    }, 3000)
    return inputEmail.value = ''
  }

  handleError()
}

const handleError = event => {
  event.preventDefault()
  divInput.classList.remove('sucess')
  divInput.classList.add('error')
  setInterval(() => {
    divInput.classList.remove('error')
  }, 3000)
  inputEmail.value = 'example@email/com'
}

form.addEventListener('submit', submitForm)
inputEmail.addEventListener('invalid', handleError)