import { Box, Button, CardMedia, Grid, Typography,} from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import pageNotFound from '../images/pageNotFound.png'
function PageNotFound() {
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
     <Typography variant='h4'>Page Not Found</Typography>
      <Typography variant='body1' sx={{marginY:2}}>Error 404 page not found</Typography>
     </Box>
     <Box sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
      <img src={pageNotFound} width={window.innerWidth/2} alt=''/>
      <Link style={{textDecoration:'none'}} to={'/'}>
      <Button variant='contained' sx={{textTransform:'capitalize' , marginY:5 }}>
        <Typography sx={{}}>Go To Home</Typography>
      </Button>
      </Link>
     </Box>
    </Box>
  )
}


export default PageNotFound