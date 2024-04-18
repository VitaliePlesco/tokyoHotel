import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import { useState } from "react";
import { useUrlParams } from "@/lib/hooks/useUrlParams";
import { Controller, Control } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

export default function DateRangeCalendar({
  control,
  checkin,
  checkout,
  onChangeDate,
}: {
  control: Control;
  checkin: string;
  checkout: string;
  onChangeDate?: (value: any) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { checkin: from, checkout: to } = useUrlParams();

  return (
    <Box sx={{ width: "100%" }}>
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
          py: "0.9375rem",
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
          {checkin} &#8594; {checkout}
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
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: "calc(100% - 1.5rem)",
                sm: "calc(100% - 3rem)",
                md: "auto",
              },
            },
          },
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
        sx={{ width: "calc(100% - 1.5rem)" }}
      >
        <Controller
          control={control}
          defaultValue={[from, to]}
          name="dayPicker"
          render={({ field: { onChange, value } }) => (
            <DatePicker
              selected={value[0]}
              onChange={(value) => {
                onChange(value);
                if (onChangeDate) {
                  if (value) {
                    onChangeDate(value);
                  }
                }
              }}
              startDate={value[0]}
              endDate={value[1]}
              selectsRange
              monthsShown={2}
              minDate={new Date()}
              calendarStartDay={1}
              inline
            />
          )}
        />
      </Menu>
    </Box>
  );
}
