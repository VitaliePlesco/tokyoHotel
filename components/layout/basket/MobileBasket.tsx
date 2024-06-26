"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BookingDetailsModal from "./BookingDetailsModal";
import Total from "./Total";
import { useRoomsStore } from "@/stores/roomsStore";
import { useCartStore } from "@/stores/cartStore";
import { useUrlParams } from "@/lib/hooks/useUrlParams";

export default function MobileBasket() {
  const { room, numberOfNights } = useCartStore();
  const { roomType } = useRoomsStore();

  let totalStayCost = 0;
  if (room.length !== 0) {
    totalStayCost =
      (roomType[room[0]?.roomTypeId - 1]?.roomPrice * numberOfNights) / 100;
  }

  const roomPrices = roomType.map((type) => type.roomPrice);
  const lowestPrice = Math.min(...roomPrices) / 100;

  return (
    <Paper square elevation={6}>
      <Box
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          px: "1.25rem",
          py: "1rem",
          width: "100%",
        }}
      >
        {room.length !== 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
              gap: "0.5rem",
            }}
          >
            <Typography
              variant="h6"
              color="primary.main"
              sx={{ fontWeight: "bold" }}
            >
              <Total totalStay={totalStayCost} />
            </Typography>
            <BookingDetailsModal />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
                £{lowestPrice}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  const element = document.getElementById("room-card");
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                variant="contained"
                sx={{ whiteSpace: "nowrap" }}
              >
                Choose your room
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
