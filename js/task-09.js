function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyChange = document.body;
const btnChange = document.querySelector('.change-color');
const txtColor = document.querySelector('.color')
btnChange.addEventListener('click', changeBodyColor)

function changeBodyColor (evt){
  const changeColor = getRandomHexColor();
  txtColor.textContent = changeColor;
  bodyChange.style.backgroundColor= changeColor

}
