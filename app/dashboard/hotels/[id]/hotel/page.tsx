import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import TabNav from "@/components/hotels/Rooms/TabNav";
import CardWrapper from "@/components/hotels/Rooms/CardWrapper";

import { notFound } from "next/navigation";
import Box from "@mui/material/Box";

import { fetchHotelById } from "@/lib/data";
import { fetchRoomTypes } from "@/lib/data";

export default async function page({ params }: { params: { id: string } }) {
  const id = decodeURI(params.id);
  const hotel = await fetchHotelById(id);
  if (!hotel) {
    notFound();
  }
  const roomTypes = await fetchRoomTypes();

  return (
    <main>
      <Box
        sx={{
          padding: {
            xs: "1rem",
            md: "1.45rem",
          },
        }}
      >
        <Breadcrumbs
          breadcrumbs={[
            { label: "Hotels", href: "/dashboard/hotels" },
            {
              label: `${id}`,
              href: `/dashboard/hotels/${id}/hotel`,
              active: true,
            },
          ]}
        />
      </Box>

      <Box
        sx={{
          margin: {
            xs: "1rem",
            md: "1.45rem",
          },
        }}
      >
        <div>
          <CardWrapper id={id} />
        </div>
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
          <TabNav id={id} roomTypes={roomTypes} />
        </Box>
      </Box>
    </main>
  );
}
