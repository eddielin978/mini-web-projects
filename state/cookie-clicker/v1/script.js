// Cookie Clicker Script

// Query selectors to read DOM
const perClickUpgradeBtn = document.querySelector(".cpc-upgrade-btn");
const perSecUpgradeBtn = document.querySelector(".cps-upgrade-btn");
const cookie = document.querySelector(".cookie");
const countText = document.querySelector(".cookie-count");
const cpsDisplay = document.querySelector(".cps-display");
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
let rateLimit = perSec !== 0 && perSec > ticks;
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

function updateCpsDisplay() {
  cpsDisplay.textContent = `per second: ${perSec}`;
}
updateCpsDisplay();

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
    cpcBuildingCost = Math.floor(cpcBuildingCost * 1.6);
  } else {
    cpsBuildingCost = Math.floor(cpsBuildingCost * 1.6);
  }
  updateCostDisplay();
}

function updateStat(buildingType = "cpc" || "cps") {
  if (buildingType === "cpc") {
    perClick += 1 + Math.floor(cpcBuildingCost / 100);
  } else {
    perSec += 1 + Math.floor(cpsBuildingCost / 200);
    updateCpsInterval();
    updateCpsDisplay();
  }
  updateCost(buildingType);
  updateBuildingAmounts(buildingType);
}

function updateCpsInterval() {
  rateLimit = perSec !== 0 && perSec > ticks;
  clearInterval(cpsInterval);
  cpsInterval = setInterval(
    () => {
      rateLimit ? (cookies += perSec / ticks) : cookies++;
      updateCount(); // Updates the cookie-count span (see above)
    },
    rateLimit ? rateLimitVal : Math.floor(1000 / perSec),
  );
}

const reduceCookies = (num) => {
  cookies -= num;
  updateCount();
};

cpcBuildingBtn.addEventListener("click", () => {
  if (cookies >= cpcBuildingCost) {
    reduceCookies(cpcBuildingCost);
    updateStat("cpc");
  }
});
cpsBuildingBtn.addEventListener("click", () => {
  if (cookies >= cpsBuildingCost) {
    reduceCookies(cpsBuildingCost);
    updateStat("cps");
  }
});
