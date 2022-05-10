import React from "react";

// Images
import Review from "../images/review.jpg";

// Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ReviewDesignComponent = ({ author, comment }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={Review}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          by {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {comment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Write a review
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReviewDesignComponent;
