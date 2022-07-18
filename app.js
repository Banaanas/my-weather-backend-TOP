import express from "express";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors"; // Handle all the try/catch
import path from "path";

// Next() is not need anymore thanks to "express-async-errors" library;
// Handle all the try/catch
// Routers
import weatherRouter from "./controllers/weather-router.js";

// Utils
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import middlewares from "./utils/middlewares.js";

const app = express();

// Log Info
logger.logInfo("Set the hidden API KEY : ", config.API_KEY);

// ** Middlewares ** //

// Get information about Requests
app.use(morgan("dev"));

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

// Routers
app.use("/api/weather", weatherRouter);

// Catch All - Redirect All Requests to index.html - FRONT-END - PRODUCTION (build Folder)
// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
const __dirname = path.resolve(
  path.dirname(decodeURI(new URL(import.meta.url).pathname)),
);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(middlewares.unknownEndpoint);
app.use(middlewares.errorHandler);

export default app;
