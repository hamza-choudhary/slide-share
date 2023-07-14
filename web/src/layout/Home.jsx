import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SlideCard from "../components/SlideCard";
import { useSelector } from "react-redux";
function Home() {
  const { myTheme } = useSelector((state) => state.customReducer);
  return (
    <Box
      sx={{
        backgroundColor: myTheme ? "#0F172A" : "#fff",
        color: !myTheme ? "#000" : "#fff",
        padding: {
          md: 5,
          xs: 4,
        },
      }}
    >
      <Box sx={{borderBottom:2 , borderBottomColor:'gray',marginBottom:5}}>
     <Typography variant='h4'>Discover. Share. Learn.</Typography>
      <Typography variant='body1' sx={{marginY:2}}>Share what you know and love through presentations, infographics, documents and more</Typography>
     </Box>
     
        <Grid container justifyContent={{xs:"center" , sm:'left'}} rowSpacing={2} columnSpacing={2}>
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        </Grid>
    </Box>
  );
}

export default Home;
