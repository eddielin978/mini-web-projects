const perClickUpgradeBtn = document.querySelector(".cpc-upgrade-btn");
const perSecUpgradeBtn = document.querySelector(".cps-upgrade-btn");
const cookie = document.querySelector(".cookie");
const countText = document.querySelector(".cookie-count");
let perClick = 1;
let perSec = 0;
let cookies = 0;
function updateCount() {
  countText.textContent = `Cookies: ${cookies}`;
}
updateCount();
cookie.addEventListener("click", () => {
  cookies++;
  updateCount();
});
