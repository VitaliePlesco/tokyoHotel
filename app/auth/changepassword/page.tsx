import HeroImage from "@/components/layout/HeroImage";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

import ChangePasswordForm from "@/components/forms/ChangePasswordForm";

type ChangePasswordPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ChangePasswordPage({
  searchParams,
}: ChangePasswordPageProps) {
  if (searchParams.token) {
    const user = await db.user.findUnique({
      where: {
        resetPasswordToken: searchParams.token as string,
      },
    });
    if (!user) {
      redirect("/auth/forgotpassword");
    }
  }
  return (
    <main style={{ flex: 1 }}>
      <HeroImage height={400} url="/images/wide.jpg">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", paddingTop: "2.5em", color: "white" }}
        >
          Change password
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
          <ChangePasswordForm
            resetPasswordToken={searchParams.token as string}
          />
        </Box>
      </Container>
    </main>
  );
}
