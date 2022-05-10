import { Stack, Button } from "@mui/material";
import React from "react";

const RoomDesignComponent = ({ name, guest, feet, price }) => {
  return (
    <Stack
      className="room"
      justifyContent="space-between"
      sx={{
        p: 2,
        color: "#FFFFFF",
        height: 200,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{
          borderRadius: "0px",
        }}
      >
        {name}
      </Button>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        justifyContent="space-between"
      >
        <Button variant="text" color="inherit">
          {guest} {guest > 1 ? "guests" : "guest"}
        </Button>
        <Button variant="text" color="inherit">
          {feet} ft
        </Button>
        <Button variant="text" color="inherit">
          From R {price}
        </Button>
      </Stack>
    </Stack>
  );
};

export default RoomDesignComponent;
