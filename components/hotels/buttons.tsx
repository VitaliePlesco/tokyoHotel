import Link from "next/link";

import Box from "@mui/material/Box";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import Typography from "@mui/material/Typography";
import React from "react";

type ButtonProps = {
  Icon?: React.ReactElement;
  name: string;
  link: string;
};

export function Button({ Icon, name, link }: ButtonProps) {
  return (
    <Box
      component={Link}
      href={link}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "12em",
        borderRadius: "0.5rem",
        textDecoration: "none",
        bgcolor: "primary.main",
        color: "white",
        "&:hover": {
          bgcolor: "primary.dark",
          color: "white",
        },
        p: "0.75em",
        fontSize: "0.875rem",
        fontWeight: "500",
        ":focus-visible": {
          outline: "2px solid #2563eb",
          borderRadius: "0.5rem",
        },
      }}
    >
      <Typography
        component="span"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        {name}
      </Typography>
      {"   "}
      {Icon}
    </Box>
  );
}

export function UpdateHotel({ id }: { id: string }) {
  return (
    <Box
      component={Link}
      href={`/dashboard/hotels/${id}/edit`}
      sx={{
        border: "1px solid #d1d5db",
        borderRadius: "0.375rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: "0.75rem",
        py: "0.75rem",
        ":hover": {
          backgroundColor: "#e5e7eb",
        },
        color: "black",
      }}
    >
      <ModeEditOutlineSharpIcon />
    </Box>
  );
}

export function DeleteHotel({ id }: { id: string }) {
  return (
    <Box component={"form"}>
      <Box
        component={"button"}
        sx={{
          border: "1px solid #d1d5db",
          borderRadius: "0.375rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: "0.75rem",
          py: "0.75rem",
          backgroundColor: "white",
          ":hover": {
            backgroundColor: "#e5e7eb",
          },
        }}
      >
        <DeleteOutlineSharpIcon />
      </Box>
    </Box>
  );
}
