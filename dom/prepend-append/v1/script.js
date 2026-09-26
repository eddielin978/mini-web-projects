// Query Selectors
const prependBtn = document.querySelector(".prepend-btn");
const appendBtn = document.querySelector(".append-btn");
const removeBtn = document.querySelector(".remove-btn");
const list = document.querySelector(".list");

let totalItems = 0;

// Event listeners
prependBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${++totalItems}`;
  list.prepend(listItem);
});
appendBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${++totalItems}`;
  list.append(listItem);
});
removeBtn.addEventListener("click", () => {
  list.lastChild.remove();
});
