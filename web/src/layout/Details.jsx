import {
  Box,
  Button,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RecommendedCard from "../components/RecommendedCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DownloadIcon from "@mui/icons-material/Download";
import ReportIcon from "@mui/icons-material/Report";
function Details() {
  const { myTheme } = useSelector((state) => state.customReducer);
  return (
    <Box
      sx={{
        backgroundColor: myTheme ? "#0F172A" : "#fff",
        color: !myTheme ? "#000" : "#fff",
        paddingY: 5,
        paddingX: {
          xs: 5,
          md: 15,
        },
      }}
    >
      <Box sx={{ borderBottom: 2, borderBottomColor: "gray", marginBottom: 5 }}>
        <Typography variant="h4">Details page</Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          Check out the latest on all your favorite topics
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: { md: "flex" }, gap: 3 }}>
          <Box  >
            <Carousel showThumbs={false} showStatus={false} swipeable >
             <CardMedia
             image="https://images.pexels.com/photos/2605030/pexels-photo-2605030.jpeg?auto=compress&cs=tinysrgb&w=600"
             sx={{width:'100%' , height:{md:window.innerHeight-window.innerHeight/3 , xs:200}}}
             />
            </Carousel>
            <Box sx={{ marginTop: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { md: "row", xs: "column" },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="h5">
                    Titlte of the slides goes here
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    Nov. 19, 2015 • 223 likes • 21,050 views
                  </Typography>
                </Box>
                <Button startIcon={<DownloadIcon />} variant="contained">
                  <Typography>Download</Typography>
                </Button>
              </Box>
            </Box>
            <Box>
              <Tooltip title="like">
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="report">
                <IconButton>
                  <ReportIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Typography sx={{textAlign:'justify'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Box sx={{display:"flex" , alignItems:'center' , gap:2 , marginTop:2 }}>
              <Typography sx={{":hover":{cursor:"pointer"}}} variant="h5">Muhmmad ahsan</Typography>
              <Button color="info" variant="outlined">
                Follow
              </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;
