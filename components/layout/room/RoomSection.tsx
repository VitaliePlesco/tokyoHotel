import Box from "@mui/material/Box";

import SearchRoomsByHotel from "@/components/booking/SearchRoomsByHotel";
import SelectRoom from "@/components/layout/room/SelectRoom";
import Basket from "@/components/layout/basket/Basket";

export default function RoomSection() {
  return (
    <Box>
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* <SearchRoomsByHotel hotelId={id} /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: {
              lg: "2rem",
            },
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "70%",
              },
            }}
          >
            {/* <SelectRoom rooms={rooms} /> */}
          </Box>
          <Box
            sx={{
              width: {
                lg: "30%",
              },
            }}
          >
            <Basket />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
