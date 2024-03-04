import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../buttons";
import { RoomType } from "@prisma/client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect } from "react";
import { useFormState } from "react-dom";

import { updateRoomRate } from "@/lib/actions";
import { manageRoomsSchema } from "@/lib/validations/hotelSchemas";
import { z } from "zod";

export default function RoomRate({ roomTypes }: { roomTypes: RoomType[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { errors: {}, message: null };

  const [state, dispatch] = useFormState(updateRoomRate, initialState);
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    getValues,
    control,
    reset,
  } = useForm<z.infer<typeof manageRoomsSchema>>({
    resolver: zodResolver(manageRoomsSchema),
  });

  // useEffect(() => {
  //   if (!state?.errors) {
  //     formRef.current?.reset();
  //   }
  // }, [state, formRef]);

  const submit = () => {
    formRef.current?.submit();

    reset();
  };

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={handleSubmit(submit)}
      action={dispatch}
    >
      <Stack spacing={4}>
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

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Controller
            control={control}
            name="number"
            render={({ field }) => (
              <TextField
                type="number"
                label="Rate"
                inputProps={{ min: 0, max: 10000, step: "0.01" }}
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

        <pre>{JSON.stringify(getValues(), null, 4)}</pre>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Update Rate</Button>
        </Box>
      </Stack>
    </Box>
  );
}
