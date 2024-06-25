import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import RoomAmenitis from "./RoomAmenitis";
import { RoomType } from "@prisma/client";

export default function RoomCard({
  roomType,
  children,
}: {
  roomType: RoomType;
  children: React.ReactNode;
}) {
  return (
    <Box
      component="div"
      id="room-card"
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
              {roomType?.roomTypeName} Bed Room
            </Typography>
            <RoomAmenitis />
          </CardContent>
        </Box>
        <Box sx={{ width: "100%" }}>
          <CardContent>{children}</CardContent>
        </Box>
      </Card>
    </Box>
  );
}
