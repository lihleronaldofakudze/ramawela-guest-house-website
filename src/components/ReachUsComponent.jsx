import React from "react";

// Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ReachUsComponent = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "#F9F9F9",
        p: 5,
        my: 5,
        textAlign: "center",
      }}
      disableGutters
    >
      <Typography
        variant="h5"
        color="textSecondary"
        sx={{
          pb: 2,
        }}
      >
        Reach Us
      </Typography>
      <Grid
        container
        spacing={1}
        className="reach-us"
        sx={{
          p: 2,
        }}
      >
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              bgcolor: "#6B6978",
              color: "#fff",
              p: 2,
            }}
            square
          >
            <Button variant="text" color="inherit">
              CONTACT
            </Button>
            <Typography variant="h5" color="inherit">
              Get In Touch
            </Typography>
            <TextField
              id="name"
              placeholder="Name"
              //   value={}
              //   onChange={}
              size="small"
              fullWidth
              margin="normal"
              sx={{
                borderRadius: 0,
              }}
            />
            <TextField
              id="email"
              placeholder="Email"
              //   value={}
              //   onChange={}
              size="small"
              fullWidth
              margin="normal"
            />
            <TextField
              id="message"
              placeholder="Message"
              //   value={}
              //   onChange={}
              size="small"
              fullWidth
              margin="normal"
              multiline
              minRows={4}
              maxRows={4}
            />
            <Button variant="contained" color="primary" size="small" fullWidth>
              SEND US
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReachUsComponent;
