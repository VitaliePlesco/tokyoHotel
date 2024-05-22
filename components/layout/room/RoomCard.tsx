import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import RoomAmenitis from "./RoomAmenitis";
import RoomRateCard from "./RoomRateCard";

export default function RoomCard({
  numberOfRooms,
  roomType,
}: {
  numberOfRooms: number;
  roomType: string;
}) {
  return (
    <Box
      sx={{
        p: {
          xs: "0.75rem",
          md: "1.25rem",
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <CardMedia
            sx={{
              height: 200,
              display: {
                xs: "block",
                md: "none",
              },
            }}
            image="/images/s.jpg"
          />

          <CardContent
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <CardMedia
              sx={{ height: 200, borderRadius: "0.3125rem" }}
              image="/images/s.jpg"
            />
          </CardContent>
          <CardContent
            sx={{
              mt: {
                md: "-1rem",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: "h5.fontSize",
                  md: "h4.fontSize",
                },
                fontWeight: "bold",
              }}
            >
              {roomType} Bed Room
            </Typography>
            <RoomAmenitis />
          </CardContent>
        </Box>
        <Box sx={{ width: "100%" }}>
          <CardContent>
            <RoomRateCard />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box
                sx={{
                  backgroundColor: "orange",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  p: "0.5rem 0.75rem",
                }}
              >
                <Typography variant="body1" sx={{ padding: 0 }}>
                  {numberOfRooms} rooms left
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
