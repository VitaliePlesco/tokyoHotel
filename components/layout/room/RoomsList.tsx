"use client";
import Box from "@mui/material/Box";
import RoomCard from "./RoomCard";
import { useRoomsStore } from "@/stores/roomsStore";
import { useUrlParams } from "@/lib/hooks/useUrlParams";
import { useEffect } from "react";
import RoomRateCard from "./RoomRateCard";
import { RoomListSkeleton } from "@/components/skeletons";

export default function RoomsList() {
  const { setRoomsAndRoomType, roomType, rooms } = useRoomsStore();
  const { hotel, checkin, checkout } = useUrlParams();

  useEffect(() => {
    const fetchRoomsAndRoomType = async () => {
      const [rooms, roomType] = await Promise.all([
        fetch(`/api/rooms/${hotel}/${checkin}/${checkout}`).then((response) =>
          response.json()
        ),
        fetch(`/api/getRoomType`).then((response) => response.json()),
      ]);
      setRoomsAndRoomType(rooms, roomType);
    };

    if (
      hotel !== undefined &&
      checkin !== undefined &&
      checkout !== undefined
    ) {
      fetchRoomsAndRoomType();
    }
  }, [setRoomsAndRoomType, hotel, checkin, checkout]);

  const twinRooms = rooms.filter((room) => room.roomTypeId === 1);
  const doubleRooms = rooms.filter((room) => room.roomTypeId === 2);

  if (rooms.length === 0) {
    return <RoomListSkeleton />;
  }

  return (
    <Box>
      <Box>
        <RoomCard roomType={roomType[0]}>
          <RoomRateCard room={twinRooms[0]} roomType={roomType[0]} />
        </RoomCard>
        <RoomCard roomType={roomType[1]}>
          <RoomRateCard room={doubleRooms[0]} roomType={roomType[1]} />
        </RoomCard>
      </Box>
    </Box>
  );
}
