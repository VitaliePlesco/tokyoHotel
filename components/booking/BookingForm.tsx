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

import DateRange from "./DateRange";

import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";

export default function BookingForm() {
  const { reset, control, handleSubmit } = useForm();
  return (
    <div>
      <Paper sx={{ p: "1.25rem", bgcolor: "white" }}>
        <Box
          component="form"
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
            render={({ field }) => (
              <TextField
                select
                sx={{ bgcolor: "white" }}
                {...field}
                fullWidth
                defaultValue="hotel 1"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ApartmentIcon />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem disableRipple value="hotel 1" sx={{ pl: "2.9rem" }}>
                  Hotel 1
                </MenuItem>
                <MenuItem disableRipple value="hotel 2" sx={{ pl: "2.9rem" }}>
                  Hotel 2
                </MenuItem>
              </TextField>
            )}
          />
          <Box sx={{ width: "100%" }}>
            <DateRange />
          </Box>
          <Controller
            control={control}
            name="guests"
            render={({ field }) => (
              <TextField
                select
                sx={{ bgcolor: "white" }}
                {...field}
                fullWidth
                defaultValue="1 guest"
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
          <Box>
            <Button variant="contained" sx={{ py: "0.95rem" }}>
              <Typography sx={{ whiteSpace: "nowrap" }}>Find Rooms</Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
