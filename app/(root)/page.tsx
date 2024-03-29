import HeroImage from "@/components/layout/HeroImage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import HotelsList from "@/components/layout/HotelsList";
import { merriweather } from "../layout";

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
            }}
          >
            Where are You going to travel next?
          </Typography>
        </HeroImage>
        <Container maxWidth="lg" sx={{ pt: "3rem" }}>
          <Typography variant="h4">Select a hotel</Typography>
          <div>
            <HotelsList />
          </div>
        </Container>
      </main>
    </div>
  );
}
