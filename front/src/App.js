import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TourDetails from "./Pages/Tour-details";
import AddTour from "./Pages/AddTour";
import Header from "./Components/Header";
import { Stack } from "@mui/material";
export default function App() {
  return (
    <>
      <Header />
      <Stack marginTop={"50px"}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tours/:id/:name" element={<TourDetails />} />
          <Route path="/add-tour" element={<AddTour />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Stack>
    </>
  );
}
