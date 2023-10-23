import HeroImage from "@/components/layout/HeroImage";
import Container from "@mui/material/Container";

export default function page() {
  return (
    <div style={{ flex: 1 }}>
      <HeroImage url="/images/wide.jpg" height={600} />
      <Container>hotels</Container>
    </div>
  );
}
