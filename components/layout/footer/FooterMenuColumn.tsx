import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

type Links = {
  name: string;
  path: string;
};

type FooterMenuProps = {
  categoryName: string;
  links: Links[];
};

export default function FooterMenuColumn({
  categoryName,
  links,
}: FooterMenuProps) {
  return (
    <Box sx={{ color: "white" }}>
      <Typography variant="h6" sx={{ color: "text.primary" }}>
        {categoryName}
      </Typography>
      <ul style={{ listStyle: "none", color: "white", padding: "0.1em" }}>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.path} sx={{ color: "inherit" }} underline="hover">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}
