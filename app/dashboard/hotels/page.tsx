import { CreateHotel } from "@/components/hotels/buttons";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function page() {
  return (
    <Box component="main">
      <Box
        sx={{
          padding: {
            xs: "1rem",
            md: "1.45rem",
          },
        }}
      >
        <Typography variant="h4">Hotels</Typography>
      </Box>
      <CreateHotel />
    </Box>
  );
}
