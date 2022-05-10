import React from "react";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material UI
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

const FooterComponent = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ mt: 2 }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          disableGutters
          sx={{
            color: "#FFFFFF",
            p: 3,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="inherit">
                Phone Support
              </Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  mb: 2,
                }}
              >
                24 HOURS A DAY
              </Button>
              <Typography variant="h6" color="inherit">
                + 268 79499 014
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="inherit">
                Connect With Us
              </Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  mb: 2,
                }}
              >
                SOCIAL MEDIA CHANNELS
              </Button>
              <Stack direction="row">
                {socials.map((social, index) => (
                  <IconButton size="small" href={social.url} key={index}>
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="inherit">
                Get Promotions
              </Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  mb: 2,
                }}
              >
                SIGN UP FOR SPECIAL OFFERS
              </Button>
              <Stack direction="row">
                <TextField
                  id="email"
                  label="Email"
                  // value={}
                  // onChange={}
                  fullWidth
                  size="small"
                />
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    color: "#444444",
                  }}
                >
                  SEND
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
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

export default FooterComponent;
