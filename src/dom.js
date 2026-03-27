import searchIcon from "./icons/search.svg?inline";
import githubIcon from "./icons/github-mark-grey.svg?inline";
import { icons } from "./weather-icons";
import {
  capitalize,
  formatTimeWithTimezone,
  getLocalTimeInCity,
} from "./utils";
import { handleSearch } from "./controller";

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

const cityEl = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");

const conditionsEl = document.querySelector(".conditions");
const tempEl = document.querySelector(".temp");
const precipEl = document.querySelector(".precip");
const windEl = document.querySelector(".wind");
const uvEl = document.querySelector(".uv");
const sunriseEl = document.querySelector(".sunrise");
const currentTimeEl = document.querySelector(".current-time");
const sunsetEl = document.querySelector(".sunset");

export async function displayWeather(data) {
  cityEl.textContent = capitalize(data.address);
  weatherIcon.src = icons[data.icon];
  conditionsEl.textContent = data.conditions;
  tempEl.textContent = data.temp + "°C";
  precipEl.textContent = `${data.precip} mm`;
  windEl.textContent = `${data.windspeed} km/h`;
  uvEl.textContent = data.uvindex;

  const sunriseDate = new Date(data.sunriseEpoch * 1000);
  const currentDate = new Date().toLocaleTimeString("fr-FR", {
    timeZone: data.timezone,
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetDate = new Date(data.sunsetEpoch * 1000);

  sunriseEl.textContent = formatTimeWithTimezone(
    data.sunriseEpoch,
    data.timezone,
  );

  currentTimeEl.textContent = currentDate;
  sunsetEl.textContent = formatTimeWithTimezone(
    data.sunsetEpoch,
    data.timezone,
  );
}

export function displayError(message) {
  const errorEl = document.querySelector(".error");

  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
}

// Event listeners
searchBtn.addEventListener("click", () => handleSearch(searchBar));

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch(searchBar);
});

searchBar.addEventListener("input", () => {
  displayError("");
});

// Search Bar icon
searchBtn.innerHTML = searchIcon;

// Footer logo
const link = document.querySelector(".github-link");
link.innerHTML = githubIcon;
const ghLogoSvg = link.querySelector("svg");
ghLogoSvg.classList.add("github-logo");
