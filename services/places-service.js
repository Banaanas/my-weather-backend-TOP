import config from "../utils/config.js";

const getPlaces = async () => {
  // Search-only API key (Safe to communicate to the Front-End)
  // https://discourse.algolia.com/t/hiding-admin-key-and-app-id/2335
  const APPId = config.PLACESJS_APP_ID;
  const APIKey = config.PLACESJS_API_KEY;

  const response = { APPId, APIKey };
  try {
    return response;
  } catch (error) {
    return error.message;
  }
};

export default {
  getPlaces,
};
