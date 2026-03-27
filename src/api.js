const API_KEY = "Y67YGY99J3ZUQGB3CVW9PYB58";

export async function getWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`,
  );

  if (!response.ok) {
    throw new Error("Invalid city name");
  }

  const data = await response.json();
  console.log(data);

  const address = data.address;
  const timezone = data.timezone;
  const {
    conditions,
    datetimeEpoch,
    icon,
    precip,
    sunriseEpoch,
    sunsetEpoch,
    temp,
    uvindex,
    windspeed,
  } = data.currentConditions;

  return {
    address,
    conditions,
    datetimeEpoch,
    icon,
    precip,
    sunriseEpoch,
    sunsetEpoch,
    temp,
    timezone,
    uvindex,
    windspeed,
  };
}
