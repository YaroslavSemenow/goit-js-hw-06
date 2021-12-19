let counterValue = 0;
const valueEl = document.querySelector("#value");
valueEl.textContent = counterValue;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function onIncrementBtnClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
