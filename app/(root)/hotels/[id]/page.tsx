import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import Image from "next/image";

import { fetchHotelById } from "@/lib/data";
import { hotelInfo } from "@/lib/placeholder-data";

export default async function page({ params }: { params: { id: string } }) {
  const id = decodeURI(params.id);
  const hotel = await fetchHotelById(id);
  const filteredHotel = hotelInfo.filter((hotel) => hotel.hotelName === id);

  if (!hotel) {
    return <div>not found</div>;
  }
  return (
    <Box sx={{ flex: 1, py: "2.5rem" }}>
      <Container>
        <Typography variant="h3" sx={{ py: "0rem" }}>
          {hotel.hotelName}
        </Typography>
        <Typography variant="subtitle1" sx={{ py: "1rem" }}>
          {hotel.city}
        </Typography>

        <Box
          sx={{
            height: `400px`,
            backgroundImage: `url(${filteredHotel[0].imgLarge})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>

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
