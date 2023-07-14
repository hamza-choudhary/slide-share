import { Button, Card, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

function ProUser() {
  return (
    <TableRow
    sx={{justifyContent:'space-around'}}
    >
      <TableCell>ahsan@admin.com</TableCell>
      <TableCell sx={{ color: "goldenrod" }}>Pro User</TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="info" variant="contained">
          Make Ordinary
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ProUser;
