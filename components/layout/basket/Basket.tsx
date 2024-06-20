"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { format, differenceInCalendarDays } from "date-fns";
import RoomSummary from "./RoomSummary";
import DateRangeSummary from "./DateRangeSummary";
import GuestsSummary from "./GuestsSummary";
import { useCartStore } from "@/stores/cartStore";
import Total from "./Total";
import { useUrlParams } from "@/lib/hooks/useUrlParams";
import { useRoomsStore } from "@/stores/roomsStore";

export default function Basket() {
  const room = useCartStore((state) => state.room);
  const { roomType } = useRoomsStore();
  const { checkin, checkout, guests: numberOfGuests } = useUrlParams();

  const from = checkin ? format(checkin, "dd MMM") : "Checkin";
  const to = checkout ? format(checkout, "dd MMM") : "Checkin";

  const numberOfNights = differenceInCalendarDays(
    new Date(checkout || 0),
    new Date(checkin || 0)
  );

  let roomStats = <></>;
  if (room.length !== 0) {
    const totalStayCost =
      (roomType[room[0]?.roomTypeId - 1]?.roomPrice * numberOfNights) / 100;

    roomStats = (
      <>
        <Divider />
        <RoomSummary
          totalStay={totalStayCost}
          numberOfNights={numberOfNights}
        />
        <Divider />
        <Total totalStay={totalStayCost} />
        <Divider />
        <Button variant="contained" disableRipple>
          Book now
        </Button>
      </>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: "white",
        border: "1px solid #bdbdbd",
        borderRadius: "0.3125rem",
        p: 2,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.125rem",
      }}
    >
      <DateRangeSummary
        checkin={from}
        checkout={to}
        numberOfNights={numberOfNights}
      />
      <Divider />
      <GuestsSummary numberOfGuests={numberOfGuests} />

      {room && roomStats}
    </Box>
  );
}
