import { Button, Card, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

function PendingUser() {
  return (
    <TableRow
    sx={{justifyContent:'space-around'}}
    >
      <TableCell>ahsan@admin.com</TableCell>
      <TableCell sx={{ color: "red" }}>Pending</TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="success" variant="contained">
          Verify Email
        </Button>
      </TableCell>
      <TableCell>
        <Button sx={{ color: "white" }} color="error" variant="contained">
          Delete User
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default PendingUser;
