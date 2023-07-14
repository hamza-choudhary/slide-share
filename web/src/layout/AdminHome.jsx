import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AdminHome() {
  const { myTheme } = useSelector((state) => state.customReducer);
  const navigate = useNavigate();
  const goToOrdinary = () => {
    navigate("/admin/users/ordinary");
  };
  const goToPro = () => {
    navigate("/admin/users/pro");
  };
  const goToPending = () => {
    navigate("/admin/users/pending");
  };
  const goToPendingSlides = () => {
    navigate("/admin/slides/pending");
  };
  const goToReportedSlides = () => {
    navigate("/admin/slides/reported");
  };
  const goToApprovedSlides = () => {
    navigate("/admin/slides/approved");
  };
  return (
    <Box
      sx={{
        backgroundColor: myTheme ? "#0F172A" : "#fff",
        color: !myTheme ? "#000" : "#fff",
        padding: {
          md: 5,
          xs: 4,
        },
      }}
    >
      <Box sx={{ borderBottom: 2, borderBottomColor: "gray", marginBottom: 5 }}>
        <Typography variant="h4">Admin Panel</Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          Think twice while doing something here
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ margin: 5 }} variant="h4">
          Users
        </Typography>

        <Grid container rowGap={3} columnGap={3}>
          <Grid item>
            <Card
              sx={{
                width: { xs: 200, md: 250 },
                padding: 5,
                ":hover": { cursor: "pointer" },
                backgroundColor: "transparent",
              }}
              onClick={goToPro}
            >
              <Typography
                variant="h5"
                sx={{ color: "#89CFF0", fontWeight: 800 }}
              >
                Pro Users
              </Typography>
              <Typography sx={{ color: "#DAA520" }}>800</Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontSize: 11,
                  textAlign: "right",
                  color: "red",
                }}
              >
                click to see all
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                width: { xs: 200, md: 250 },
                padding: 5,
                ":hover": { cursor: "pointer" },
                backgroundColor: "transparent",
              }}
              onClick={goToOrdinary}
            >
              <Typography
                variant="h5"
                sx={{ color: "#89CFF0", fontWeight: 800 }}
              >
                Ordinary Users
              </Typography>
              <Typography sx={{ color: "#DAA520" }}>800</Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontSize: 11,
                  textAlign: "right",
                  color: "red",
                }}
              >
                click to see all
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                width: { xs: 200, md: 250 },
                padding: 5,
                ":hover": { cursor: "pointer" },
                backgroundColor: "transparent",
              }}
              onClick={goToPending}
            >
              <Typography
                variant="h5"
                sx={{ color: "#89CFF0", fontWeight: 800 }}
              >
                Pending Users
              </Typography>
              <Typography sx={{ color: "#DAA520" }}>800</Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontSize: 11,
                  textAlign: "right",
                  color: "red",
                }}
              >
                click to see all
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography sx={{ margin: 5 }} variant="h4">
          Slides
        </Typography>

        <Grid container rowGap={3} columnGap={3}>
          <Grid item>
            <Card
              onClick={goToApprovedSlides}
              sx={{
                width: { xs: 200, md: 250 },
                padding: 5,
                ":hover": { cursor: "pointer" },
                backgroundColor: "transparent",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#89CFF0", fontWeight: 800 }}
              >
                Approved Slides
              </Typography>
              <Typography sx={{ color: "#DAA520" }}>800</Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontSize: 11,
                  textAlign: "right",
                  color: "red",
                }}
              >
                click to see all
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card
              onClick={goToPendingSlides}
              sx={{
                width: { xs: 200, md: 250 },
                padding: 5,
                ":hover": { cursor: "pointer" },
                backgroundColor: "transparent",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#89CFF0", fontWeight: 800 }}
              >
                Un Approved Slides
              </Typography>
              <Typography sx={{ color: "#DAA520" }}>800</Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontSize: 11,
                  textAlign: "right",
                  color: "red",
                }}
              >
                click to see all
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card
              onClick={goToReportedSlides}
              sx={{
                width: { xs: 200, md: 250 },
                padding: 5,
                ":hover": { cursor: "pointer" },
                backgroundColor: "transparent",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#89CFF0", fontWeight: 800 }}
              >
                Reported Slides
              </Typography>
              <Typography sx={{ color: "#DAA520" }}>800</Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontSize: 11,
                  textAlign: "right",
                  color: "red",
                }}
              >
                click to see all
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AdminHome;
