import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export function CreateHotel() {
  return (
    <Box
      component={Link}
      href="/dashboard/hotels/create"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "12em",
        borderRadius: "0.5rem",
        textDecoration: "none",
        bgcolor: "primary.main",
        color: "white",
        "&:hover": {
          bgcolor: "primary.dark",
          color: "white",
        },
        p: "0.75em",
        fontSize: "0.875rem",
        fontWeight: "500",
        ":focus-visible": {
          outline: "2px solid #2563eb",
          borderRadius: "0.5rem",
        },
      }}
    >
      <Typography
        component="span"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        Create Hotel
      </Typography>
      {"   "}
      <AddIcon fontSize="medium" />
    </Box>
  );
}
