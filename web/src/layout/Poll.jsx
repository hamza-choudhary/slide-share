import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SlideCard from "../components/SlideCard";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PollCard from "../components/PollCard";
function Poll() {
  const { myTheme } = useSelector((state) => state.customReducer);
  const navigate = useNavigate()
  const goToCreatePoll = ()=>{
    navigate('/poll/create')
  }
  const goToYourPoll = ()=>{
    navigate('/poll/your')
  }
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
     <Typography variant='h4'>Poll</Typography>
      <Typography variant='body1' sx={{marginY:2}}>See What people want</Typography>
     </Box>

     <Box>
        <Box sx={{textAlign:'right'}}>
        <Button onClick={goToCreatePoll} color="info">
            Create Poll
        </Button>
        <Button onClick={goToYourPoll} variant="contained" color="success">
            Your Poll
        </Button>
        </Box>
     </Box>

     <Grid container rowGap={2} columnGap={2} marginTop={5}>
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
     </Grid>
     
    </Box>
  );
}

export default Poll;
