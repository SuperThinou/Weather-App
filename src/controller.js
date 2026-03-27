import { getWeather } from "./api.js";
import { displayWeather, displayError } from "./dom.js";

export async function handleSearch(searchBar) {
  const city = searchBar.value.trim();
  if (city === "") return;

  searchBar.value = "";

  try {
    const weatherData = await getWeather(city);
    displayWeather(weatherData);
  } catch (error) {
    displayError(error.message);
  }
}
