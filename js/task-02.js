const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addIngregirntItemEl = ingredients.map((ingredient) => {
  let ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add("item");

  return ingredientsItemEl;
});

const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(...addIngregirntItemEl);
