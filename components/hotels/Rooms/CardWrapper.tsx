import Box from "@mui/material/Box";
import Card from "./Card";
// import Grid from "@mui/material/Grid";
import Grid from "@mui/material/Unstable_Grid2";

import { fetchCardData } from "@/lib/data";

export default async function CardWrapper({ id }: { id: string }) {
  const cardData = await fetchCardData(id);

  const vacantRooms = cardData.filter((room) => room.roomStatus === "VACANT");
  const occupiedRooms = cardData.filter(
    (room) => room.roomStatus === "OCCUPIED"
  );
  const bookedRooms = cardData.filter((room) => room.roomStatus === "BOOKED");

  return (
    <Box sx={{ pb: "3rem" }}>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <Card title="Total" value={cardData.length} type="total" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card title="Vacant" value={vacantRooms.length} type="vacant" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card title="Occupied" value={occupiedRooms.length} type="occupied" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card title="Booked" value={bookedRooms.length} type="booked" />
        </Grid>
      </Grid>
    </Box>
  );
}
