function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

button.addEventListener("click", onButtonClick);

function onButtonClick() {
  const randomHexColor = getRandomHexColor();

  body.style.backgroundColor = randomHexColor;
  colorValue.textContent = randomHexColor;
}
