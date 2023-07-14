import {
  Avatar,
  Box,
  Button,
  FormControl,
  Input,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { useFormik } from "formik";
import updateSchema from "../schemas/updateSchema";
import { aboutMeRequest, logout } from "../services/getRequest";
import SlideCard from "../components/SlideCard";
import { useNavigate } from "react-router-dom";
function UserProfile() {
  const { myTheme, userData } = useSelector((state) => state.customReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: userData.avatar,
        email: userData.email,
        about: userData.about,
      },
      validationSchema: updateSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
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
        <Typography variant="h4">Profile</Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          Muhammad Ahsan
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            paddingX: { xl: 30, md: 15 },
            display: { md: "flex" },
            gap: { md: 10 },
            border: { md: 2 },
            padding: { md: 5 },
            borderRadius: 10,
          }}
        >
          <Avatar sx={{ width: 150, height: 150 }} src={userData.avatar} />
          <FormControl sx={{ marginTop: { md: 5 } }}>
            <TextField
              name="firstName"
              type="text"
              placeholder="muhammad"
              label="First Name"
              variant="outlined"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginTop: 2 }}
            />
            <TextField
              name="lastName"
              type="text"
              placeholder="ahsan"
              label="Last Name"
              variant="outlined"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginTop: 2 }}
            />
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
            <TextField
              multiline
              name="about"
              type="text"
              placeholder="e.g agsan@email.com"
              label="About"
              variant="outlined"
              value={values.about}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginTop: 2 }}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ padding: 1, marginTop: 2, textTransform: "capitalize" }}
            >
              <Typography>Update</Typography>
            </Button>
            <Typography sx={{ marginTop: 2, textAlign: "center" }}>
              OR
            </Typography>
            <Button
              onClick={() => {
                logout(
                  (res) => {
                    dispatch({ type: "setUser", payload: res.data.user });
                    navigate("/");

                  },
                  (e) => {
                    navigate("/");
                  }
                );
              }}
              variant="contained"
              sx={{ padding: 1, marginTop: 2, textTransform: "capitalize" }}
            >
              <Typography>Logout</Typography>
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            borderBottom: 2,
            borderBottomColor: "gray",
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          <Typography variant="h3">Your Slides</Typography>
          <Typography variant="body1" sx={{ marginY: 2 }}>
            Your uploaded slides
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
