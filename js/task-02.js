const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const listElements = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.innerText = ingredient;
  item.classList.add("item");
  return item;
});

listIngredients.append(...listElements);
