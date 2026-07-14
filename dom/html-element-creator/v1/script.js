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
  h1.textContent = "hi";
  space.appendChild(h1);
}
function createH2() {}
function createH3() {}
function createP() {}
function createBtn() {}
function createSquare() {}
function createCircle() {}
function createList() {}
[...buttons].forEach((button, index) => {
  button.addEventListener("click", () => {
    createFuncArray[index]();
  });
});
