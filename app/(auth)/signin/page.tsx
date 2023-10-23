import SignInForm from "@/components/forms/SignInForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HeroImage from "@/components/layout/HeroImage";
import Typography from "@mui/material/Typography";

export default function SignInPage() {
  return (
    <main style={{ flex: 1 }}>
      <HeroImage height={400} url="/images/wide.jpg">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", paddingTop: "2.5em", color: "white" }}
        >
          Sign In
        </Typography>
      </HeroImage>
      <Container
        maxWidth="lg"
        sx={{ marginBottom: "6rem", marginTop: "-6rem" }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "45%",
            },
            margin: "0 auto",
            padding: "4em 1em",
            bgcolor: "#F8F9FA",
            borderRadius: "4px",
            filter: `drop-shadow(1px 1px 6px #888888)`,
          }}
        >
          <SignInForm />
        </Box>
      </Container>
    </main>
  );
}
