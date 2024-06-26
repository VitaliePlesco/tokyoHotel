"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { addDays, differenceInCalendarDays, format } from "date-fns";
import DateRangeCalendar from "./DateRangeCalendar";
import { useUrlParams } from "@/lib/hooks/useUrlParams";
import { useForm, Controller } from "react-hook-form";
import { ChangeEvent } from "react";
import { useCartStore } from "@/stores/cartStore";

export default function SearchRoomsByHotel({ hotelId }: { hotelId: string }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const { control, watch } = useForm();
  const searchParams = useSearchParams();

  const { hotel, checkin, checkout, guests } = useUrlParams();
  const { removeFromCart } = useCartStore();
  const { setStartDate, setEndDate, setNumberOfNights, dateRange } =
    useCartStore();

  const dayPicker = watch("dayPicker");
  let from = checkin ? format(checkin, "dd MMM") : format(new Date(), "dd MMM");
  let to = checkout
    ? format(checkout, "dd MMM")
    : format(addDays(new Date(), 1), "dd MMM");
  if (dayPicker && dayPicker[0]) {
    from = format(dayPicker[0], "dd MMM");
  }
  if (dayPicker && dayPicker[1]) {
    to = format(dayPicker[1], "dd MMM");
  }

  const handleDateRangeChange = async (value: Date[]) => {
    const params = new URLSearchParams(searchParams);
    if (value[0]) {
      params.set("checkin", format(value[0], "y-MM-dd"));
      setStartDate(format(value[0], "y-MM-dd"));
      setEndDate(null);
    }
    if (value[1]) {
      params.set("checkout", format(value[1], "y-MM-dd"));
      setEndDate(format(value[1], "y-MM-dd"));
    }

    const numberOfNights = differenceInCalendarDays(
      new Date(value[1]),
      new Date(value[0])
    );

    if (numberOfNights > 0) {
      setNumberOfNights(numberOfNights);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
    removeFromCart();
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
      <Paper
        variant="outlined"
        sx={{
          p: {
            xs: "0.75rem",
            md: "1.25rem",
          },
          bgcolor: "white",
          border: "1px solid #bdbdbd",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%", bgcolor: "white" }}>
            <DateRangeCalendar
              control={control}
              checkin={from}
              checkout={to}
              onChangeDate={handleDateRangeChange}
            />
          </Box>
          <Controller
            control={control}
            name="guests"
            render={({ field: { onChange } }) => (
              <TextField
                select
                sx={{ bgcolor: "white" }}
                value={guests || "1 guest"}
                fullWidth
                onChange={(e) => {
                  handleChange(e);
                  onChange();
                }}
                SelectProps={{
                  MenuProps: {
                    disableScrollLock: true,
                    marginThreshold: null,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon
                        sx={{ color: "text.primary" }}
                      />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem
                  disableRipple
                  value="1 guest"
                  sx={{ pl: "2.9rem", color: "text.primary" }}
                >
                  1 guest
                </MenuItem>
                <MenuItem
                  disableRipple
                  value="2 guests"
                  sx={{ pl: "2.9rem", color: "text.primary" }}
                >
                  2 guests
                </MenuItem>
              </TextField>
            )}
          />
        </Box>
      </Paper>
    </div>
  );
}
