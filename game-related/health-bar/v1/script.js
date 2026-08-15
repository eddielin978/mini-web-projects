// Query Selectors
const healthText = document.querySelector(".health-text");
const healthBar = document.querySelector(".bar");
const healthContainer = document.querySelector(".bar-container");

// Variable initialization
let health = 100;

// Utility functions
const updateText = () => {
  healthText.textContent = `${health}/100`;
};

// Event listeners
healthContainer.addEventListener("click", () => {
  health -= 5;
  if (health < 0) health = 0;
  healthBar.style.width = `${health}%`;
  updateText();
});
