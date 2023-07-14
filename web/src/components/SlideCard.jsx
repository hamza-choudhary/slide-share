import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import FadeIn from "react-fade-in/lib/FadeIn";
import DownloadIcon from "@mui/icons-material/Download";
import { Link, } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
function SlideCard(props) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const { myTheme } = useSelector((state) => state.customReducer);
 
  useEffect(() => {
    if (window.innerWidth < 900) {
      setMouseEnter(true);
    }
  }, []);
  return (
    <Grid item>
      <Link to={'/detail/id'} style={{textDecoration:'none'}}>
      <Card
        sx={{
          width: 280,
          backgroundColor: "transparent",
          padding: 2,
          "&:hover": { cursor: "pointer" },
          borderRadius: 10,
        }}
      >
        <Card
          sx={{
            backgroundColor: !myTheme ? "#F8FAFC" : "#CBDFE1",
            boxShadow: "none",
            height: 280,
            borderRadius: 10,
            
          }}
          component={"div"}
          onMouseOver={() => {
            setMouseEnter(true);
          }}
          onMouseOut={() => {
            setMouseEnter(false);
          }}
        >
          <CardMedia
            component="img"
            alt=" "
            image="https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{padding:1 ,width:265 , borderRadius:10}}
  
          />
          {mouseEnter && (
            <FadeIn delay={200}>
              <Box sx={{ display: "flex", justifyContent: "space-around"  }}>
               
                <Button
                  startIcon={<ThumbUpIcon />}
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 5,
                    "&:hover": { backgroundColor: "white", color: "black" },
                    fontSize: 8,
                  }}
                  
                  >
                  <Typography variant="body2">Follow</Typography>
                </Button>
                <Button
                  startIcon={<DownloadIcon />}
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 5,
                    fontSize: 8,
                  }}
                >
                  <Typography variant="body2">Download</Typography>
                </Button>
              </Box>
            </FadeIn>
          )}
        </Card>
        <Box sx={{ marginTop: 2, color: !myTheme ? "black" : "white" }}>
          <Link to={'/about/ahsan'} style={{textDecoration:'none'}}>

          <Typography
            variant="subtitle2"
            sx={{ marginLeft: 2, color: "#2dbbfc", fontSize: 11 }}
            >
            Muhammad Ahsan
          </Typography>
            </Link>
          <Typography variant="subtitle2" sx={{ margin: 1 }}>
            title of the website
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 10, color: "gray" }}
              variant="subtitle2"
            >
              67778 likes
            </Typography>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
      </Link>
    </Grid>
  );
}

export default SlideCard;
