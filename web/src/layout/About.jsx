import { Avatar, Box,  Button,  Grid,  Typography,} from '@mui/material'
import { width } from '@mui/system';
import React from 'react'
import { useSelector } from "react-redux";
import SlideCard from '../components/SlideCard';

function About() {
  const { myTheme } = useSelector((state) => state.customReducer);
  return (
    <Box
      sx={{
        backgroundColor: myTheme ? "#0F172A" : "#fff",
        color: !myTheme ? "#000" : "#fff",
        paddingY:5,
        paddingX: {
          xs:5,
          md:15
        },
      }}
    >
     <Box sx={{borderBottom:2 , borderBottomColor:'gray',marginBottom:5}}>
     <Typography variant='h4'>About page</Typography>
      <Typography variant='body1' sx={{marginY:2}}>Check out the latest on all your favorite topics</Typography>
     </Box>
     <Box sx={{display:{md:'flex'} , gap:{md:3}}}>
      <Box sx={{color:'gray' , display:'flex', flexDirection:'column' , gap:1, width:{md:window.innerWidth/3 } , textAlign:'justify'}}>
        <Avatar sx={{width:100 , height:100}}></Avatar>
        <Typography sx={{marginY:2 , color:'black'}} variant='h5'>Name of the person</Typography>
        <Typography>119 slides</Typography>
        <Typography>217 Followers</Typography>
        <Typography>512 following</Typography>
        <Button variant='contained'>
          Follow
        </Button>
        <Typography sx={{fontWeight:800 , color:'black'}}>About</Typography>
        <Typography>
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
      </Box>
      <Box>
      <Grid container justifyContent={{xs:"center" , sm:'left'}} rowSpacing={2} columnSpacing={2} >
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        </Grid>
      </Box>
     </Box>
    </Box>
  )
}


export default About

