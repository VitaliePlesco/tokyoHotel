import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function RoomRateCard() {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ paddingBottom: 1 }}>
            <Typography variant="caption">Non Refundable</Typography>
            <Typography
              variant="h5"
              color="primary.main"
              sx={{ fontWeight: "bold" }}
            >
              $458.25
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" sx={{ whiteSpace: "nowrap" }}>
              Add To Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
