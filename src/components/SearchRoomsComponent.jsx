import React from "react";

// Icons
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

// Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const SearchRoomsComponent = () => {
  return (
    <Container maxWidth="lg" className="search" sx={{ m: 5 }} disableGutters>
      <Box
        className="search-cover"
        sx={{
          p: 4,
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
            direction="column"
            md={4}
            xs={12}
            sx={{
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <Typography variant="h2" color="inherit">
              Holiday Enjoy
            </Typography>
            <Typography variant="body1" color="inherit">
              X
            </Typography>
            <Typography variant="body1" color="inherit">
              Nostrud Lorem exercitation proident nostrud quis consectetur
              proident sit officia do.Dolor est dolor labore exercitation
              incididunt aliqua labore ullamco.
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderRadius: "0px",
              }}
            >
              Available Rooms
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper square>
              <Box
                className="second-bg-cl"
                sx={{ p: 3, textAlign: "center", color: "#FFFFFF" }}
              >
                <Typography variant="h4" color="inherit">
                  Search Rooms
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                  STARTING BOOKING
                </Typography>
              </Box>
              <Stack direction="row" justifyContent="space-around">
                <Button variant="text" color="primary">
                  CHECK IN
                </Button>
                <Button variant="text" color="primary">
                  CHECK OUT
                </Button>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                  p: 2,
                }}
              >
                <Button
                  variant="text"
                  color="primary"
                  endIcon={<ArrowDropDownRoundedIcon />}
                >
                  <span>10</span> MAY
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  endIcon={<ArrowDropDownRoundedIcon />}
                >
                  <span>11</span> MAY
                </Button>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                  p: 2,
                }}
              >
                <IconButton aria-label="minus">
                  <RemoveCircleOutlineRoundedIcon />
                </IconButton>
                <Button variant="text" color="primary">
                  1 GUEST
                </Button>
                <IconButton aria-label="minus">
                  <AddCircleOutlineRoundedIcon />
                </IconButton>
              </Stack>
              <Button
                variant="contained"
                color="primary"
                size="small"
                fullWidth
                sx={{
                  borderRadius: "0px",
                }}
              >
                Check availability
              </Button>
            </Paper>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
            direction="column"
            md={4}
            xs={12}
            sx={{
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" color="inherit">
              Best Room Price
            </Typography>
            <Typography variant="body1" color="inherit">
              VILLA LUXURY
            </Typography>
            <Typography variant="body1" color="inherit">
              2 June to 28 June
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderRadius: "0px",
              }}
            >
              All promotions
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchRoomsComponent;
