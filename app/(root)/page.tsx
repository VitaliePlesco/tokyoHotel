import HeroImage from "@/components/layout/HeroImage";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <div>
      <main style={{ flex: 1 }}>
        <HeroImage url="/images/wide.jpg" height={600} />
        <Container maxWidth="lg">
          <h1>Stuff goes here</h1>
        </Container>
      </main>
    </div>
  );
}
