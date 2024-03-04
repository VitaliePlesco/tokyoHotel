import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { useForm, Controller } from "react-hook-form";
import { useFormState } from "react-dom";
import { useRef, useEffect } from "react";

import { addCategory } from "@/lib/actions";

import { Button } from "../buttons";
import { manageRoomsSchema } from "@/lib/validations/hotelSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddCategory() {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { errors: {}, message: null };

  const [state, dispatch] = useFormState(addCategory, initialState);

  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    getValues,
    control,
    reset,
  } = useForm<z.infer<typeof manageRoomsSchema>>({
    resolver: zodResolver(manageRoomsSchema),
  });
  return (
    <Box component="form" ref={formRef} action={dispatch}>
      <Stack spacing={4}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Controller
            control={control}
            name="type"
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="text"
                id="type"
                {...field}
                fullWidth
                label="Room category"
                variant="outlined"
                sx={{ bgcolor: "white" }}
              />
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
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Add Room Type</Button>
        </Box>
      </Stack>
    </Box>
  );
}
