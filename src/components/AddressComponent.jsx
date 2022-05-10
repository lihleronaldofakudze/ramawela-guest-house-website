import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const AddressComponent = () => {
  return (
    <div className="second-bg-cl">
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          spacing={1}
          sx={{
            textAlign: "center",
          }}
        >
          <Grid
            item
            container
            md={6}
            xs={12}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Button
              variant="text"
              color="inherit"
              sx={{
                color: "#FFFFFF",
              }}
            >
              Address:
            </Button>
            <Button
              variant="text"
              color="inherit"
              className="first-cl"
              sx={{
                textTransform: "none",
              }}
            >
              Lobamba Lomdzala, Mahlanya
            </Button>
          </Grid>
          <Grid
            item
            container
            md={6}
            xs={12}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              variant="text"
              color="inherit"
              sx={{
                color: "#FFFFFF",
              }}
            >
              Email:
            </Button>
            <Button
              variant="text"
              color="inherit"
              className="first-cl"
              sx={{
                textTransform: "none",
              }}
            >
              ramawelaguesthouse@gmail.com
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddressComponent;
