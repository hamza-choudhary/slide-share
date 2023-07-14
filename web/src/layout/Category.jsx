import { Box, Grid, Typography,} from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux";
import CategoryCard from '../components/CategoryCard';
function Category() {
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
     <Typography variant='h4'>Explore</Typography>
      <Typography variant='body1' sx={{marginY:2}}>Check out the latest on all your favorite topics</Typography>
     </Box>
     <Grid container justifyContent={{xs:"center" , sm:'left'}} rowSpacing={2} columnSpacing={1}>
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     </Grid>
    </Box>
  )
}


export default Category