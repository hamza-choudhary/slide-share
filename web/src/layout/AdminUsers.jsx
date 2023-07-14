

import { Box, Paper, Table, TableBody, TableContainer, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import OrdinaryUser from "../components/OrdinaryUser";
function AdminUsers() {
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
     <Typography variant='h4'>Users</Typography>
      <Typography variant='body1' sx={{marginY:2}}>Ordinary Users</Typography>
     </Box>

     <Box>

     <TableContainer component={Paper} sx={{backgroundColor:'transparent' , ":hover":{cursor:'pointer'}}}>
    <Table sx={{ minWidth: 650 }}>
      <TableBody>
       <OrdinaryUser />
       <OrdinaryUser />
       <OrdinaryUser />
       <OrdinaryUser />
      </TableBody>
     </Table>
    </TableContainer>
     </Box>
     
        
    </Box>
  );
}

export default AdminUsers;
