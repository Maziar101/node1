import express from "express";
import { getAllTours } from "../Controllers/ToursCn.js";
const TourRoutes = express.Router();
TourRoutes.route("/").get(getAllTours);
export default TourRoutes;