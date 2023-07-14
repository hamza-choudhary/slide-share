import { Box, Button, CircularProgress, FormControl, TextField, Typography } from "@mui/material";
import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useFormik } from "formik";
import signupSchema from "../schemas/signupSchema";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../services/postRequest";
import MyAlert from "../components/MyAlert";

function Signup() {
  const dispatch = useDispatch();
  const { myTheme} = useSelector((state) => state.customReducer);
  const[error , setError] = useState(false)
  const[loading , setLoading] = useState(false)
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        confirmPassword:"",
      },
      validationSchema: signupSchema,
      onSubmit: (values) => {
       
        signupRequest(values , (res)=>{
          setLoading(!loading)
          dispatch({ type: "setUser", payload: res.data.user });
          navigate('/')
        } , (err)=>{
          setError(err.response.data.error)
          values.email = ''
          values.password = ''
          values.confirmPassword = ''
          values.firstName = ""
          values.lastName = ''
        })
        
      },
    });
    useEffect(()=>{} , [loading])
  return (
    
    <Box
      sx={{
        backgroundColor: myTheme ? "#0F172A" : "#fff",
        color: !myTheme ? "#000" : "#fff",
        display: "flex",
        justifyContent: "center",
        padding: 5,
      }}
    >
      
      <Box sx={{ textAlign: "center", width:{lg:'40%',xs:'80%' , md:'60%'}  }}>
     
      {error&&<MyAlert severity={"error"} message={error} />}
        <Typography variant="h2">Signup</Typography>
        <Box sx={{ marginY: 5, display: "flex", flexDirection: "column" }}>
          <Button
            startIcon={<FacebookIcon />}
            sx={{ textTransform: "capitalize", paddingX: 3, marginTop: 2  , backgroundColor:'#e8fffb' ,color:'black' , ":hover":{color:myTheme?'white':'black'}}}
          >
            Continue with Facebook
          </Button>

          <Button
            startIcon={<TwitterIcon />}
            sx={{ textTransform: "capitalize", paddingX: 3, marginTop: 2  , backgroundColor:'#e8fffb' ,color:'black' , ":hover":{color:myTheme?'white':'black'}}}
          >
            Continue with twitter
          </Button>

          <Button
            startIcon={<GoogleIcon />}
            sx={{ textTransform: "capitalize", paddingX: 3, marginTop: 2  , backgroundColor:'#e8fffb' ,color:'black' , ":hover":{color:myTheme?'white':'black'}}}
          >
            Continue with google
          </Button>
        </Box>
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <Box sx={{ height: 2, backgroundColor: "gray" }}></Box>
          <Typography
            component={"span"}
            sx={{
              position: "absolute",
              top: -10,
              backgroundColor: myTheme ? "#0F172A" : "#fff",
              paddingX: 0.5,
            }}
          >
            OR
          </Typography>
        </Box>
        <FormControl sx={{ width: "100%", marginTop: 3 }}>
        <TextField
            name="firstName"
            type="text"
            placeholder="e.g ahsan"
            label="First Name"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{ marginTop: 2 }}
          />
          {errors.firstName && touched.firstName && (
            <Typography sx={{ textAlign: "left", color: "red" }}>
              {errors.lastName}
            </Typography>
          )}
           <TextField
            name="lastName"
            type="text"
            placeholder="e.g ahsan"
            label="Last Name"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{ marginTop: 2 }}
          />
          {errors.lastName && touched.lastName && (
            <Typography sx={{ textAlign: "left", color: "red" }}>
              {errors.lastName}
            </Typography>
          )}
          <TextField
            name="email"
            type="email"
            placeholder="e.g agsan@email.com"
            label="Email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{ marginTop: 2 }}
          />
          {errors.email && touched.email && (
            <Typography sx={{ textAlign: "left", color: "red" }}>
              {errors.email}
            </Typography>
          )}
          <TextField
          
            name="password"
            type="password"
            placeholder="enter least 8 characters"
            label="Password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{ marginTop: 2 }}
          />
          {errors.password && touched.password && (
            <Typography sx={{ textAlign: "left", color: "red" }}>
              {errors.password}
            </Typography>
          )}
          <TextField
            name="confirmPassword"
            type="password"
            placeholder="enter least 8 characters"
            label="Confirm Password"
            variant="outlined"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{ marginTop: 2 }}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <Typography sx={{ textAlign: "left", color: "red" }}>
              {errors.confirmPassword}
            </Typography>
          )}
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ padding: 1, marginTop: 2 , textTransform:'capitalize' }}
            disabled={loading?true:false}
          >
            {loading?<CircularProgress sx={{color:!myTheme?'white':'black'}}/>:<Typography>Signup</Typography>}
          </Button>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "#02b826",
            marginTop:2
          }}
        >
          <Typography onClick={goToLogin} sx={{ ":hover": { cursor: "pointer" } }}>
            already have a account ?
          </Typography>
         
        </Box>
      </Box>
    </Box>
  );
}

export default Signup ;
