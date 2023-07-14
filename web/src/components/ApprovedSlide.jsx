
import { Button, Card, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

function ApprovedSlide() {
  return (
    <TableRow
    sx={{justifyContent:'space-around'}}
    >
        <TableCell>title of the slides</TableCell>
      <TableCell>ahsan@admin.com</TableCell>
      <TableCell sx={{ color: "green" }}>Approved Slide</TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="error" variant="contained">
         MAke UnApproved
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ApprovedSlide;
