import { Box, Button, CardMedia, FormControl, MenuItem, Select, TextField, Typography,} from '@mui/material'
import FileUpload from "react-mui-fileuploader"
import React from 'react'
import { useSelector } from "react-redux";
import pageNotFound from '../images/pageNotFound.png'
function Upload() {
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
     <Typography variant='h4'>Add information to your upload</Typography>
      <Typography variant='body1' sx={{marginY:2}}>Tip: Better titles and descriptions lead to more readers</Typography>
     </Box>
     <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
      <Box sx={{border:{md:2} , padding:{md:5} , borderRadius:{md:10}}}>
      <Box sx={{display:{md:'flex'} , alignItems:'center' , gap:2 }}>
          <FileUpload
          title=''
          header='Drag and Drop'
          leftLabel='or'
          rightLabel=''
          ContainerProps={{
            sx: { borderRadius:5 , padding:1 }
          }}
          bannerProps={{
            sx:{backgroundColor:'black' , borderRadius:5 , marginLeft:0 , marginTop:3 }
          }}
          />
          <Typography variant='h4' sx={{marginTop:{xs:2}}}>titile of the file</Typography>
      </Box>
      <FormControl sx={{marginTop:5 , gap:2 , width:'100%'}}>
      <Typography>Tittle</Typography>
        <TextField
      
        />
        <Typography>Description</Typography>
        <TextField
       
        multiline
        />
        <Typography>Category</Typography>
        <Select
        >
          <MenuItem>category 1</MenuItem>
          <MenuItem>category 2</MenuItem>
          <MenuItem>category 3</MenuItem>
        </Select>
        <Button variant='contained' sx={{textTransform:'capitalize' , padding:1}}>
          <Typography>Upload</Typography>
        </Button>
      
      </FormControl>
      </Box>
      
    
     </Box>
     
    </Box>
  )
}


export default Upload