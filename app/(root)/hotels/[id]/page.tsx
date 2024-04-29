import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { notFound } from "next/navigation";

import { fetchHotelById } from "@/lib/data";
import { fetchAvailableRooms } from "@/lib/data";
import { hotelInfo } from "@/lib/placeholder-data";

import SearchRoomsByHotel from "@/components/booking/SearchRoomsByHotel";
import SelectRoom from "@/components/layout/room/SelectRoom";
import Basket from "@/components/layout/basket/Basket";
import MobileBasket from "@/components/layout/basket/MobileBasket";

export default async function page({ params }: { params: { id: string } }) {
  const id = decodeURI(params.id);
  const hotel = await fetchHotelById(id);
  const filteredHotel = hotelInfo.filter((hotel) => hotel.hotelName === id);
  const rooms = await fetchAvailableRooms(
    id,
    new Date("2024-05-12T00:00:00.000Z"),
    new Date("2024-05-19T00:00:00.000Z")
  );

  if (!hotel) {
    notFound();
  }
  return (
    <Box
      sx={{
        flex: 1,
        py: {
          xs: "1.5rem",
          md: "2.5rem",
        },
      }}
    >
      <Container>
        <Box
          sx={{
            height: {
              xs: "150px",
              sm: "250px",
              md: "300px",
            },
            backgroundImage: `url(${filteredHotel[0].imgLarge})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0.3125rem",
          }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            alignItems: "baseline",
          }}
        >
          <Typography variant="h3">{hotel.hotelName}</Typography>
          <Typography variant="h6">{hotel.city}</Typography>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: "#eeeff2",
        }}
      >
        <Container>
          <Box>
            <Box
              sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <SearchRoomsByHotel hotelId={id} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  alignItems: "flex-start",
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
                  <SelectRoom rooms={{}} />
                </Box>

                <Box
                  sx={{
                    width: {
                      lg: "30%",
                    },
                    bgcolor: "lightblue",
                    position: "sticky",
                    top: "2rem",
                  }}
                >
                  <Basket />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Typography
          variant="h5"
          sx={{ pt: "2rem", color: "primary.main", fontWeight: "bold" }}
        >
          About Our Hotel
        </Typography>
        <Typography variant="body1" sx={{ pt: "2rem" }}>
          {filteredHotel[0].about}
        </Typography>
        <Typography
          variant="h5"
          sx={{ pt: "2rem", color: "primary.main", fontWeight: "bold" }}
        >
          Contact Details
        </Typography>
        <Typography variant="body1" sx={{ pt: "2rem", fontWeight: "bold" }}>
          ADDRESS
        </Typography>
        <Typography variant="body1" sx={{ py: "0.125rem" }}>
          {hotel.buildingNumber} {hotel.streetName}
        </Typography>
        <Typography variant="body1" sx={{ py: "0.125rem" }}>
          +{hotel.phoneNumber}
        </Typography>
        <Typography variant="body1" sx={{ py: "0.125rem" }}>
          {hotel.email}
        </Typography>
      </Container>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 2,
        }}
      >
        <MobileBasket />
      </Box>
    </Box>
  );
}
