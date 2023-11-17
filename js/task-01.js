// Task 1.1
const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

// Task 2.1
const categoriesItems = document.querySelectorAll(".item");
// console.log(categoriesItems);
categoriesItems.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});
