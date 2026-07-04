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
let ticks = 5;
let rateLimitVal = 200; // milliseconds of interval
let rateLimit = perSec === 0 ? false : perSec > ticks ? true : false;
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
let cpsInterval = setInterval(
  () => {
    rateLimit ? (cookies += perSec / ticks) : cookies++;
    updateCount(); // Updates the cookie-count span (see above)
  },
  rateLimit ? rateLimitVal : Math.floor(1000 / perSec),
);
if (perSec === 0) clearInterval(cpsInterval);

function updateBuildingAmountDisplay() {
  cpcBuildingCountText.textContent = `Amount: ${cpcBuildings}`;
  cpsBuildingCountText.textContent = `Amount: ${cpsBuildings}`;
}
updateBuildingAmountDisplay();

function updateBuildingAmounts(buildingType = "cpc" || "cps") {
  if (buildingType === "cpc") {
    cpcBuildings++;
  } else {
    cpsBuildings++;
  }
  updateBuildingAmountDisplay();
}

function updateCostDisplay() {
  cpcBuildingBtn.textContent = `Cost: ${cpcBuildingCost} cookies`;
  cpsBuildingBtn.textContent = `Cost: ${cpsBuildingCost} cookies`;
}
updateCostDisplay();

function updateCost(buildingType = "cpc" || "cps") {
  if (buildingType === "cpc") {
    cpcBuildingCost *= 2;
  } else {
    cpsBuildingCost *= 2;
  }
  updateCostDisplay();
}

function updateStat(buildingType = "cpc" || "cps") {
  if (buildingType === "cpc") {
    perClick += 1 + Math.floor(cpcBuildingCost / 80);
  } else {
    perSec += 1 + Math.floor(cpsBuildingCost / 160);
    updateCpsInterval();
  }
  updateCost(buildingType);
  updateBuildingAmounts(buildingType);
}

function updateCpsInterval() {
  clearInterval(cpsInterval);
  cpsInterval = setInterval(
    () => {
      rateLimit ? (cookies += perSec / ticks) : cookies++;
      updateCount(); // Updates the cookie-count span (see above)
    },
    rateLimit ? rateLimitVal : Math.floor(1000 / perSec),
  );
}

cpcBuildingBtn.addEventListener("click", () => {
  updateStat("cpc");
});
cpsBuildingBtn.addEventListener("click", () => {
  updateStat("cps");
});
