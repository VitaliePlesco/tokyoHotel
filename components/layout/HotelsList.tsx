import HotelCard from "./HotelCard";
import type { Hotel } from "@prisma/client";
import { fetchHotelById } from "@/lib/data";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function HotelsList() {
  return (
    <Box sx={{ py: "2.5rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <HotelCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HotelCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HotelCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HotelCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HotelCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HotelCard />
        </Grid>
      </Grid>
    </Box>
  );
}
