import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import CreateForm from "@/components/hotels/CreateForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function page() {
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
              label: "Create Hotel",
              href: "/dashboard/hotels/create",
              active: true,
            },
          ]}
        />
      </Box>
      <Box>
        <CreateForm />
      </Box>
    </main>
  );
}
