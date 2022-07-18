import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import middlewares from "./utils/middlewares.js";
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import weatherRouter from "./routes/weather-router.js";
import locationRouter from "./routes/location-router.js";
import placesRouter from "./routes/places-router.js"; // Handle all the try/catch

const app = express();

// JSON Middleware
app.use(express.json());

// Get information about Requests
app.use(morgan("dev"));

// Cors
// Front End Origins : Backend Server(production) and localhost (development) URL
const allowedOrigins = [
  config.PRODUCTION_CLIENT_URL,
  config.DEVELOPMENT_CLIENT_URL,
];

const options = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.use(express.static("build"));
app.use(express.json());

// Routers
app.use("/api/weather", weatherRouter);
app.use("/api/location", locationRouter);
app.use("/api/places", placesRouter);

app.use(middlewares.unknownEndpoint);
app.use(middlewares.errorHandler);

// Catch All - Redirect All Requests to index.html - FRONT-END - PRODUCTION (build Folder)
// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
const __dirname = path.resolve(
  path.dirname(decodeURI(new URL(import.meta.url).pathname)),
);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(config.PORT, () => {
  logger.logInfo(`Server running on Port ${config.PORT}`);
});
