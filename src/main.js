import favicon from "./assets/favicon.ico";

import "./style.css";
import "./dom";
import "./api";
import { getWeather } from "./api";
import { displayWeather } from "./dom";

async function init() {
  const weatherData = await getWeather("Miami");
  displayWeather(weatherData);
}

init();

// Favicon
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon";
link.href = favicon;
document.head.appendChild(link);