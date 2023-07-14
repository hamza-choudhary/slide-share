import React, { useEffect } from "react";
import { Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

function CategoryCard(props) {
  const navigate = useNavigate();
  const { myTheme } = useSelector((state) => state.customReducer);
  useEffect(() => {}, []);
  return (
    <Grid item>
      <Paper
        sx={{
          width: 200,
          backgroundColor: "transparent",
          padding: 2,
          "&:hover": { cursor: "pointer" },
          borderRadius: 10,
        }}
      >
      
          <CardMedia
            component="img"
            alt=" "
            image="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{borderRadius:5}}
          />

        <Typography
          variant="subtitle2"
          sx={{ marginY: 2, textAlign: "center" }}
        >
          title of the website
        </Typography>
      </Paper>
    </Grid>
  );
}

export default CategoryCard;
