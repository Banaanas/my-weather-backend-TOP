import dotenv from "dotenv";

// Loads environment variables from .env file
dotenv.config();

// Check if Environment Variables are available
// Especially for Production
console.log(dotenv.config());

// Set PORT
const { PORT } = process.env;

// SET GOOGLE API KEY
const { GOOGLE_API_KEY } = process.env;

// SET OPEN WEATHER MAP API KEY
const { OPEN_WEATHER_MAP_API_KEY } = process.env;

// SET PLACES.JS APP ID
const { PLACESJS_APP_ID } = process.env;

// SET PLACES.JS API KEY
const { PLACESJS_API_KEY } = process.env;

// SET PRODUCTION CLIENT URL
const { PRODUCTION_CLIENT_URL } = process.env;

// SET DEVELOPMENT CLIENT URL
const { DEVELOPMENT_CLIENT_URL } = process.env;

export default {
  PORT,
  GOOGLE_API_KEY,
  OPEN_WEATHER_MAP_API_KEY,
  PLACESJS_APP_ID,
  PLACESJS_API_KEY,
  PRODUCTION_CLIENT_URL,
  DEVELOPMENT_CLIENT_URL,
};
