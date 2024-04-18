import HeroImage from "@/components/layout/HeroImage";
import HotelsList from "@/components/layout/hotel/HotelsList";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function page() {
  return (
    <div style={{ flex: 1 }}>
      <HeroImage url="/images/wide.jpg" height={500}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", paddingTop: "2.5em", color: "white" }}
        >
          Our Hotels
        </Typography>
      </HeroImage>
      <Container>
        <HotelsList />
      </Container>
    </div>
  );
}
