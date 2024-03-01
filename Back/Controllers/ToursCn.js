import fs from "fs";
const tourList = JSON.parse(fs.readFileSync("./data/tours-simple.json"));

export const getAllTours = (req, res) => {
  res.status(200).json({ data: tourList, status: "success" });
};
