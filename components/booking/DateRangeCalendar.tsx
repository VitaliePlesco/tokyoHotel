import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";

import { format } from "date-fns";

import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import { Controller, Control } from "react-hook-form";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";

import "react-day-picker/dist/style.css";

export default function DateRangeCalendar({
  control,
  checkin,
  checkout,
  onChangeDate,
  selectedDefault,
}: {
  control: Control;
  checkin: string;
  checkout: string;
  onChangeDate?: (value: DateRange) => void;
  selectedDefault?: DateRange;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const paramsFrom = selectedDefault?.from
    ? format(selectedDefault?.from, "d MMM")
    : null;
  const paramsTo = selectedDefault?.to
    ? format(selectedDefault?.to, "d MMM")
    : null;

  return (
    <>
      <Button
        id="menu-button"
        variant="outlined"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<DateRangeOutlinedIcon sx={{ color: "text.primary" }} />}
        sx={{
          boxSizing: "border-box",
          width: "100%",
          py: "0.94rem",
          border: "1px solid #c6c6c6",
          outline: open ? "2px solid #1976d2" : "",
          textTransform: "none",
          justifyContent: "flex-start",
          "&:hover": {
            border: "1px solid black",
            backgroundColor: "transparent",
          },
          ":focus": {
            outline: open ? "" : "2px solid #1976d2",
          },
        }}
      >
        <Typography
          sx={{
            color: "text.primary",
            whiteSpace: "nowrap",
          }}
        >
          {paramsFrom ?? checkin} &#8594; {paramsTo ?? checkout}
        </Typography>
      </Button>
      <Menu
        id="date-range-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transitionDuration={100}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        marginThreshold={null}
        disableScrollLock
      >
        <Controller
          control={control}
          defaultValue={selectedDefault}
          name="dayPicker"
          render={({ field: { onChange, value } }) => (
            <DayPicker
              mode="range"
              numberOfMonths={2}
              pagedNavigation
              showOutsideDays
              fromDate={new Date()}
              defaultMonth={selectedDefault?.from}
              weekStartsOn={1}
              selected={value}
              onSelect={(value) => {
                onChange(value);
                if (onChangeDate) {
                  if (value) {
                    onChangeDate(value);
                  }
                }
              }}
            />
          )}
        />
      </Menu>
    </>
  );
}
