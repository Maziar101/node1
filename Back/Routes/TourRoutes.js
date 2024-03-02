import express from "express";
import { addTour, deleteTour, getAllTours, getTourById, updateTour } from "../Controllers/ToursCn.js";
const TourRoutes = express.Router();
TourRoutes.route("/").get(getAllTours).post(addTour);
TourRoutes.route("/:id").get(getTourById).delete(deleteTour).patch(updateTour);
export default TourRoutes;