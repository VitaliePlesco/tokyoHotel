import Button from "@mui/material/Button";

export default function SignInButton() {
  return (
    <Button
      href="/signin"
      variant="outlined"
      color="inherit"
      sx={{
        padding: ".5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Sign in
    </Button>
  );
}
