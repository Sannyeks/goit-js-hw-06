const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length < input.getAttribute('data-length')) {
        input.classList.add('invalid');
    }
    else if (event.currentTarget.value.length >= input.getAttribute('data-length')) {
        input.classList.replace('invalid', 'valid');
    }
}