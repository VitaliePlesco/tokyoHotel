"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DateRange } from "react-day-picker";
import InputAdornment from "@mui/material/InputAdornment";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { format } from "date-fns";
import DateRangeCalendar from "./DateRangeCalendar";

import { useForm, Controller } from "react-hook-form";
import { ChangeEvent } from "react";

export default function SearchRoomsByHotel() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const checkStart = searchParams.get("checkin");
  const checkEnd = searchParams.get("checkout");
  const start = checkStart ? new Date(checkStart) : undefined;
  const end = checkEnd ? new Date(checkEnd) : undefined;
  const selectedRangeDefault: DateRange = {
    from: start,
    to: end,
  };

  const numberOfGuests = searchParams.get("guests")?.toString()
    ? searchParams.get("guests")?.toString()
    : "1 guest";

  const { control, watch } = useForm();

  const dayPicker: DateRange = watch("dayPicker");
  const checkin = dayPicker?.from
    ? format(dayPicker?.from, "d MMM")
    : "Checkin";
  const checkout = dayPicker?.to ? format(dayPicker?.to, "d MMM") : "Checkout";

  const handleDateRangeChange = (value: DateRange) => {
    const params = new URLSearchParams(searchParams);
    if (value.from) {
      params.set("checkin", value.from.toString());
    }
    if (value.to) {
      params.set("checkout", value.to.toString());
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("guests", e.target.value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", bgcolor: "white" }}>
          <DateRangeCalendar
            control={control}
            checkin={checkin}
            checkout={checkout}
            onChangeDate={handleDateRangeChange}
            selectedDefault={selectedRangeDefault}
          />
        </Box>

        <Controller
          control={control}
          name="guests"
          render={({ field: { onChange } }) => (
            <TextField
              select
              sx={{ bgcolor: "white" }}
              value={numberOfGuests}
              fullWidth
              onChange={(e) => {
                handleChange(e);
                onChange();
              }}
              SelectProps={{
                MenuProps: { disableScrollLock: true, marginThreshold: null },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem disableRipple value="1 guest" sx={{ pl: "2.9rem" }}>
                1 guest
              </MenuItem>
              <MenuItem disableRipple value="2 guests" sx={{ pl: "2.9rem" }}>
                2 guests
              </MenuItem>
            </TextField>
          )}
        />
      </Box>
    </div>
  );
}
