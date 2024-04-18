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
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          gap: "0.25rem",
        }}
      >
        <DateRangeOutlinedIcon sx={{ color: "text.secondary" }} />
        <Typography>
          {checkin} &#8594; {checkout}
        </Typography>
      </Box>
      <Box
        sx={{
          whiteSpace: "nowrap",
        }}
      >
        <Typography variant="body1">{numberOfNights} nights</Typography>
      </Box>
    </Box>
  );
}
