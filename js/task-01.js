const numberOfCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach((element) => {
  // console.log("Category:", element.firstElementChild.textContent);
  console.log("Category:", element.querySelector("h2").innerText);
  // console.log("Elements:", element.lastElementChild.children.length);
  console.log("Elements:", element.querySelectorAll("li").length);
});
