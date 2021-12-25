function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxesBtn = document.querySelector("button[data-create]");
const destroyBoxesBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBoxesBtn.addEventListener("click", onCreateBoxesBtnClick);
destroyBoxesBtn.addEventListener("click", onDestoyBoxesBtnClick);

function onCreateBoxesBtnClick() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const firstHeight = 30;
    const firstWidth = 30;

    box.style.height = `${firstHeight + i * 10}` + "px";
    box.style.width = `${firstWidth + i * 10}` + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxesArr.push(box);
  }

  boxesDiv.append(...boxesArr);
}

function onDestoyBoxesBtnClick() {
  boxesDiv.innerHTML = "";
}
