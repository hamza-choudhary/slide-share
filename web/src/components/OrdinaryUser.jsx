import { Button, Card, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

function OrdinaryUser() {
  return (
    <TableRow
    sx={{justifyContent:'space-around'}}
    >
      <TableCell>ahsan@admin.com</TableCell>
      <TableCell sx={{ color: "green" }}>Ordinary User</TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="warning" variant="contained">
       Make Pro
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default OrdinaryUser;
