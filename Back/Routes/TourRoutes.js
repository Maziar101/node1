import express from "express";
import { getAllTours, getTourById } from "../Controllers/ToursCn.js";
const TourRoutes = express.Router();
TourRoutes.route("/").get(getAllTours);
TourRoutes.route("/:id").get(getTourById);
export default TourRoutes;