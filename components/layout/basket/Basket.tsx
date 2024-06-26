"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { format } from "date-fns";
import RoomSummary from "./RoomSummary";
import DateRangeSummary from "./DateRangeSummary";
import GuestsSummary from "./GuestsSummary";
import { useCartStore } from "@/stores/cartStore";
import Total from "./Total";
import { useUrlParams } from "@/lib/hooks/useUrlParams";
import { useRoomsStore } from "@/stores/roomsStore";

export default function Basket() {
  const { room, numberOfNights, dateRange } = useCartStore();
  const { roomType } = useRoomsStore();
  const { guests: numberOfGuests } = useUrlParams();

  const from = dateRange.startDate
    ? format(dateRange.startDate, "dd MMM")
    : "Checkin";
  const to = dateRange.endDate
    ? format(dateRange.endDate, "dd MMM")
    : "Checkin";

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
