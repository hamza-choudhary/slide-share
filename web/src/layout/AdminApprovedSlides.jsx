

import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, Typography } from "@mui/material";
import React from "react";
import SlideCard from "../components/SlideCard";
import { useSelector } from "react-redux";
import ApprovedSlide from "../components/ApprovedSlide";
function AdminApprovedSlides() {
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
     <Typography variant='h4'>Approved Slides</Typography>
      <Typography variant='body1' sx={{marginY:2}}>Approved slides</Typography>
     </Box>
     <TableContainer component={Paper} sx={{backgroundColor:'transparent' , ":hover":{cursor:'pointer'}}}>
    <Table sx={{ minWidth: 650 }}>
      <TableBody>
       <ApprovedSlide />
       <ApprovedSlide />
       <ApprovedSlide />
       <ApprovedSlide />
       <ApprovedSlide />
      </TableBody>
     </Table>
    </TableContainer>
     
    </Box>
  );
}

export default AdminApprovedSlides;
