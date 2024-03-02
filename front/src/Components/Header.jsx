import { AppBar, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <AppBar sx={{ padding: "20px" }}>
        <Stack flexDirection={"row"} gap={"20px"}>
          <Link to={"/"} style={{ fontSize:"20px", color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to={"/add-tour"} style={{ fontSize:"20px", color: "white", textDecoration: "none" }}>
            Add Tour
          </Link>
        </Stack>
      </AppBar>
    </>
  );
}
