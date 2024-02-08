import HotelCard from "./HotelCard";
import type { Hotel } from "@prisma/client";
import { fetchHotels } from "@/lib/data";
import { hotelInfo } from "@/lib/placeholder-data";
import { mergeTwoArrays } from "@/utils/util";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default async function HotelsList() {
  const hotels: Hotel[] = await fetchHotels();
  const hotelsWithImg = mergeTwoArrays(hotels, hotelInfo);
  return (
    <Box sx={{ py: "2.5rem" }}>
      <Grid container spacing={4}>
        {hotelsWithImg.map((hotel) => (
          <Grid key={hotel.hotelName} item xs={12} sm={6} md={4}>
            <HotelCard title={hotel.hotelName} img={hotel.img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
