// Query Selectors
const sequenceOneBtn = document.querySelector(".sq1");
const sequenceTwoBtn = document.querySelector(".sq2");
const sequenceDisplay = document.querySelector(".sq-display");

// Event Listeners
sequenceOneBtn.addEventListener("click", () => {
  sequenceDisplay.textContent = "1, 2, 3, 4, 5, ...";
  sequenceDisplay.style.border = "0.2rem solid black";
});
sequenceTwoBtn.addEventListener("click", () => {
  sequenceDisplay.textContent = "2, 4, 6, 8, 10, ...";
  sequenceDisplay.style.border = "0.2rem solid black";
});
