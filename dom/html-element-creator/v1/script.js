const listTemplate = document.querySelector(".list-template");
const space = document.querySelector(".space");
const buttons = document.querySelectorAll(".btn");
const createFuncArray = [
  createH1,
  createH2,
  createH3,
  createP,
  createBtn,
  createSquare,
  createCircle,
  createList,
];
function createH1() {
  const h1 = document.createElement("h1");
  h1.textContent = "This is an H1 element!";
  space.appendChild(h1);
}
function createH2() {
  const h2 = document.createElement("h2");
  h2.textContent = "This is an H2 element!";
  space.appendChild(h2);
}
function createH3() {
  const h3 = document.createElement("h3");
  h3.textContent = "This is an H3 element!";
  space.appendChild(h3);
}
function createP() {
  const p = document.createElement("p");
  p.textContent = "This is a paragraph element!";
  space.appendChild(p);
}
function createBtn() {
  const btn = document.createElement("button");
  btn.textContent = "This is a button element!";
  btn.style.display = "block";
  space.appendChild(btn);
}
function createSquare() {
  const square = document.createElement("div");
  square.textContent = "Square";
  square.classList.add("square");
  space.appendChild(square);
}
function createCircle() {
  const circle = document.createElement("div");
  circle.textContent = "Circle";
  circle.classList.add("circle");
  space.appendChild(circle);
}
function createList() {
  const list = listTemplate.content.cloneNode(true);
  const li1 = list.querySelector(".li-1");
  const li2 = list.querySelector(".li-2");
  const li3 = list.querySelector(".li-3");
  const listTitle = document.createElement("p");
  listTitle.textContent = "This is a list!";
  listTitle.style.fontSize = `1.2rem`;
  list.prepend(listTitle);
  li1.textContent = "List item 1";
  li2.textContent = "List item 2";
  li3.textContent = "List item 3";
  space.appendChild(list);
}
[...buttons].forEach((button, index) => {
  button.addEventListener("click", () => {
    createFuncArray[index]();
  });
});
