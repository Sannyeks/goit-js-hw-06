const input = document.querySelector('#name-input');
const outputTitle = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
function onInputChange(event) {
    outputTitle.textContent = "Anonymous";
    if (event.currentTarget.value !== '') {
        outputTitle.textContent = event.currentTarget.value;
    }
}