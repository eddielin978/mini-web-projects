const buttons = document.querySelectorAll(".button-row button");
const grids = document.querySelectorAll(".grid");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => button.classList.remove("active-btn"));
    button.classList.add("active-btn");
    grids.forEach((grid) => {
      grid.classList.add("hidden");
      if (grid.classList.contains(button.dataset.target)) {
        grid.classList.remove("hidden");
      }
    });
  });
});
