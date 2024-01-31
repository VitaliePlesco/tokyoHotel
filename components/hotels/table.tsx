import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { UpdateHotel, DeleteHotel } from "./buttons";

import { fetchHotels } from "@/lib/data";
import type { Hotel } from "@prisma/client";

export default async function HotelsTable() {
  const hotels: Hotel[] = await fetchHotels();

  return (
    <Box
      sx={{
        borderRadius: "0.375rem",
        bgcolor: "#eeeff2",

        padding: {
          xs: "1em",
          md: "1.5em",
        },
      }}
    >
      <TableContainer component={Paper} elevation={2}>
        <Table aria-label="table">
          <TableHead sx={{ bgcolor: "#d1d5db" }}>
            <TableRow>
              <TableCell
                sx={{ px: "1.5rem", py: "1.5rem", fontWeight: "medium" }}
              >
                Hotel Name
              </TableCell>
              <TableCell
                sx={{ px: "1.5rem", py: "1.5rem", fontWeight: "medium" }}
              >
                City
              </TableCell>
              <TableCell
                sx={{ px: "1.5rem", py: "1.5rem", fontWeight: "medium" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "white" }}>
            {hotels?.map((hotel) => (
              <TableRow
                key={hotel.hotelName}
                sx={{
                  width: "100%",
                  borderBottom: "1px solid #e5e7eb",
                  "&:last-of-type": {
                    borderBottom: "none",
                  },
                }}
              >
                <TableCell
                  sx={{ whiteSpace: "nowrap", px: "1.5rem", py: "1rem" }}
                >
                  <Box sx={{ height: "1.5rem", borderRadius: "0.25rem" }}>
                    <Typography variant="h6">{hotel.hotelName}</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ whiteSpace: "nowrap", px: "1.5rem", py: "1rem" }}
                >
                  <Box sx={{ height: "1.5rem", borderRadius: "0.25rem" }}>
                    <Typography variant="h6">{hotel.city}</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    pr: "1.5rem",
                    py: "1rem",
                    pl: "1.5rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "1.5rem",
                    }}
                  >
                    <UpdateHotel id={hotel.hotelName} />
                    <DeleteHotel id={hotel.hotelName} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
