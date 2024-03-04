import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "total" | "vacant" | "occupied" | "booked";
}) {
  return (
    <Box sx={{ bgcolor: "#eeeff2", borderRadius: "0.375rem", p: "0.5rem" }}>
      <Box sx={{ display: "flex", p: "1rem" }}>
        <>
          <Typography
            variant="h6"
            sx={{ pl: "0.5rem", fontWeight: "medium", color: "text.secondary" }}
          >
            <>{title}</>
          </Typography>
        </>
      </Box>
      <>
        <Typography
          component="p"
          variant="h4"
          sx={{
            bgcolor: "white",
            borderRadius: "0.375rem",
            px: "1rem",
            py: "2rem",
            textAlign: "center",
            color: "text.primary",
          }}
        >
          <>{value}</>
        </Typography>
      </>
    </Box>
  );
}
