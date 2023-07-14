import { Card, CardMedia, Typography , Box } from '@mui/material'
import React from 'react'

function RecommendedCard() {
  return (
    <Card
    sx={{
        display:'flex',
        width:280,
        gap:1,
        backgroundColor: "transparent",
        padding: 2,
        "&:hover": { cursor: "pointer" },
      }}
    >
        <Box>
        <CardMedia
        sx={{  height: 100,width: 150,}}
        image='https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        </Box>
        <Box>
            <Typography sx={{fontWeight:800}}>This is title of the slide</Typography>
            <Typography sx={{fontSize:12 , color:'gray'}}>Muhammad Ahsan</Typography>
            <Typography sx={{fontSize:10 , color:'gray'}}>70067 likes</Typography>
            
        </Box>
    </Card>
  )
}

export default RecommendedCard