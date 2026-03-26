const API_KEY = "Y67YGY99J3ZUQGB3CVW9PYB58";

export async function getWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`,
  );
  const data = await response.json();

  const { conditions, precip, sunrise, sunset, temp, uvindex, wind } =
    data.currentConditions;
  console.log(data);

  return {
    conditions,
    precip,
    sunrise,
    sunset,
    temp,
    uvindex,
    wind,
  };
}
