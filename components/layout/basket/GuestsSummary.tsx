import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function GuestsSummary({
  numberOfGuests,
}: {
  numberOfGuests: string | null;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <PersonOutlineOutlinedIcon
          sx={{ color: "text.primary", pr: "0.25rem", fontSize: "28px" }}
        />
        <Typography
          sx={{
            color: "text.primary",
            whiteSpace: "nowrap",
          }}
        >
          {numberOfGuests}
        </Typography>
      </Box>
    </Box>
  );
}
