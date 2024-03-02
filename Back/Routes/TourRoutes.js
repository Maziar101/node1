import express from "express";
import { addTour, deleteTour, getAllTours, getTourById } from "../Controllers/ToursCn.js";
const TourRoutes = express.Router();
TourRoutes.route("/").get(getAllTours).post(addTour);
TourRoutes.route("/:id").get(getTourById).delete(deleteTour);
export default TourRoutes;