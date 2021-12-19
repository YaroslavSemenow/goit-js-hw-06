const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }

    input.classList.add("valid");
    return;
  }

  input.classList.add("invalid");
}
