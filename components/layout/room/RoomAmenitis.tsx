import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function RoomAmenitis() {
  return (
    <div>
      <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Box
          component="span"
          sx={{ display: "flex", gap: "0.25rem", color: "text.secondary" }}
        >
          <BedOutlinedIcon />
          <Typography variant="body1">Double bed</Typography>
        </Box>
        <Box
          component="span"
          sx={{
            display: "flex",
            gap: "0.15rem",
            color: "text.secondary",
          }}
        >
          <WindowOutlinedIcon />
          <Typography variant="body1">Window</Typography>
        </Box>
        <Box
          component="span"
          sx={{ display: "flex", gap: "0.15rem", color: "text.secondary" }}
        >
          <ShowerOutlinedIcon />
          <Typography variant="body1">Shower</Typography>
        </Box>
        <Box
          component="span"
          sx={{ display: "flex", gap: "0.25rem", color: "text.secondary" }}
        >
          <PersonOutlineOutlinedIcon />
          <Typography variant="body1">Sleeps 2</Typography>
        </Box>
      </Box>
    </div>
  );
}
