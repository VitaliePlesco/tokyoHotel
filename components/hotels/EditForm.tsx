"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { updateHotel } from "@/lib/actions";
import { CancelButton, Button } from "./buttons";

import { hotelSchema, ThotelSchema } from "@/lib/validations/hotelSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hotel } from "@prisma/client";

export default function EditForm({ hotel }: { hotel: Hotel }) {
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ThotelSchema>({
    resolver: zodResolver(hotelSchema),
  });
  const updateHotelWithId = updateHotel.bind(null, hotel.hotelName);
  return (
    <Box
      sx={{
        margin: {
          xs: "1rem",
          md: "1.45rem",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "0.375rem",
          bgcolor: "#eeeff2",

          padding: {
            xs: "1em",
            md: "1.5em",
          },
        }}
      >
        <Box component="form" action={updateHotelWithId}>
          <Stack spacing={4}>
            <TextField
              type="text"
              label="Hotel name"
              {...register("hotelName")}
              variant="outlined"
              sx={{ bgcolor: "white" }}
              defaultValue={hotel.hotelName}
            />
            <TextField
              error={errors.city ? true : false}
              type="text"
              label="City"
              defaultValue={hotel.city}
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
                defaultValue={hotel.buildingNumber}
                {...register("buildingNumber")}
                variant="outlined"
                sx={{ bgcolor: "white", width: "100%" }}
              />
              <TextField
                type="text"
                label="Street Address"
                defaultValue={hotel.streetName}
                {...register("streetName")}
                variant="outlined"
                sx={{ bgcolor: "white", width: "100%" }}
              />
            </Box>
            <TextField
              type="email"
              label="Email"
              defaultValue={hotel.email}
              {...register("email")}
              variant="outlined"
              sx={{ bgcolor: "white" }}
            />
            <TextField
              type="tel"
              label="Phone number"
              defaultValue={hotel.phoneNumber}
              {...register("phoneNumber")}
              variant="outlined"
              sx={{ bgcolor: "white" }}
            />
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          gap: "1.5rem",
          py: "1.5rem",
        }}
      >
        <CancelButton link="/dashboard/hotels" />
        <Button>Add hotel</Button>
      </Box>
    </Box>
  );
}
