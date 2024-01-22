"use client";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeOutlinedIcon },
  { name: "Hotels", href: "/dashboard/hotels", icon: ApartmentOutlinedIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Box
            component={Link}
            key={link.name}
            href={link.href}
            sx={{
              display: "flex",
              flexGrow: {
                xs: "1",
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
              bgcolor: pathname === link.href ? "#dbeafe" : "#eeeff2",
              color: pathname === link.href ? "primary.main" : "text.primary",
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
              textDecoration: "none",
            }}
          >
            <LinkIcon />
            <Typography paragraph>{link.name}</Typography>
          </Box>
        );
      })}
    </>
  );
}
