/**
 * OpenWeatherMap API
 */

const API_KEY = "3af4f9314712aaa35abae79714a0e18d";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 3000;

const getCurrentWeather = async (city) => {
    // get weather for city from OpenWeatherMap API
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

    // fake a slow api
    FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));

    // check if response is ok
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    // convert response from JSON
    const data = await response.json();

    // return current weather
    return data;
}
