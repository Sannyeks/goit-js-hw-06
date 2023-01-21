const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const valueStart = document.querySelector('#value');

const counter = {
    value: 0,
    increment(){
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
};

btnIncrement.addEventListener('click', function() {
    counter.increment();
    valueStart.textContent = counter.value;
});

btnDecrement.addEventListener('click', function() {
    counter.decrement();
    valueStart.textContent = counter.value;
});