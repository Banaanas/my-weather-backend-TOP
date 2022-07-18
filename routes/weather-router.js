import express from "express";
import weatherService from "../services/weather-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { lat, long } = req.query;
    const response = await weatherService.getWeather(lat, long);
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
