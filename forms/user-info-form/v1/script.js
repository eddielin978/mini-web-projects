const form = document.querySelector(".form");
const userList = document.querySelector(".user-list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formEntries = Object.fromEntries(formData.entries());
  userList.textContent = formEntries.name;
  e.target.reset();
});
