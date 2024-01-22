import Image from "next/image";

import Box from "@mui/material/Box";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import NavLinks from "./nav-links";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Sidenav() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: {
          xs: { paddingX: "0.75rem", paddingY: "1rem" },
          md: { paddingX: "0.5rem" },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { sx: "8rem", md: "100%" },
          backgroundColor: "primary.main",
          borderRadius: {
            xs: "0",
            md: "0 0.375rem 0.375rem 0",
          },
          height: "5rem",
          padding: "0.5em",
        }}
      >
        <Image
          width={145}
          height={35}
          src="/images/white-logo.svg"
          priority
          alt="logo"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          justifyContent: "space-between",

          gap: {
            xs: "0.5rem",
          },
          marginTop: {
            md: "0.5rem",
          },
          flexDirection: {
            md: "column",
          },
        }}
      >
        <NavLinks />
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            width: "100%",
            height: "auto",
            flexGrow: "1",
            borderRadius: "0 0.375rem 0.375rem 0",
            bgcolor: "#eeeff2",
          }}
        ></Box>
        <Button
          disableRipple
          sx={{
            display: "flex",
            flexGrow: {
              xs: "0",
              md: "0",
            },
            height: "48px",
            justifyContent: {
              xs: "center",
              md: "start",
            },
            alignContent: "center",
            gap: "0.75rem",
            borderRadius: {
              xs: "0 0 0.375rem 0.375rem",
              md: "0 0.375rem 0.375rem 0",
            },
            bgcolor: "#eeeff2",
            color: "text.primary",
            padding: {
              xs: "0.75rem",
              md: "0.75rem",
            },
            paddingX: {
              md: "0.75rem",
            },
            fontSize: "0.875rem",
            fontWeight: "500",
            "&:hover": {
              bgcolor: "#dbeafe",
              color: "primary.main",
            },
          }}
        >
          <PowerSettingsNewOutlinedIcon />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            Sign Out
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
