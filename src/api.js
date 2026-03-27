const API_KEY = "Y67YGY99J3ZUQGB3CVW9PYB58";

export async function getWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`,
  );

  if (!response.ok) {
    throw new Error("Invalid city name");
  }

  const data = await response.json();

  const address = data.address;
  const {
    conditions,
    icon,
    precip,
    sunrise,
    sunset,
    temp,
    uvindex,
    windspeed,
  } = data.currentConditions;

  return {
    address,
    conditions,
    icon,
    precip,
    sunrise,
    sunset,
    temp,
    uvindex,
    windspeed,
  };
}
