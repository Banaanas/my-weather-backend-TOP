import axios from "axios";
import config from "../utils/config.js";

const getLocation = async (lat, long) => {
  const APIKey = config.GOOGLE_API_KEY;
  try {
    const APIUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${APIKey}`;
    const response = await axios.get(APIUrl);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default {
  getLocation,
};
