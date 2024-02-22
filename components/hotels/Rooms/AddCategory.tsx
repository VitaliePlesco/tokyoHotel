import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { useRef, useEffect } from "react";

import { addCategory } from "@/lib/actions";

import { Button } from "../buttons";

export default function AddCategory() {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(addCategory, initialState);

  const { register } = useForm();
  return (
    <Box component="form" ref={formRef} action={dispatch}>
      <Stack spacing={4}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            type="text"
            label="Number of rooms"
            {...register("number")}
            inputProps={{ min: 1, max: 100 }}
            required
            variant="outlined"
            sx={{ bgcolor: "white" }}
          />
          <Box sx={{ py: "0.5rem" }} id="number-error">
            {state?.errors?.type &&
              state.errors.type.map((error: string) => (
                <p style={{ color: "red" }} key={error}>
                  {error}
                </p>
              ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            select
            id="type"
            defaultValue=""
            {...register("type")}
            label="Select room type"
            required
            variant="outlined"
            sx={{ bgcolor: "white" }}
          >
            <MenuItem disableRipple disabled selected defaultValue="">
              -- Please choose an option --
            </MenuItem>
            <MenuItem disableRipple value={"DOUBLE"}>
              Double
            </MenuItem>
            <MenuItem disableRipple value={"TWIN"}>
              Twin
            </MenuItem>
          </TextField>
          <Box sx={{ py: "0.5rem" }} id="number-error">
            {state?.errors?.number &&
              state.errors?.number.map((error: string) => (
                <p style={{ color: "red" }} key={error}>
                  {error}
                </p>
              ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Add Room</Button>
        </Box>
      </Stack>
    </Box>
  );
}