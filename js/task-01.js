const listEl = document.querySelector("#categories");
const arrCategoriesEl = listEl.children;

console.log("Number of categories:", arrCategoriesEl.length);

[...arrCategoriesEl].map((el) => {
  console.log("Category:", el.querySelector("h2").textContent);
  console.log("Elements:", el.querySelectorAll("li").length);
});
