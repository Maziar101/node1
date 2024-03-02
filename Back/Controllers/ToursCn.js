import fs from "fs";
const tourList = JSON.parse(fs.readFileSync("./data/tours-simple.json"));

export const getAllTours = (req, res) => {
  res.status(200).json({ data: tourList, status: "success" });
};
export const getTourById = (req, res) => {
  let data;
  const { id } = req.params;
  tourList?.map((e) => {
    if (e.id == id) {
      data = e;
    }
  });
  if (!data) {
    return res
      .status(404)
      .json({ data: null, status: "failed", message: "Tour not found" });
  }
  return res.status(200).json({ data, status: "success" });
};
export const deleteTour = (req, res) => {
  const { id } = req.params;
  const data = tourList?.filter((e) => {
    if (e.id == id) {
      return false;
    }
    return true;
  });
  fs.writeFile("./data/tours-simple.json", JSON.stringify(data), (err) => {
    return res.status(200).json(`Tour with id ${id} deleted successfully`);
  });
};
export const addTour = (req, res) => {
  const newTour = req.body;
  const newId = tourList.at(-1).id + 1;
  console.log(newId);
  if (
    !newTour?.description ||
    !newTour?.ratingsAverage ||
    !newTour?.name ||
    !newTour?.price
  ) {
    return res.status(401).json({
      status: "failed",
      message: "All fields are required",
    });
  }
  const newTr = { id: newId, ...newTour };
  fs.writeFile(
    "./data/tours-simple.json",
    JSON.stringify([...tourList, newTr]),
    (err) => {
      return res.status(201).json({ data: newTr, status: "success" });
    }
  );
};
export const updateTour = (req, res) => {
  const { id } = req.params;
  const newTour = req.body;
  const newTourArr = Object.entries(newTour);
  let add;
  const newTourAdd = tourList?.map((tour) => {
    if (tour.id == id) {
      newTourArr?.map((key) => {
        tour[key[0]] = key[1];
      });
      add = tour;
      return tour;
    }
    return tour;
  });

  fs.writeFile("./data/tours-simple.json", JSON.stringify(newTourAdd), (err) => {
    return res.status(201).json({ data: add, status: "success" });
  });
};
