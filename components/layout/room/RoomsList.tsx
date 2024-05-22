import Box from "@mui/material/Box";
import RoomCard from "./RoomCard";

export default async function RoomsList({ rooms }: any) {
  const doubleRooms = rooms.filter((room: any) => room.roomTypeId === 1);
  const twinRooms = rooms.filter((room: any) => room.roomTypeId === 2);

  return (
    <Box>
      <RoomCard numberOfRooms={doubleRooms.length} roomType="Double" />
      <RoomCard numberOfRooms={twinRooms.length} roomType="Twin" />
    </Box>
  );
}
