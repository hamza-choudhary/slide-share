import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";

function PollCard() {
  return (
    <Grid item>
      <Card sx={{ backgroundColor: "transparent", padding: 4 }}>
        <FormControl>
          <FormLabel>Title of the Poll</FormLabel>
          <RadioGroup>
           <Box>
           <FormControlLabel
              value="1"
              control={<Radio />}
              label="label could be any one"
            />
            <Box
              sx={{
                width: "100%",
                height: 15,
                backgroundColor: "green",
                borderRadius: 10,
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  height: 15,
                  backgroundColor: "greenyellow",
                  borderRadius: 10,
                  textAlign:'center',
                  fontSize:13
                }}
              >

                60%
              </Box>
            </Box>
           </Box>

           <FormControlLabel
              value="2"
              control={<Radio />}
              label="label could be any one"
            />
            <Box
              sx={{
                width: "100%",
                height: 15,
                backgroundColor: "green",
                borderRadius: 10,
              }}
            >
              <Box
                sx={{
                  width: "40%",
                  height: 15,
                  backgroundColor: "greenyellow",
                  borderRadius: 10,
                  textAlign:'center',
                  fontSize:13
                }}
              >

                40%
              </Box>
            </Box>
          </RadioGroup>
          <Button sx={{marginTop:2}} color='info'>
            Submit
          </Button>
        </FormControl>
      </Card>
    </Grid>
  );
}

export default PollCard;
