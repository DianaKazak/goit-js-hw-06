//const textInput = document.querySelector('#validation-input')
//console.log(textInput.getAttribute('data-length'))
//textInput.addEventListener('blur', event => {
//	if (event.target.value.length == textInput.getAttribute('data-length')) {
//		textInput.classList.add('valid')
//		if (textInput.classList.contains('invalid')) {
//			textInput.classList.remove('invalid')
//		}
//	} else {
//		if (textInput.classList.contains('valid')) {
//			textInput.classList.remove('valid')
//		}
//		textInput.classList.add('invalid')
//	}
//})

const inputText = document.querySelector('#validation-input')

inputText.addEventListener('blur', event => {
	inputText.classList.remove('valid','invalid')
	if (event.target.value.length === Number(inputText.dataset.length)) {
		inputText.classList.add('valid')
	} else(
		inputText.classList.add('invalid'))
	
})
