import React from "react";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";

// Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const SocialsComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "#444444",
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ color: "white" }}>
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6} xs={12}>
            {socials.map((social, index) => (
              <IconButton size="small" href={social.url}>
                {social.icon}
              </IconButton>
            ))}
          </Grid>
          <Grid item container justifyContent="flex-end" md={6} xs={12}>
            <Button
              variant="text"
              color="inherit"
              size="small"
              startIcon={<ReviewsRoundedIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  color: "#6B6978",
                },
              }}
            >
              View our reviews
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const socials = [
  {
    icon: (
      <FacebookIcon
        sx={{
          color: "white",
          fontSize: "1.2rem",
          "&:hover": {
            color: "#6B6978",
          },
        }}
      />
    ),
    url: "https://www.facebook.com/",
  },
  {
    icon: (
      <TwitterIcon
        sx={{
          color: "white",
          fontSize: "1.2rem",
          "&:hover": {
            color: "#6B6978",
          },
        }}
      />
    ),
    url: "https://www.twitter.com/",
  },
  {
    icon: (
      <LinkedInIcon
        sx={{
          color: "white",
          fontSize: "1.2rem",
          "&:hover": {
            color: "#6B6978",
          },
        }}
      />
    ),
    url: "https://www.linkedin.com/",
  },
  {
    icon: (
      <InstagramIcon
        sx={{
          color: "white",
          fontSize: "1.2rem",
          "&:hover": {
            color: "#6B6978",
          },
        }}
      />
    ),
    url: "https://www.instagram.com/",
  },
];

export default SocialsComponent;
