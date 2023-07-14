

import { Box, Grid, Paper, Table, TableBody, TableContainer, Typography } from "@mui/material";
import React from "react";
import SlideCard from "../components/SlideCard";
import { useSelector } from "react-redux";
import PendingSlide from "../components/PendingSlide";
function AdminPendingSlides() {
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
     <Typography variant='h4'>Pending slides</Typography>
      <Typography variant='body1' sx={{marginY:2}}>these slides need your approval</Typography>
     </Box>
     
     <TableContainer component={Paper} sx={{backgroundColor:'transparent' , ":hover":{cursor:'pointer'}}}>
    <Table sx={{ minWidth: 650 }}>
      <TableBody>
       <PendingSlide/>
       <PendingSlide/>
       <PendingSlide/>
       <PendingSlide/>
      </TableBody>
     </Table>
    </TableContainer>
    </Box>
  );
}

export default AdminPendingSlides;
