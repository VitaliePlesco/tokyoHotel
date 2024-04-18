import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BookingDetailsModal from "./BookingDetailsModal";

export default function MobileBasket() {
  return (
    <Paper square elevation={6}>
      <Box
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          // borderTop: "1px solid #bdbdbd",
          px: "0.75rem",
          py: "1rem",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="caption">Start from</Typography>
          <Typography
            variant="h6"
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            $58.75
          </Typography>
          <BookingDetailsModal />
        </Box>
        <Button variant="contained" sx={{ whiteSpace: "nowrap" }}>
          Choose your room
        </Button>
      </Box>
    </Paper>
  );
}
