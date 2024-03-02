import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TourDetails() {
  const [tour, setTour] = useState();
  const [key, setKey] = useState();
  const [keyVal, setKeyVal] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/tours/${id}`);
      const data = await res.json();
      setTour(data?.data);
      console.log(tour);
    })();
  }, [id]);
  const handleUpdate = () => {
    if (keyVal) {
      (async () => {
        const res = await fetch(`http://localhost:5000/api/tours/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            [key]: keyVal,
          }),
        });
        const data = await res.json();
        console.log(data);
        window.location.reload();
      })();
    }
  };
  const handleDelete = () => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/tours/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      window.location.reload();
    })();
  };
  const keyChange = (e) => {
    setKey(e.target.value);
  };
  return (
    <div>
      <h1>Name : {tour?.name}</h1>
      <b>{tour?.description}</b>
      <h3>Price : {tour?.price}</h3>
      <h3>Rating : {tour?.ratingsAverage}</h3>
      <button
        style={{
          width: "100px",
          cursor: "pointer",
          background: "red",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "8px",
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
      <hr />
      <Stack
        alignItems={"center"}
        flexDirection={"row"}
        gap={"60px"}
        width={"80%"}
        margin={"auto"}
      >
        <FormControl>
          <InputLabel>Key</InputLabel>
          <Select
            sx={{ width: "400px", height: "100px" }}
            value={key}
            onChange={keyChange}
          >
            <MenuItem value={"name"}>name</MenuItem>
            <MenuItem value={"price"}>price</MenuItem>
            <MenuItem value={"ratingsAverage"}>rating</MenuItem>
            <MenuItem value={"description"}>description</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          placeholder={key}
          multiline
          required
          fullWidth
          onChange={(e) => setKeyVal(e.target.value)}
          label={key}
          minRows={"3"}
          sx={{ width: "400px", alignItems: "center" }}
        />
      </Stack>
      <Stack width={"80%"} margin={"auto"}>
        <Button
          onClick={handleUpdate}
          sx={{ width: "860px" }}
          variant="contained"
          color="success"
        >
          Update Tour
        </Button>
      </Stack>
    </div>
  );
}
