import Link from "next/link";

import Box from "@mui/material/Box";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import Typography from "@mui/material/Typography";
import React from "react";
import { deleteHotel } from "@/lib/actions";

type ButtonProps = {
  Icon?: React.ReactElement;
  children: React.ReactNode;
  link: string;
};

export function ButtonLink({ Icon, children, link }: ButtonProps) {
  return (
    <Box
      component={Link}
      href={link}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
        textDecoration: "none",
        bgcolor: "primary.main",
        color: "white",
        "&:hover": {
          bgcolor: "primary.dark",
          color: "white",
        },
        py: "0.75em",
        px: "1em",
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
        {children}
      </Typography>
      {"   "}
      {Icon}
    </Box>
  );
}
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component={"button"}
      type="submit"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        border: "none",
        borderRadius: "0.5rem",
        bgcolor: "primary.main",
        color: "white",
        "&:hover": {
          bgcolor: "primary.dark",
          color: "white",
        },
        py: "0.75em",
        px: "1em",
        fontSize: "0.875rem",
        fontWeight: "500",
        ":focus-visible": {
          outline: "2px solid #2563eb",
          borderRadius: "0.5rem",
        },
      }}
    >
      <Typography component="span">{children}</Typography>
    </Box>
  );
}
export function CancelButton({ link }: { link: string }) {
  return (
    <Box
      component={Link}
      href={link}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
        textDecoration: "none",
        backgroundColor: "#f3f4f6",
        ":hover": {
          backgroundColor: "#e5e7eb",
        },
        py: "0.75em",
        px: "1em",
        fontSize: "0.875rem",
        fontWeight: "500",
        ":focus-visible": {
          outline: "2px solid #2563eb",
          borderRadius: "0.5rem",
        },
      }}
    >
      <Typography component="span">Cancel</Typography>
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
  const deleteHotelWithId = deleteHotel.bind(null, id);
  return (
    <Box component={"form"} action={deleteHotelWithId}>
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
