import HeroImage from "@/components/layout/HeroImage";
import HotelsList from "@/components/layout/hotel/HotelsList";
import SearchWrapper from "@/components/booking/SearchWrapper";

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
        <div>
          <SearchWrapper />
        </div>
      </HeroImage>
      <Container sx={{ pt: "2rem" }}>
        <Typography variant="h4">Hotels</Typography>
        <div>
          <HotelsList />
        </div>
      </Container>
    </div>
  );
}
