import express from "express";
import placesService from "../services/places-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Search-only API key (Safe to communicate to the Front-End)
    // https://discourse.algolia.com/t/hiding-admin-key-and-app-id/2335
    const response = await placesService.getPlaces();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

export default router;
