import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";

const pages = ["Hotels", "Travel Guides", "Help"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function MobileNav() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
      if (
        e.type === "keydown" &&
        ((e as React.KeyboardEvent).key === "Tab" ||
          (e as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpenDrawer(open);
    };
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton size="large" color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={openDrawer}
          anchor="right"
          onClose={toggleDrawer(false)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#42a5f5",
              color: "white",
            }}
          >
            <IconButton
              color="inherit"
              sx={{ alignSelf: "flex-end" }}
              onClick={toggleDrawer(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#42a5f5",

                color: "white",
                textTransform: "uppercase",
              }}
              onClick={toggleDrawer(false)}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "inherit",
                }}
              >
                {pages.map((page) => (
                  <ListItem
                    sx={{
                      textAlign: "center",
                      width: "initial",
                      padding: "0.75em",
                      fontSize: "1.25rem",
                    }}
                    key={page}
                    onClick={toggleDrawer(false)}
                  >
                    {page}
                  </ListItem>
                ))}
              </List>

              <hr style={{ width: "30%", color: "white" }} />
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "inherit",
                }}
              >
                {settings.map((setting) => (
                  <ListItem
                    sx={{
                      textAlign: "center",
                      width: "initial",
                      padding: "0.75em",
                      fontSize: "1.25rem",
                    }}
                    key={setting}
                    onClick={toggleDrawer(false)}
                  >
                    {setting}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
