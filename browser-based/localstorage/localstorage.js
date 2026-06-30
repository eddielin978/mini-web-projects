let username = localStorage.getItem("username");
const resetBtn = document.querySelector(".reset");
const nameDisplay = document.querySelector(".nameDisplay");
const form = document.querySelector(".usernameForm");
if (username === null) {
  nameDisplay.textContent = "Name not set";
} else {
  nameDisplay.textContent = `Name: ${username}`;
}
resetBtn.addEventListener("click", () => {
  username = null;
  localStorage.removeItem("username");
  nameDisplay.textContent = "Name not set";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  username = formData.get("username");
  nameDisplay.textContent = `Name: ${username}`;
  localStorage.setItem("username", username);
});
