import Box from "@mui/material/Box";
import BookingForm from "./BookingForm";

export default function BookingWrapper() {
  return (
    <div>
      <Box
        sx={{
          py: 6,
        }}
      >
        <BookingForm />
      </Box>
    </div>
  );
}
