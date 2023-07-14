import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Button,
  Typography,
  InputBase,
  Fade,
  Drawer,
  Avatar,
  SpeedDial,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import DuloLogo from "../images/DuloLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { aboutMeRequest } from "../services/getRequest";
function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const { myTheme, userData } = useSelector((state) => state.customReducer);
  const changeTheme = () => {
    dispatch({
      type: "changeTheme",
    });
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToCategory = () => {
    navigate("/category");
  };
  const goToMe = () => {
    navigate("/me");
  };
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };
  const goToUpLoad = ()=>{
    userData?navigate('/upload'):navigate('login')
  }
  const goToAdmin = ()=>{
    navigate('/admin')
  }
  const goToPoll = ()=>{
    navigate('/poll')
  }
  useEffect(()=>{
   aboutMeRequest((res)=>{
  
    dispatch({ type: "setUser", payload: res.data.user })} , (err)=>{console.log(err.response)})
  } ,[])
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: !myTheme ? "white" : "#0F172A",
        "&:hover": { cursor: "pointer" },
      }}
      color="inherit"
    >
      <Container>
        <Toolbar
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img onClick={goToHome} width={50} src={DuloLogo} alt="Dulo Logo" />
          </Box>
          <Box>
            <Box sx={{ display: !search ? "flex" : "none" }}>
              <Button onClick={goToHome} sx={{ textTransform: "capitalize" }}>
                <Typography>home</Typography>
              </Button>
              <Button
                onClick={goToCategory}
                sx={{ textTransform: "capitalize" }}
              >
                <Typography>explore</Typography>
              </Button>
              <Button sx={{ textTransform: "capitalize" }}>
                <Typography>Most Popular</Typography>
              </Button>
              <Button sx={{ textTransform: "capitalize" }}>
                <Typography>Editor’s Picks</Typography>
              </Button>
              <Button onClick={goToPoll} sx={{ textTransform: "capitalize" }}>
                <Typography>Poll</Typography>
              </Button>
              <Button
                startIcon={<FileUploadIcon />}
                variant="contained"
                sx={{ textTransform: "capitalize",marginX:1 }}
                onClick={goToUpLoad}
              >
                <Typography>upload</Typography>
              </Button>
              <Button sx={{ textTransform: "capitalize" , marginX:1 }} variant="outlined" onClick={goToAdmin}>
                <Typography>Admin</Typography>
              </Button>
            </Box>
            <Fade in={search} timeout={500}>
              <Box
                sx={{
                  display: search ? "flex" : "none",
                  border: 1,
                  borderRadius: 2,
                  borderColor: "gray",
                }}
              >
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <InputBase sx={{ width: "100%" }} placeholder="Search" />
                <IconButton
                  onClick={() => {
                    setSearch(!search);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Fade>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => {
                setSearch(!search);
              }}
            >
              <SearchIcon fontSize="large" />
            </IconButton>
            {userData ? (
              <Avatar onClick={goToMe} src={userData.avatar}>
                {userData.firstName[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar onClick={goToLogin}></Avatar>
            )}
            <IconButton size="large" onClick={changeTheme}>
              {myTheme ? (
                <LightModeOutlinedIcon fontSize="large" />
              ) : (
                <DarkModeOutlinedIcon fontSize="large" />
              )}
            </IconButton>
          </Box>
        </Toolbar>

        <Toolbar
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton onClick={handleDrawer}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box>
            <Box sx={{ display: !search ? "flex" : "none" }}>
              <img
                onClick={goToHome}
                width={50}
                src={DuloLogo}
                alt="Dulo Logo"
              />
            </Box>
            <Fade in={search} timeout={500}>
              <Box
                sx={{
                  display: search ? "flex" : "none",
                  border: 1,
                  borderRadius: 2,
                  borderColor: "gray",
                }}
              >
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <InputBase sx={{ width: "100%" }} placeholder="Search" />
                <IconButton
                  onClick={() => {
                    setSearch(!search);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Fade>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => {
                setSearch(!search);
              }}
            >
              <SearchIcon fontSize="large" />
            </IconButton>
            {userData ? (
              <Avatar onClick={goToMe} src={userData.avatar}>
                {userData.firstName[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar onClick={goToLogin}></Avatar>
            )}
            <IconButton onClick={goToUpLoad}>
              <FileUploadIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
        <Drawer
          sx={{
            width: 350,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 350,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Box
            sx={{
              height: "100%",
              backgroundColor: myTheme ? "#0F172A" : "#fff",
              color: !myTheme ? "#000" : "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: 1,
                borderBottomColor: "gray",
                paddingY: 2,
                paddingX:2
              }}
            >
              <IconButton size="large" onClick={changeTheme}>
                {myTheme ? (
                  <LightModeOutlinedIcon fontSize="large" />
                ) : (
                  <DarkModeOutlinedIcon fontSize="large" />
                )}
              </IconButton>
              <img
                onClick={goToHome}
                width={50}
                src={DuloLogo}
                alt="Dulo Logo"
              />
              <IconButton onClick={handleDrawer}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Button onClick={goToHome} sx={{ textTransform: "capitalize" }}>
                <Typography>home</Typography>
              </Button>
              <Button
                onClick={goToCategory}
                sx={{ textTransform: "capitalize" }}
              >
                <Typography>explore</Typography>
              </Button>
              <Button sx={{ textTransform: "capitalize" }}>
                <Typography>Most Popular</Typography>
              </Button>
              <Button sx={{ textTransform: "capitalize" }}>
                <Typography>Editor’s Picks</Typography>
              </Button>
              <Button onClick={goToPoll} sx={{ textTransform: "capitalize" }}>
                <Typography>Poll</Typography>
              </Button>
              <Button sx={{ textTransform: "capitalize" , marginX:1 }} variant="outlined" onClick={goToAdmin}>
                <Typography>Admin</Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: myTheme ? "#0F172A" : "#fff",
              color: !myTheme ? "#000" : "#fff",
              padding: 2,
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "11" }}>
              © 2023 this website is property of www.ezeelogix.com
            </Typography>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
}

export default Header;
