import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../buttons";
// import type { RoomType } from "@/lib/definitions";
import { RoomType } from "@prisma/client";
import { useForm } from "react-hook-form";

export default function RoomRate({ roomTypes }: { roomTypes: RoomType[] }) {
  const { register } = useForm();
  return (
    <Box>
      <Stack spacing={4}>
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
          {roomTypes.map((roomType) => (
            <MenuItem disableRipple key={roomType.id}>
              {roomType.roomTypeName}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          type="text"
          label="Rate"
          name="rate"
          variant="outlined"
          sx={{ bgcolor: "white" }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Update Rate</Button>
        </Box>
      </Stack>
    </Box>
  );
}
