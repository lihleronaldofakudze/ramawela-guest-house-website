import React from "react";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const OurServicesComponent = () => {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        textAlign: "center",
        pt: 5,
      }}
    >
      <Button variant="text" color="primary">
        Promotions
      </Button>
      <Typography
        variant="h3"
        color="initial"
        sx={{
          pb: 3,
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur egestas, nisl nisl
            consectetur nisi, euismod consectetur nisi nisl euismod.Magna
            voluptate est exercitation non mollit laborum. Adipisicing dolor
            nisi ea magna proident aliquip ad laboris laboris voluptate ad esse
            in.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur egestas, nisl nisl
            consectetur nisi, euismod consectetur nisi nisl euismod.Magna
            voluptate est exercitation non mollit laborum. Adipisicing dolor
            nisi ea magna proident aliquip ad laboris laboris voluptate ad esse
            in.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServicesComponent;
