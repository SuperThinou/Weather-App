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
