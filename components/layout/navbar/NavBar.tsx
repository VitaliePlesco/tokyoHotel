// "use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import UserMenu from "./UserMenu";
import MobileNav from "./MobileNav";
import Logo from "../Logo";
import Nav from "./Nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignInButton from "./SignInButton";

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  const name =
    session?.user?.email?.slice(0, session?.user?.email?.indexOf("@")) ??
    "user";
  // console.log(session);
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
          <Logo />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Nav />
          </Box>

          <Box sx={{ display: { xs: "flex", alignItems: "center" } }}>
            {!session ? <SignInButton /> : <UserMenu username={name} />}
            <MobileNav />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
