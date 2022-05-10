import React from "react";

// Material
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const BookingDesignComponent = ({ name, price }) => {
  return (
    <Paper square>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} className="booking"></Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          xs={12}
          md={6}
          sx={{ p: 1 }}
        >
          <Typography variant="body1" color="initial">
            {name}
          </Typography>

          <Typography variant="body2" color="initial">
            from R{price} per night
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              borderRadius: "0px",
              textTransform: "none",
            }}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BookingDesignComponent;
