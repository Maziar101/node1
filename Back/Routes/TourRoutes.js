import express from "express";
import { deleteTour, getAllTours, getTourById } from "../Controllers/ToursCn.js";
const TourRoutes = express.Router();
TourRoutes.route("/").get(getAllTours);
TourRoutes.route("/:id").get(getTourById).delete(deleteTour);
export default TourRoutes;