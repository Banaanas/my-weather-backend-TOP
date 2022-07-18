import express from "express";
import locationService from "../services/location-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { lat, long } = req.query;
    const response = await locationService.getLocation(lat, long);
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

export default router;
