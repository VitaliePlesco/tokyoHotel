"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import TabNav from "./Rooms/TabNav";

export default function ManageRooms() {
  return (
    <Box
      sx={{
        margin: {
          xs: "1rem",
          md: "1.45rem",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "0.375rem",
          bgcolor: "#eeeff2",

          padding: {
            xs: "1em",
            md: "1.5em",
          },
        }}
      >
        {/* <TabNav /> */}
      </Box>
    </Box>
  );
}
