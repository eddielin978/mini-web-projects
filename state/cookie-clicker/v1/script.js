const perClickUpgradeBtn = document.querySelector(".cpc-upgrade-btn");
const perSecUpgradeBtn = document.querySelector(".cps-upgrade-btn");
const cookie = document.querySelector(".cookie");
const countText = document.querySelector(".cookie-count");
let perClick = 1;
let perSec = 2001;
let cookies = 0;
let playing = true;
let rateLimit = 1000 / perSec <= 4 ? true : false;
function updateCount() {
  countText.textContent = `Cookies: ${cookies.toFixed(0)}`;
}
const cpsInterval = setInterval(
  () => {
    rateLimit ? (cookies += perSec / 250) : (cookies += 1);
    updateCount();
  },
  rateLimit ? 4 : 1000 / perSec,
);
updateCount();
cookie.addEventListener("click", () => {
  cookies += perClick;
  updateCount();
});
