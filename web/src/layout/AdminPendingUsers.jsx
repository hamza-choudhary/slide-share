import { Box, Paper, Table, TableBody, TableContainer, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import PendingUser from "../components/PendingUser";
function AdminPendingUsers() {
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
     <Typography variant='h4'>Pending Users</Typography>
      <Typography variant='body1' sx={{marginY:2}}>They must verify their email</Typography>
     </Box>

     <TableContainer component={Paper} sx={{backgroundColor:'transparent' , ":hover":{cursor:'pointer'}}}>
    <Table sx={{ minWidth: 650 }}>
      <TableBody>
        <PendingUser />
        <PendingUser />
        <PendingUser />
        <PendingUser />
        <PendingUser />
      </TableBody>
     </Table>
    </TableContainer>
     
        
    </Box>
  );
}

export default AdminPendingUsers;
