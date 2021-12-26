function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputAmount = document.querySelector("#controls input");
const createBoxesBtn = document.querySelector("button[data-create]");
const destroyBoxesBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBoxesBtn.addEventListener("click", onCreateBoxesBtnClick);
destroyBoxesBtn.addEventListener("click", onDestoyBoxesBtnClick);

function onCreateBoxesBtnClick() {
  inputAmount.addEventListener;
  const amount = document.querySelector("#controls input").value;

  createBoxes(amount);

  document.querySelector("#controls input").value = "";
}

let boxesArr = [];

function createBoxes(amount) {
  const newBoxes = [];

  for (let i = boxesArr.length; i < Number(amount) + boxesArr.length; i += 1) {
    const box = document.createElement("div");
    const firstHeight = 30;
    const firstWidth = 30;

    box.style.height = `${firstHeight + i * 10}` + "px";
    box.style.width = `${firstWidth + i * 10}` + "px";
    box.style.backgroundColor = getRandomHexColor();

    newBoxes.push(box);
  }

  boxesDiv.append(...newBoxes);
  boxesArr.push(...newBoxes);
}

function onDestoyBoxesBtnClick() {
  boxesDiv.innerHTML = "";
  boxesArr = [];
}
