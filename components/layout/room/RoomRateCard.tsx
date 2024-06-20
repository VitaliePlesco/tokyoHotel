"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useUrlParams } from "@/lib/hooks/useUrlParams";
import { useCartStore } from "@/stores/cartStore";
import { Room } from "@/stores/roomsStore";
import { RoomType } from "@prisma/client";
import { differenceInCalendarDays } from "date-fns";

export default function RoomRateCard({
  room,
  roomType,
}: {
  room: Room;
  roomType: RoomType;
}) {
  const { addToCart } = useCartStore();
  const { checkin, checkout } = useUrlParams();
  const numberOfNights = differenceInCalendarDays(
    new Date(checkout || 0),
    new Date(checkin || 0)
  );

  const totalStayCost = (roomType.roomPrice * numberOfNights) / 100;

  const handleAddToCart = () => {
    addToCart([room]);
  };

  return (
    <Box>
      <Card variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ paddingBottom: 1 }}>
            <Typography variant="caption">Non Refundable</Typography>
            <Typography
              variant="h5"
              color="primary.main"
              sx={{ fontWeight: "bold" }}
            >
              £{totalStayCost}
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              sx={{ whiteSpace: "nowrap" }}
            >
              Add To Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
