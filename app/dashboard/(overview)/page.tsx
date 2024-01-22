import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function page() {
  return (
    <Box component="main">
      <Box
        sx={{
          padding: {
            xs: "1rem",
            md: "1.5rem",
          },
        }}
      >
        <Typography variant="h4">Dashboard</Typography>
      </Box>
    </Box>
  );
}
