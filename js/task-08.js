const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { 
        elements: { email, password },
    } = event.currentTarget


if (email.value === '' || password.value === '') {
    return alert('Будь-ласка заповніть всі поля!')
}

const userForm = { email: email.value, password: password.value}

console.log(userForm);
event.currentTarget.reset()
}
