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
export const deleteTour = (req,res)=>{
    const {id} = req.params;
    const data = tourList?.filter((e)=>{
        if(e.id == id){
            return false;
        }
        return true;
    });
    fs.writeFile("./data/tours-simple.json",JSON.stringify(data),(err)=>{
        return res.status(200).json(`Tour with id ${id} deleted successfully`);
    });
};