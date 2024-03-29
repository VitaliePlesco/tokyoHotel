import Box from "@mui/material/Box";
import SearchRoomsForm from "./SearchRoomsForm";

import { fetchHotels } from "@/lib/data";
import { Hotel } from "@prisma/client";
export default async function SearchWrapper() {
  const hotels: Hotel[] = await fetchHotels();
  return (
    <div>
      <Box
        sx={{
          py: 6,
        }}
      >
        <SearchRoomsForm hotels={hotels} />
      </Box>
    </div>
  );
}
