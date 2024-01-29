import { Suspense } from "react";
import { Button } from "@/components/hotels/buttons";
import HotelsTable from "@/components/hotels/table";
import { HotelsTableSkeleton } from "@/components/skeletons";

import AddIcon from "@mui/icons-material/Add";

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
      <Box
        sx={{
          padding: {
            xs: "1rem",
            md: "1.45rem",
          },
        }}
      >
        <Button
          name="Create Hotel"
          Icon={<AddIcon />}
          link="/dashboard/hotels/create"
        />
      </Box>
      <Box
        sx={{
          padding: {
            xs: "1rem",
            md: "1.45rem",
          },
        }}
      >
        <Suspense fallback={<HotelsTableSkeleton />}>
          <HotelsTable />
        </Suspense>
      </Box>
    </Box>
  );
}
