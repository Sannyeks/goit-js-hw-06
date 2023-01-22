const input = document.querySelector('#name-input');
const outputTitle = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
function onInputChange(event) {
    outputTitle.textContent = event.currentTarget.value;
    if (!event.currentTarget.value) {
        outputTitle.textContent = "Anonymous";
    }
}