// Query Selectors
const healthText = document.querySelector(".health-text");
const healthBar = document.querySelector(".bar");

// Variable initialization
let health = 100;

// Utility functions
const updateText = () => {
  healthText.textContent = `${health}/100`;
};

// Event listeners
healthBar.addEventListener("click", () => {
  health -= 5;
  healthBar.style.width = `${health}%`;
  updateText();
});
