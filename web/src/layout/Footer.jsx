import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Logo1 from "../images/Logo1.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  const { myTheme } = useSelector((state) => state.customReducer);
  return (
    <Box
      sx={{
        borderTop: 2,
        borderTopColor: "gray",
        backgroundColor: myTheme ? "#0F172A" : "#fff",
        color: !myTheme ? "#000" : "#fff",
        display:'flex',
        flexDirection:{
          md:'row',
          xs:'column'
        },
        alignItems:'center',
        justifyContent:'space-between',
        padding:2
      }}
    >
      <img src={Logo1} alt="" width={250}/>
      <Typography variant="body2" sx={{ fontSize: "11" }}>
        © 2023 this website is property of www.ezeelogix.com
      </Typography>
      <Box>
        <IconButton>
          <FacebookOutlinedIcon fontSize="large"/>
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize="large"/>
        </IconButton>
        <IconButton>
          <LinkedInIcon fontSize="large"/>
        </IconButton>
      </Box>

    </Box>
  );
}

export default Footer;
