import Link from "next/link";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

type BreadcrumbProps = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbProps[];
}) {
  return (
    <Box component="nav" aria-label="Breadcrumb" sx={{ display: "block" }}>
      <List component="ol" sx={{ display: "flex", padding: "0" }}>
        {breadcrumbs.map((breadcrumb, index) => (
          <ListItem
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            sx={{ padding: "0", width: "auto" }}
          >
            <Typography
              component={Link}
              href={breadcrumb.href}
              variant="h4"
              sx={{
                textDecoration: "none",

                color: breadcrumb.active ? "#111827" : "#6b7280",
              }}
            >
              {breadcrumb.label}
            </Typography>

            {index < breadcrumbs.length - 1 ? (
              <Box component="span">
                <Typography
                  variant="h4"
                  sx={{ color: breadcrumb.active ? "#111827" : "#6b7280" }}
                >
                  /
                </Typography>
              </Box>
            ) : null}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
