"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

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
      <Typography variant="h6" sx={{ textAlign: "center", p: "2rem" }}>
        Something went wrong!
      </Typography>
      <Box
        component="button"
        sx={{
          display: "flex",
          alignItems: "center",
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
        onClick={() => reset()}
      >
        Try again
      </Box>
    </Box>
  );
}
