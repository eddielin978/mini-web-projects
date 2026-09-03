// Query Selectors
const resultText = document.querySelector(".result-txt");
const rollBtn = document.querySelector(".chest-btn");

function roll() {
  const outcomes = ["A", "B", "C", "D", "E"];
  const result = outcomes[Math.floor(Math.random() * outcomes.length)];
  return result;
}

rollBtn.addEventListener("click", () => {
  resultText.textContent = "Result: Card " + roll();
});
