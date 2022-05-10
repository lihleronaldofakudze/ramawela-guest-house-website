import React from "react";

// Responsive
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import RoomDesignComponent from "./RoomDesignComponent";

// Material UI Components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BookingDesignComponent from "./BookingDesignComponent";

const OurRoomsComponent = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        textAlign: "center",
      }}
    >
      <Button variant="text" color="primary">
        Promotions
      </Button>
      <Typography
        variant="h3"
        color="initial"
        sx={{
          mb: 3,
        }}
      >
        Our Rooms
      </Typography>
      <Grid container spacing={4}>
        {rooms.map((room, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RoomDesignComponent {...room} />
          </Grid>
        ))}
      </Grid>
      <Container
        maxWidth="md"
        sx={{
          p: 3,
          color: "#C4C4C4",
          height: "60vh",
          my: 4,
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={8} xs={12} className="best-room"></Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            md={4}
            xs={12}
            sx={{
              p: 1,
            }}
          >
            <Typography variant="h5" color="textSecondary">
              Best Season Price
            </Typography>
            <Typography variant="h5" color="textSecondary">
              X
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                pb: 2,
              }}
            >
              Nostrud consequat non labore proident in eu nisi.Deserunt culpa
              duis culpa amet eu esse exercitation culpa exercitation irure
              occaecat.Ut consequat sunt enim voluptate cillum eiusmod et
              exercitation deserunt reprehenderit non Lorem.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                borderRadius: "0px",
              }}
            >
              All Promotions
            </Button>
          </Grid>
        </Grid>
      </Container>
      {desktop ? (
        <Container maxWidth="lg" sx={{ pt: 5 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {rooms.map((room, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <BookingDesignComponent {...room} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Container></Container>
      )}
    </Container>
  );
};

const rooms = [
  { name: "Small Room", guest: 1, feet: 15, price: 100 },
  { name: "Medium Room", guest: 2, feet: 20, price: 150 },
  { name: "Large Room", guest: 3, feet: 25, price: 200 },
  { name: "Extra Large Room", guest: 4, feet: 30, price: 250 },
  { name: "King Room", guest: 5, feet: 35, price: 300 },
  { name: "Small Room", guest: 1, feet: 15, price: 100 },
];

export default OurRoomsComponent;
