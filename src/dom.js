import searchIcon from "./icons/search.svg";
import githubIcon from "./icons/github-mark-grey.svg";

const cityEl = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather.icon");

const conditionsEl = document.querySelector(".conditions");
const tempEl = document.querySelector(".temp");
const precipEl = document.querySelector(".precip");
const windEl = document.querySelector(".wind");
const uvEl = document.querySelector(".uv");
const sunriseEl = document.querySelector(".sunrise");
const sunsetEl = document.querySelector(".sunset");

export async function displayWeather(data) {
  cityEl.textContent = data.address;
  conditionsEl.textContent = `Conditions : ${data.conditions}`;
  tempEl.textContent = `Température : ${data.temp}°C`;
  precipEl.textContent = `Précipitations : ${data.precip} mm`;
  windEl.textContent = `Vent : ${data.windspeed} km/h`;
  uvEl.textContent = `UV Index : ${data.uvindex}`;
  sunriseEl.textContent = `Lever du soleil : ${data.sunrise}`;
  sunsetEl.textContent = `Coucher du soleil : ${data.sunset}`;
}

// Search Bar icon
const searchBtn = document.getElementById("searchBtn");
searchBtn.innerHTML = searchIcon;

// Footer logo
const link = document.querySelector(".github-link");
link.innerHTML = githubIcon;
const ghLogoSvg = link.querySelector("svg");
ghLogoSvg.classList.add("github-logo");
