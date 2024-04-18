import Box from "@mui/material/Box";
import RoomCard from "./RoomCard";

export default async function RoomsList({ rooms }: any) {
  return (
    <Box>
      <RoomCard />
      <RoomCard />
      {/* <Box>{JSON.stringify(rooms, null, "\t")}</Box> */}
    </Box>
  );
}
