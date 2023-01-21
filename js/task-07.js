const fontSizeControler = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

fontSizeControler.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
    textSize.style.fontSize = `${event.currentTarget.value}px`; 
}