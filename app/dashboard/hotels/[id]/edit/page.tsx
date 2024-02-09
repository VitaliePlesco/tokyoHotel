import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import EditForm from "@/components/hotels/EditForm";

import { notFound } from "next/navigation";
import Box from "@mui/material/Box";

import { fetchHotelById } from "@/lib/data";

export default async function page({ params }: { params: { id: string } }) {
  const id = decodeURI(params.id);
  const hotel = await fetchHotelById(id);
  if (!hotel) {
    notFound();
  }
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
              label: "Edit Hotel",
              href: `/dashboard/hotels/${id}/edit`,
              active: true,
            },
          ]}
        />
      </Box>
      <Box>
        <EditForm hotel={hotel} />
      </Box>
    </main>
  );
}
