const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputElInput);

function onInputElInput(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
