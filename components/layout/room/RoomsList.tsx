"use client";
import Box from "@mui/material/Box";
import RoomCard from "./RoomCard";
import { useRoomsStore } from "@/stores/roomsStore";
import { useUrlParams } from "@/lib/hooks/useUrlParams";
import { useEffect, useRef, useState } from "react";
import RoomRateCard from "./RoomRateCard";
import { RoomListSkeleton } from "@/components/skeletons";
import { useCartStore } from "@/stores/cartStore";

export default function RoomsList() {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();
  const { setRoomsAndRoomType, roomType, twinRooms, doubleRooms } =
    useRoomsStore();
  const { dateRange, numberOfNights } = useCartStore();
  const { hotel, checkin, checkout } = useUrlParams();

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchRoomsAndRoomType = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);

      try {
        const [rooms, roomType] = await Promise.all([
          fetch(
            `/api/rooms/${hotel}/${dateRange.startDate}/${dateRange.endDate}`,
            {
              signal: abortControllerRef.current?.signal,
            }
          ).then((response) => response.json()),
          fetch(`/api/getRoomType`, {
            signal: abortControllerRef.current?.signal,
          }).then((response) => response.json()),
        ]);
        setRoomsAndRoomType(rooms, roomType);
      } catch (error: any) {
        if (error.name === "AbortError") {
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (dateRange.endDate !== null) {
      fetchRoomsAndRoomType();
    }
  }, [setRoomsAndRoomType, hotel, dateRange.startDate, dateRange.endDate]);

  console.log(numberOfNights, "number of nights");

  const totalStayCostTwin = (roomType[0]?.roomPrice * numberOfNights) / 100;
  const totalStayCostDouble = (roomType[1]?.roomPrice * numberOfNights) / 100;

  if (loading) {
    return <RoomListSkeleton />;
  }
  if (error) {
    return (
      <RoomListSkeleton message="Something went wrong, please try again." />
    );
  }

  return (
    <Box>
      <Box>
        <RoomCard roomType={roomType[0]}>
          <RoomRateCard room={twinRooms[0]} totalStayCost={totalStayCostTwin} />
        </RoomCard>
        <RoomCard roomType={roomType[1]}>
          <RoomRateCard
            room={doubleRooms[0]}
            totalStayCost={totalStayCostDouble}
          />
        </RoomCard>
      </Box>
    </Box>
  );
}
