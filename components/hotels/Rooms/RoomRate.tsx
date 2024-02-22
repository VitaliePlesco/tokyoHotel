import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "../buttons";

export default function RoomRate() {
  return (
    <Box>
      <Stack spacing={4}>
        <TextField
          select
          label="Select room category"
          variant="outlined"
          sx={{ bgcolor: "white" }}
        >
          <MenuItem disableRipple value={"DOUBLE"}>
            Double
          </MenuItem>
          <MenuItem disableRipple value={"TWIN"}>
            Twin
          </MenuItem>
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
