const form = document.querySelector(".form");
const userList = document.querySelector(".user-list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formEntries = Object.fromEntries(formData.entries());
  addUserToList(formEntries, userList);
  e.target.reset();
});
function addUserToList(entries, list) {
  let fragment = new DocumentFragment();
  const nameSpan = document.createElement("span");
  const emailSpan = document.createElement("span");
  const phoneSpan = document.createElement("span");
  nameSpan.textContent = `Name: ${entries?.name}`;
  emailSpan.textContent = `Email: ${entries?.email}`;
  phoneSpan.textContent = `Phone number: ${entries?.["phone-number"]}`;
  if (nameSpan.textContent !== "Name: ") {
    nameSpan.style.display = "block";
    fragment.append(nameSpan);
  }
  if (emailSpan.textContent !== "Email: ") {
    emailSpan.style.display = "block";
    fragment.append(emailSpan);
  }
  if (phoneSpan.textContent !== "Phone number: ") {
    phoneSpan.style.display = "block";
    fragment.append(phoneSpan);
  }
  list.append(document.createElement("li"));
  list.lastElementChild.append(fragment);
}
