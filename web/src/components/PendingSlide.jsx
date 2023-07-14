



import { Button, Card, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

function PendingSlide() {
  return (
    <TableRow
    sx={{justifyContent:'space-around'}}
    >
        <TableCell>title of the slides</TableCell>
      <TableCell>ahsan@admin.com</TableCell>
      <TableCell sx={{ color: "red" }}>Pending Slide</TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="success" variant="contained">
         Approve
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default PendingSlide;
