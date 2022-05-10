import React from "react";

// Components
import ReviewDesignComponent from "../components/ReviewDesignComponent";

// Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ClientReviewsComponent = () => {
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
        FEEDBACK
      </Button>
      <Typography
        variant="h3"
        color="initial"
        sx={{
          pb: 3,
        }}
      >
        Client Reviews
      </Typography>
      <Grid container spacing={3}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ReviewDesignComponent
              author={review.by}
              comment={review.comment}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const reviews = [
  {
    by: "Mhamed",
    comment:
      "Sint deserunt aliquip magna consectetur irure cillum nisi minim amet mollit in exercitation Lorem non.",
  },
  {
    by: "Mhamed",
    comment: "Non veniam velit veniam incididunt ipsum anim officia anim.",
  },
  {
    by: "Mhamed",
    comment:
      "Sint deserunt aliquip magna consectetur irure cillum nisi minim amet mollit in exercitation Lorem non.",
  },
];

export default ClientReviewsComponent;
