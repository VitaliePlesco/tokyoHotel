"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { createHotel } from "@/lib/actions";
import { Button } from "./buttons";

import { hotelSchema, ThotelSchema } from "@/lib/validations/hotelSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ThotelSchema>({
    resolver: zodResolver(hotelSchema),
  });
  return (
    <Box
      sx={{
        borderRadius: "0.375rem",
        bgcolor: "#eeeff2",
        margin: {
          xs: "1rem",
          md: "1.45rem",
        },
        padding: {
          xs: "1em",
          md: "1.5em",
        },
      }}
    >
      <Box component="form" action={createHotel}>
        <Stack spacing={4}>
          <TextField
            type="text"
            label="Hotel name"
            {...register("name")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
          />
          <TextField
            error={errors.city ? true : false}
            type="text"
            label="City"
            {...register("city")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: "2rem",
            }}
          >
            <TextField
              type="text"
              label="Number"
              {...register("strNo")}
              variant="outlined"
              sx={{ bgcolor: "white", width: "100%" }}
            />
            <TextField
              type="text"
              label="Street Address"
              {...register("street")}
              variant="outlined"
              sx={{ bgcolor: "white", width: "100%" }}
            />
          </Box>
          <TextField
            type="email"
            label="Email"
            {...register("email")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
          />
          <TextField
            type="tel"
            label="Phone number"
            {...register("phoneNumber")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
          />
        </Stack>
        <button type="submit">Add</button>
      </Box>
    </Box>
  );
}
