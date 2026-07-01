// Cookie Clicker Script

// Query selectors to read DOM
const perClickUpgradeBtn = document.querySelector(".cpc-upgrade-btn");
const perSecUpgradeBtn = document.querySelector(".cps-upgrade-btn");
const cookie = document.querySelector(".cookie");
const countText = document.querySelector(".cookie-count");
const cpcBuildingCountText = document.querySelector(".cpc-building .building-count");
const cpsBuildingCountText = document.querySelector(".cps-building .building-count");
const cpcBuildingBtn = document.querySelector(".cpc-building-btn");
const cpsBuildingBtn = document.querySelector(".cps-building-btn");

// Variable declaration
let perClick = 1; // Cookies per click (eventually upgradable; starts at 1)
let perSec = 0; // Cookies per second (eventually upgradable; starts at 0)
let cookies = 0; // Amount of cookies (increased by perClick and perSec; starts at 0)
let rateLimit = perSec === 0 ? false : 1000 / perSec <= 4 ? true : false; // setInterval() has a rate-limit of 4ms (250 iterations per second)
let cpcBuildings = 0;
let cpsBuildings = 0;
let initialCost = 10;
let cpcBuildingCost = initialCost;
let cpsBuildingCost = initialCost;

// Updates the span that shows how many cookies the user has
function updateCount() {
  countText.textContent = `Cookies: ${cookies.toFixed(0)}`;
}
updateCount();

// Increments cookie amount when the cookie is clicked
cookie.addEventListener("click", () => {
  cookies += perClick; // If perClick is upgraded, cookies scale faster
  updateCount(); // Updates the cookie-count span (see above)
});

// Cookies per second interval
// setInterval() has a rate-limit of 4ms (250 iterations per second)
const cpsInterval = setInterval(
  () => {
    rateLimit ? (cookies += perSec / 250) : (cookies += 1);
    updateCount(); // Updates the cookie-count span (see above)
  },
  rateLimit ? 4 : 1000 / perSec,
);
if (perSec === 0) clearInterval(cpsInterval);

function updateBuildingCount() {
  cpcBuildingCountText.textContent = `Amount: ${cpcBuildings}`;
  cpsBuildingCountText.textContent = `Amount: ${cpsBuildings}`;
}
updateBuildingCount();

function updateCostDisplay() {
  cpcBuildingBtn.textContent = `Cost: ${cpcBuildingCost} cookies`;
  cpsBuildingBtn.textContent = `Cost: ${cpsBuildingCost} cookies`;
}
updateCostDisplay();

function updateCost(buildingType = "cpc" || "cps") {
  if (buildingType === "cpc") {
    cpcBuildingCost *= 4;
  } else {
    cpsBuildingCost *= 4;
  }
  updateCostDisplay();
}

function updateStat(buildingType = "cpc" || "cps") {
  if (buildingType === "cpc") {
    perClick += 3 + Math.floor(cpcBuildingCost / 40);
  } else {
    perSec++;
  }
  updateCost(buildingType);
}

cpcBuildingBtn.addEventListener("click", () => {
  updateStat("cpc");
});
cpsBuildingBtn.addEventListener("click", () => {
  updateStat("cps");
});
