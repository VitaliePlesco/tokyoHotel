import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function GuestsSummary({
  numberOfGuests,
}: {
  numberOfGuests: string | null;
}) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4rem",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <PersonOutlineOutlinedIcon
            sx={{ color: "text.secondary", pr: "0.25rem" }}
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
    </div>
  );
}
