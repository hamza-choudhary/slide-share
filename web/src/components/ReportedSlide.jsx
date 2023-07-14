import { Button, Card, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

function ReportedSlide() {
  return (
    <TableRow
    sx={{justifyContent:'space-around'}}
    >
        <TableCell>title of the slides</TableCell>
      <TableCell>ahsan@admin.com</TableCell>
      <TableCell sx={{ color: "red" }}>Reported Slide</TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="success" variant="contained">
         Approve
        </Button>
      </TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="error" variant="contained">
         Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ReportedSlide;
