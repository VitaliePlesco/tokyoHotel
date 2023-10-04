"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";

import UserMenu from "./UserMenu";
import MobileNav from "./MobileNav";
import { useState } from "react";
import Link from "next/link";

const pages = ["Hotels", "Travel Guides", "Help"];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: {
              xs: "0",
            },
          }}
        >
          <Link href="/">
            <Image
              width={130}
              height={25}
              src="images/white-logo.svg"
              alt="logo"
              priority
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", alignItems: "center" } }}>
            <UserMenu />
            <MobileNav />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
