import Link from "next/link";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SentimentVeryDissatisfiedIcon />
      <Typography variant="h6" sx={{ textAlign: "center", p: "0rem" }}>
        404 Not Found
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", pb: "2rem" }}>
        Could not find the requested invoice.
      </Typography>
      <Box
        component={Link}
        href="/dashboard/hotels"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          justifyContent: "center",
          boxShadow: "none",
          border: "none",
          borderRadius: "0.5rem",
          bgcolor: "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: "primary.dark",
            color: "white",
          },
          py: "0.75em",
          px: "1em",
          fontSize: "0.875rem",
          fontWeight: "500",
          ":focus-visible": {
            outline: "2px solid #2563eb",
            borderRadius: "0.5rem",
          },
        }}
      >
        Go Back
      </Box>
    </Box>
  );
}
