import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function HotelCard() {
  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image="/images/tokyo/tokyo.jpg"
        alt="Tokyo city street junction"
      />
    </Card>
  );
}
