import React from "react";

// Components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const WelcomeComponent = () => {
  return (
    <div className="welcome">
      <div className="welcome-cover">
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              color: "#FFFFFF",
              height: "80vh",
            }}
          >
            <Typography
              variant="overline"
              color="inherit"
              sx={{
                textAlign: "center",
                pb: 2,
              }}
            >
              Luxury Rooms & best houses
            </Typography>
            <Typography
              variant="h2"
              color="inherit"
              sx={{
                textAlign: "center",
                pb: 2,
              }}
            >
              ENJOY A LUXURY
              <br />
              EXPERIENCE
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderRadius: "0px",
              }}
            >
              View All Rooms
            </Button>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

// const images = [
//   GuestHouseOne,
//   GuestHouseTwo,
//   GuestHouseThree,
//   GuestHouseFour,
//   GuestHouseFive,
//   GuestHouseSix,
//   GuestHouseSeven,
// ];

export default WelcomeComponent;
