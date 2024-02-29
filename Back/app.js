import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));
app.use(cors());






export default app;
