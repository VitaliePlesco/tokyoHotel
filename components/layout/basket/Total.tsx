import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Total({ totalStay }: { totalStay: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "text.primary",
              whiteSpace: "nowrap",
            }}
          >
            Total
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            color="primary.main"
            sx={{
              whiteSpace: "nowrap",
              pr: "0.25rem",
              fontWeight: "bold",
            }}
          >
            £{totalStay}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
