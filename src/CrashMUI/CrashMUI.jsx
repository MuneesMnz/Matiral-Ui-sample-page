import React from 'react'

import { Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";

const BlueButton=styled(Button)({
  backgroundColor: "skyblue",
  color: "#888",
  margin: 5,
  "&:hover": {
    background: "green",
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
})

const OtherButton=styled(Button)(({theme})=>({
  backgroundColor: theme.palette.otherColor.main,
  color: "#888",
  margin: 5,
  "&:hover": {
    background: "green",
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
}))

function CrashMUI() {
  return (
    <div>
      <Button variant="text">Add Name</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="otherColor"
        size="small"
      >
        Add New Item
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="p">
        Its A p Tag But Using H1 Styles
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            background: "green",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
        
      >
        My Custom Button
      </Button>

      <BlueButton>Good Morning</BlueButton>
      <BlueButton>Good Evng </BlueButton>
      <OtherButton>Other Color</OtherButton>
    </div>
  );
}


export default CrashMUI
