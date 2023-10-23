import FooterMenuColumn from "./FooterMenuColumn";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../Logo";
import Typography from "@mui/material/Typography";
import SubscribeForm from "../../forms/SubscribeForm";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const companyLinks = {
  categoryName: "Company",
  links: [
    {
      name: "Careers",
      path: "/Careers",
    },
    {
      name: "About Us",
      path: "/About Us",
    },
    {
      name: "Low-Carbon Pledge",
      path: "/Low-Carbon Pledge",
    },
    {
      name: "Press Centre",
      path: "/Press Centre",
    },
    {
      name: "tokyoHistory",
      path: "/tokyoHistory",
    },
    {
      name: "Contact Us",
      path: "/Contact Us",
    },
  ],
};

const customerLinks = {
  categoryName: "Customer",
  links: [
    {
      name: "Contact Us",
      path: "/Contact Us",
    },
    {
      name: "FAQs",
      path: "/FAQ",
    },
  ],
};

const partnerLinks = {
  categoryName: "Partnerships",
  links: [
    {
      name: "Investor Relations",
      path: "/Investor Relations",
    },
    {
      name: "FAQs",
      path: "/FAQ",
    },
  ],
};

const travelGuidesLinks = {
  categoryName: "Travel Guides",
  links: [
    {
      name: "United Kingdom",
      path: "/United Kingdom",
    },
    {
      name: "Europe",
      path: "/Europe",
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Box
        sx={{
          bgcolor: "text.disabled",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: {
                md: "space-between",
              },
              padding: "2em 0 1em 0",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                flexWrap: {
                  xs: "wrap",
                },
              }}
            >
              <FooterMenuColumn
                categoryName={companyLinks.categoryName}
                links={companyLinks.links}
              />
              <FooterMenuColumn
                categoryName={customerLinks.categoryName}
                links={customerLinks.links}
              />
              <FooterMenuColumn
                categoryName={partnerLinks.categoryName}
                links={partnerLinks.links}
              />
              <FooterMenuColumn
                categoryName={travelGuidesLinks.categoryName}
                links={travelGuidesLinks.links}
              />
            </Box>
            <SubscribeForm />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              alignItems: {
                xs: "center",
              },

              padding: "1.25em 0 1.25em 0",
              // bgcolor: "green",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Logo />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  marginBottom: "2px",
                  marginLeft: "2px",
                }}
              >
                .com
              </Typography>
            </Box>
            <Box sx={{ color: "white", alignSelf: "center" }}>
              <p>&copy; Copyright {currentYear} tokyoHotel</p>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
