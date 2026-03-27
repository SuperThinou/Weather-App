import searchIcon from "./icons/search.svg?inline";
import githubIcon from "./icons/github-mark-grey.svg?inline";
import { icons } from "./weather-icons";

console.log(githubIcon);

const cityEl = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");

const conditionsEl = document.querySelector(".conditions");
const tempEl = document.querySelector(".temp");
const precipEl = document.querySelector(".precip");
const windEl = document.querySelector(".wind");
const uvEl = document.querySelector(".uv");
const sunriseEl = document.querySelector(".sunrise");
const sunsetEl = document.querySelector(".sunset");

export async function displayWeather(data) {
  cityEl.textContent = data.address;
  weatherIcon.src = icons[data.icon];
  conditionsEl.textContent = data.conditions;
  tempEl.textContent = data.temp + "°C";
  precipEl.textContent = `Precipitations : ${data.precip} mm`;
  windEl.textContent = `Wind : ${data.windspeed} km/h`;
  uvEl.textContent = `UV Index : ${data.uvindex}`;
  sunriseEl.textContent = `Sunrise : ${data.sunrise}`;
  sunsetEl.textContent = `Sunset : ${data.sunset}`;
}

// Search Bar icon
const searchBtn = document.getElementById("searchBtn");
searchBtn.innerHTML = searchIcon;

// Footer logo
const link = document.querySelector(".github-link");
link.innerHTML = githubIcon;
const ghLogoSvg = link.querySelector("svg");
ghLogoSvg.classList.add("github-logo");
