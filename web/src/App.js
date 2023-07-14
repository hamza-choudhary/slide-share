import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Login from "./layout/Login";
import Signup from "./layout/Signup";
import Home from "./layout/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import {useSelector} from 'react-redux'
import { dark, light } from "./color/theme";
import { useEffect } from "react";
import WebFont from 'webfontloader'
import Category from "./layout/Category";
import UserProfile from "./layout/UserProfile";
import Details from "./layout/Details";
import PageNotFound from "./layout/PageNotFound";
import About from "./layout/About";
import Upload from "./layout/Upload";
import AdminHome from "./layout/AdminHome";
import AdminProUsers from "./layout/AdminProUsers";
import AdminPendingUsers from "./layout/AdminPendingUsers";
import AdminUsers from "./layout/AdminUsers";
import AdminReportedSlides from "./layout/AdminReportedSlides";
import AdminPendingSlides from "./layout/AdminPendingSlides";
import AdminApprovedSlides from "./layout/AdminApprovedSlides";
import Poll from "./layout/Poll";
import CreatePoll from "./layout/CreatePoll";
import YourPoll from "./layout/YourPoll";
function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Poppins","Roboto"]
      }
    })
  })
  const {myTheme} = useSelector(state=>state.customReducer)
  return (
    <ThemeProvider theme={createTheme(!myTheme?light:dark)}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/me" element={<UserProfile />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/about/:user" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/poll" element={<Poll />} />
        <Route path="/poll/create" element={<CreatePoll />} />
        <Route path="/poll/your" element={<YourPoll />} />
        <Route path="*" element={<PageNotFound />}/>




        <Route path="/admin" element={<AdminHome />}/>
        <Route path="/admin/users/pro" element={<AdminProUsers />}/>
        <Route path="/admin/users/pending" element={<AdminPendingUsers />}/>
        <Route path="/admin/users/ordinary" element={<AdminUsers />}/>
        <Route path="/admin/slides/reported" element={<AdminReportedSlides />}/>
        <Route path="/admin/slides/pending" element={<AdminPendingSlides />}/>
        <Route path="/admin/slides/approved" element={<AdminApprovedSlides />}/>

      </Routes>
      <Footer />
     
      
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
