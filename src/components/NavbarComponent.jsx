import React from "react";

// Responsive

// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const NavbarComponent = () => {
  return (
    <AppBar position="relative" color="primary" elevation={0.0}>
      <Toolbar>
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={3} xs={12}>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                RAMAWELA GUEST HOUSE
              </Typography>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="center"
              md={9}
              xs={12}
            >
              {pages.map((page, index) => (
                <Button
                  variant="text"
                  color="inherit"
                  size="small"
                  sx={{ mx: 2 }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                variant="contained"
                color="inherit"
                size="small"
                sx={{
                  mx: 2,
                  bgcolor: "#6B6978",
                  "&:hover": {
                    color: "#444444",
                  },
                }}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

const pages = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Rooms", url: "/rooms" },
  { name: "Gallery", url: "/gallery" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];

export default NavbarComponent;
