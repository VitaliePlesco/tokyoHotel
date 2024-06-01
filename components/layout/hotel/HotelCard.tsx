"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { addDays, format } from "date-fns";
import Link from "next/link";

type HotelCardProps = {
  title: string;
  img?: string;
};

export default function HotelCard({ title, img }: HotelCardProps) {
  const params = new URLSearchParams({
    hotel: title,
    checkin: format(new Date(), "y-MM-dd"),
    checkout: format(addDays(new Date(), 1), "y-MM-dd"),
    guests: "1 guest",
  });
  return (
    <Box component={Link} href={`/hotels/${title}?${params}`}>
      <Card sx={{ position: "relative", height: "240px" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            height: "35%",
            color: "white",
            px: "1rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(224,224,224,0.2) 100%)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.5px",
              lineHeight: "1.25",
            }}
          >
            {title}
          </Typography>
          <Card sx={{ px: "1.25rem", textAlign: "center" }}>
            <Typography variant="subtitle1">From</Typography>
            <Typography
              variant="h6"
              sx={{ color: "primary.main", fontWeight: "bold" }}
            >
              £44.90
            </Typography>
          </Card>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "100%" }}
          image={img}
          alt="Tokyo city street junction"
        />
      </Card>
    </Box>
  );
}
