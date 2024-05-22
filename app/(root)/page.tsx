import HeroImage from "@/components/layout/HeroImage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchWrapper from "@/components/booking/SearchWrapper";

import HotelsList from "@/components/layout/hotel/HotelsList";

export default function Home() {
  return (
    <div>
      <main style={{ flex: 1 }}>
        <HeroImage url="/images/wide.jpg" height={500}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              opacity: "0.95",
              fontSize: {
                xs: "h4.fontSize",
                md: "h2.fontSize",
              },
              lineHeight: {
                xs: 1.2,
              },
            }}
          >
            Where are You going to travel next?
          </Typography>
          <div>
            <SearchWrapper />
          </div>
        </HeroImage>
        <Container maxWidth="lg" sx={{ pt: "2rem" }}>
          <Typography variant="h4">Select a hotel</Typography>
          <div>
            <HotelsList />
          </div>
        </Container>
      </main>
    </div>
  );
}
