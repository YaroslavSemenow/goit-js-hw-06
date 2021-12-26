const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
const blankName = nameOutputEl.textContent;

nameInputEl.addEventListener("input", onNameInputElInput);

function onNameInputElInput(event) {
  nameOutputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameOutputEl.textContent = blankName;
  }
}
