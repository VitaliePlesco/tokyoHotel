import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export function TableRowSkeleton() {
  return (
    <TableRow
      sx={{
        width: "100%",
        borderBottom: "1px solid #e5e7eb",
        "&:last-of-type": {
          borderBottom: "none",
        },
      }}
    >
      <TableCell sx={{ whiteSpace: "nowrap", px: "1.5rem", py: "1rem" }}>
        <Box
          sx={{ height: "1.5rem", width: "175px", borderRadius: "0.25rem" }}
        ></Box>
      </TableCell>
      <TableCell sx={{ whiteSpace: "nowrap", px: "1.5rem", py: "1rem" }}>
        <Box sx={{ height: "1.5rem", borderRadius: "0.25rem" }}></Box>
      </TableCell>
      <TableCell
        sx={{ whiteSpace: "nowrap", pr: "1.5rem", py: "1rem", pl: "1.5rem" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              height: "50px",
              width: "50px",
              borderRadius: "0.25rem",
              backgroundColor: "#e5e7eb",
            }}
          ></Box>
          <Box
            sx={{
              height: "50px",
              width: "50px",
              borderRadius: "0.25rem",
              backgroundColor: "#e5e7eb",
            }}
          ></Box>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export function HotelsTableSkeleton() {
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
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
