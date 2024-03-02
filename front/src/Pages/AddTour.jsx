import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Rating } from "@mui/material";


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const [stars,setStars] = useState();
  const [desc,setDesc] = useState();
  const [price,setPrice] = useState();
  const [name,setName] = useState();
  const handleAdd = ()=>{
    if(stars && desc && price && name){
        (async()=>{
            const res = await fetch("http://localhost:5000/api/tours",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    description: desc,
                    price: price,
                    ratingsAverage: stars
                })
                
            });
            const data = await res.json();
            console.log(data);
            window.location.href = "/";
        })();
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Tour
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              onChange={(e)=>setName(e.target.value)}
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setPrice(e.target.value)}
              name="Price"
              label="Price"
              type="Price"
              id="Price"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              placeholder="Description"
              onChange={(e)=>setDesc(e.target.value)}
              multiline
              required
              fullWidth
              label="Description"
              maxRows={4}
            />
            <Rating value={stars} onChange={(e,newValue)=>setStars(newValue)}/>
            <Button
              type="button"
              fullWidth
              onClick={handleAdd}
              variant="contained"
              sx={{ mt: 3, mb: 2 , background:"green"}}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
