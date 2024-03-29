import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { notFound } from "next/navigation";

import { fetchHotelById } from "@/lib/data";
import { hotelInfo } from "@/lib/placeholder-data";
import SearchRoomsByHotel from "@/components/booking/SearchRoomsByHotel";

export default async function page({ params }: { params: { id: string } }) {
  const id = decodeURI(params.id);
  const hotel = await fetchHotelById(id);
  const filteredHotel = hotelInfo.filter((hotel) => hotel.hotelName === id);

  if (!hotel) {
    notFound();
  }
  return (
    <Box sx={{ flex: 1, py: "2.5rem" }}>
      <Container>
        <Box
          sx={{
            height: `400px`,
            backgroundImage: `url(${filteredHotel[0].imgLarge})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
          <div>
            <Box
              sx={{
                py: 6,
              }}
            >
              <SearchRoomsByHotel />
            </Box>
          </div>
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
    </Box>
  );
}
