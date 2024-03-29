"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../buttons";
import { addRooms } from "@/lib/actions";
import { RoomType } from "@prisma/client";
import { manageRoomsSchema } from "@/lib/validations/hotelSchemas";
import Select from "@mui/material/Select";

import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm, Controller } from "react-hook-form";
import ConsecutiveSnackbars from "@/components/SnackBar";
import { useRef, useEffect } from "react";

export default function AddRoom({
  id,
  roomTypes,
}: {
  id: string;
  roomTypes: RoomType[];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const addRoomsWithId = addRooms.bind(null, id);
  const initialState = { errors: {}, message: null };

  const [state, dispatch] = useFormState(addRoomsWithId, initialState);

  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    getValues,
    control,
    reset,
  } = useForm<z.infer<typeof manageRoomsSchema>>({
    resolver: zodResolver(manageRoomsSchema),
  });

  const submit = () => {
    formRef.current?.submit();

    reset();
  };

  return (
    <Box
      component="form"
      ref={formRef}
      action={dispatch}
      onSubmit={handleSubmit(submit)}
    >
      <Stack spacing={4}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Controller
            control={control}
            name="number"
            render={({ field }) => (
              <TextField
                type="number"
                label="Number of rooms"
                inputProps={{ min: 1, max: 100, step: 1 }}
                variant="outlined"
                {...field}
                sx={{
                  bgcolor: "white",
                  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                    {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  "input[type='number']": {
                    MozAppearance: "textfield",
                  },
                }}
              />
            )}
          />
          <Box sx={{ py: "0.5rem" }} id="number-error">
            <>
              {state?.errors?.number &&
                state.errors.number.map((error: string) => (
                  <p style={{ color: "red" }} key={error}>
                    {error}
                  </p>
                ))}
              {errors.number && (
                <p style={{ color: "red" }}>{errors.number.message}</p>
              )}
            </>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Controller
            control={control}
            name="type"
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Select room type"
                select
                sx={{ bgcolor: "white" }}
                {...field}
                fullWidth
              >
                <MenuItem disableRipple disabled value="">
                  <em>-- Select type --</em>
                </MenuItem>
                {roomTypes.map((roomType) => (
                  <MenuItem
                    disableRipple
                    key={roomType.id}
                    value={roomType.roomTypeName}
                  >
                    {roomType.roomTypeName}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Box sx={{ py: "0.5rem" }} id="number-error">
            <>
              {state?.errors?.type &&
                state.errors?.type.map((error: string) => (
                  <p style={{ color: "red" }} key={error}>
                    {error}
                  </p>
                ))}
              {errors.type && (
                <p style={{ color: "red" }}>{errors.type.message}</p>
              )}
            </>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit">Add Room</Button>
        </Box>
      </Stack>
    </Box>
  );
}
