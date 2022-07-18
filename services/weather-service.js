import axios from "axios";
import config from "../utils/config.js";

const getWeather = async (lat, long) => {
  const APIKey = config.OPEN_WEATHER_MAP_API_KEY;
  try {
    const APIUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${APIKey}`;
    const response = await axios.get(APIUrl);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default {
  getWeather,
};
