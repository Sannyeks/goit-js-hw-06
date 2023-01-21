function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

 const changeBtn = document.querySelector('.change-color');
const colorStyle = document.querySelector('.color');

function changeBodyBgr(value) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorStyle.textContent = getRandomHexColor();
}
changeBtn.addEventListener('click', changeBodyBgr);

