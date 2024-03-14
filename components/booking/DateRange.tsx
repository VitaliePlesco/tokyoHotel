import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import { useForm, Controller } from "react-hook-form";

import { useState, useEffect } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export default function DateRange() {
  const [range, setRange] = useState<DateRange | undefined>();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { reset, control, handleSubmit } = useForm();
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
          // ":active": {
          //   backgroundColor: "transparent",
          // },
          ":focus": {
            outline: open ? "" : "2px solid #1976d2",
            // border: "none",
          },
        }}
      >
        <Typography
          sx={{
            color: "text.primary",
            whiteSpace: "nowrap",
          }}
        >
          Checkin - Checkout
        </Typography>
      </Button>
      <Menu
        id="date-range-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <DayPicker
          mode="range"
          numberOfMonths={2}
          pagedNavigation
          showOutsideDays
          weekStartsOn={1}
          selected={range}
          onSelect={setRange}
        />
      </Menu>
      <div>{/* <Button component={Select}>Hwllo</Button> */}</div>
    </>
  );
}
