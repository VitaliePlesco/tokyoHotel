"use client";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Button from "@mui/material/Button";
import { useSearchParams } from "next/navigation";
import { format, differenceInCalendarDays } from "date-fns";

import DateRangeSummary from "./DateRangeSummary";
import GuestsSummary from "./GuestsSummary";

export default function Basket() {
  const searchParams = useSearchParams();

  const paramsFrom = searchParams.get("checkin");
  const checkin = paramsFrom ? format(paramsFrom, "dd MMM") : "Checkin";
  const paramsTo = searchParams.get("checkout");
  const checkout = paramsTo ? format(paramsTo, "dd MMM") : "Checkin";

  const numberOfGuests = searchParams.get("guests");

  const numberOfNights = differenceInCalendarDays(
    new Date(paramsTo || 0),
    new Date(paramsFrom || 0)
  );
  return (
    <div>
      <Box
        sx={{
          bgcolor: "white",
          border: "1px solid #bdbdbd",
          borderRadius: "0.3125rem",
          p: 2,
          width: "100%",
          display: {
            xs: "none",
            lg: "flex",
          },

          flexDirection: "column",
          gap: {
            xs: "none",
            lg: "1.5rem",
          },
        }}
      >
        <DateRangeSummary
          checkin={checkin}
          checkout={checkout}
          numberOfNights={numberOfNights}
        />
        <GuestsSummary numberOfGuests={numberOfGuests} />
        <Button variant="contained" disableRipple>
          Book now
        </Button>
      </Box>
    </div>
  );
}
