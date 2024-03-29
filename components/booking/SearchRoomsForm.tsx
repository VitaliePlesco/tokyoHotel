"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import DateRangeCalendar from "./DateRangeCalendar";

import { useForm, Controller } from "react-hook-form";
import { Hotel } from "@prisma/client";

export default function SearchRoomsForm({ hotels }: { hotels: Hotel[] }) {
  const router = useRouter();

  const { control, handleSubmit, getValues, watch } = useForm();

  const submit = () => {
    const { from: checkin, to: checkout } = getValues("dayPicker");
    const { hotel, guests } = getValues();
    const params = new URLSearchParams({ hotel, checkin, checkout, guests });

    router.push(`hotels/${hotel}?${params.toString()}`);
  };

  const dayPicker = watch("dayPicker");
  const checkin = dayPicker?.from
    ? format(dayPicker?.from, "d MMM")
    : "Checkin";
  const checkout = dayPicker?.to ? format(dayPicker?.to, "d MMM") : "Checkout";

  const canSearch =
    watch("hotel") !== "Choose hotel" &&
    !!watch("dayPicker") &&
    !!watch("guests");

  return (
    <div>
      <Paper sx={{ p: "1.25rem", bgcolor: "white" }}>
        <Box
          component="form"
          onSubmit={handleSubmit(submit)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Controller
            control={control}
            name="hotel"
            defaultValue="Choose hotel"
            render={({ field }) => (
              <TextField
                select
                sx={{ bgcolor: "white" }}
                {...field}
                fullWidth
                SelectProps={{
                  MenuProps: { disableScrollLock: true, marginThreshold: null },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ApartmentIcon />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem
                  disableRipple
                  disabled
                  value="Choose hotel"
                  sx={{ pl: "2.9rem" }}
                >
                  Choose hotel
                </MenuItem>

                {hotels.map((hotel) => (
                  <MenuItem
                    key={hotel.hotelName}
                    disableRipple
                    value={hotel.hotelName}
                    sx={{ pl: "2.9rem" }}
                  >
                    {hotel.hotelName}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Box sx={{ width: "100%" }}>
            <DateRangeCalendar
              control={control}
              checkin={checkin}
              checkout={checkout}
            />
          </Box>
          <Controller
            control={control}
            name="guests"
            defaultValue="1 guest"
            render={({ field }) => (
              <TextField
                select
                sx={{ bgcolor: "white" }}
                {...field}
                fullWidth
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
          <div>
            <Button
              type="submit"
              variant="contained"
              disabled={!canSearch}
              sx={{ py: "0.95rem" }}
            >
              <Typography sx={{ whiteSpace: "nowrap" }}>Find Rooms</Typography>
            </Button>
          </div>
        </Box>
      </Paper>
    </div>
  );
}