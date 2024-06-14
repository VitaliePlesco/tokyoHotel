import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useCartStore } from "@/stores/cartStore";

export default function RoomSummary({
  totalStay,
  numberOfNights,
}: {
  totalStay: number;
  numberOfNights: number;
}) {
  const room = useCartStore((state) => state.room[0]);

  const { removeFromCart } = useCartStore();
  const doubleOrTwin = room?.roomTypeId === 1 ? "Twin" : "Double";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "text.primary",
              whiteSpace: "nowrap",
              fontSize: "1.2rem",
            }}
          >
            {room && doubleOrTwin + " Room"}
          </Typography>
        </Box>
        <Box onClick={() => removeFromCart()} sx={{ cursor: "pointer" }}>
          <DeleteOutlineIcon sx={{ color: "text.primary", fontSize: "28px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              whiteSpace: "nowrap",
            }}
          >
            Price for {numberOfNights} nights
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            color="primary.main"
            sx={{
              whiteSpace: "nowrap",
              pr: "0.25rem",
            }}
          >
            £{totalStay}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
