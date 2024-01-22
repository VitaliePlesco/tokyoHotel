import Sidenav from "@/components/dashboard/sidebar/sidenav";
import Box from "@mui/material/Box";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        height: "100vh",
        overflow: { md: "hidden" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "16rem" } }}>
        <Sidenav />
      </Box>
      <Box
        sx={{
          flexGrow: "1",
          padding: { sx: "0", md: "0", overflowY: "auto" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
