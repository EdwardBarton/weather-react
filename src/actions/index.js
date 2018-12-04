const API_KEY = "5a6305ded7306f7187c4e5b53e78ac91";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  const request = fetch(url).then(resp => resp.json()).then(myJson => ({
    city: myJson.city,
    list: myJson.list
  }));

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}