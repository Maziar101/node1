import express from "express";
import cors from "cors";
import morgan from "morgan";
import TourRoutes from "./Routes/TourRoutes.js";
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())
app.use("/api/tours", TourRoutes);



export default app;
