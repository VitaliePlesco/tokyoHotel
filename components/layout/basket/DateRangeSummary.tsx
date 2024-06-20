import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

export default function DateRangeSummary({
  checkin,
  checkout,
  numberOfNights,
}: {
  checkin: string;
  checkout: string;
  numberOfNights: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          gap: "0.45rem",
        }}
      >
        <DateRangeOutlinedIcon sx={{ color: "text.primary" }} />
        <Typography sx={{ color: "text.primary", fontSize: "1.2rem" }}>
          {checkin} &#8594; {checkout}
        </Typography>
      </Box>
      <Box
        sx={{
          whiteSpace: "nowrap",
        }}
      >
        <Typography variant="body2" sx={{ pr: "0.25rem" }}>
          {numberOfNights} nights
        </Typography>
      </Box>
    </Box>
  );
}
