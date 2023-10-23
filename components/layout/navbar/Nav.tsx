// "use client";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import Link from "next/link";

const pages = [
  { name: "Hotels", path: "/hotels" },
  { name: "Travel Guides", path: "/travel-guiedes" },
  { name: "Help", path: "/help" },
];

export default function Nav() {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page.name}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          <Link
            href={page.path}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {page.name}
          </Link>
        </Button>
      ))}
    </>
  );
}
