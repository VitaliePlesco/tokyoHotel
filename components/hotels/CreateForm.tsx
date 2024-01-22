import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateForm() {
  return (
    <Box
      sx={{
        borderRadius: "0.375rem",
        bgcolor: "#eeeff2",
        margin: {
          xs: "1rem",
          md: "1.45rem",
        },
        padding: {
          xs: "1em",
          md: "1.5em",
        },
      }}
    >
      <Box component="form">
        <Stack spacing={4}>
          <TextField
            // error={errors.email ? true : false}
            type="text"
            label="Hotel name"
            // {...register("email")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
            // helperText={errors.email ? `${errors.email.message}` : " "}
          />
          <TextField
            // error={errors.email ? true : false}
            type="text"
            label="City"
            // {...register("email")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
            // helperText={errors.email ? `${errors.email.message}` : " "}
          />
          <TextField
            // error={errors.email ? true : false}
            type="text"
            label="Street Address"
            // {...register("email")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
            // helperText={errors.email ? `${errors.email.message}` : " "}
          />
          <TextField
            // error={errors.email ? true : false}
            type="email"
            label="Email"
            // {...register("email")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
            // helperText={errors.email ? `${errors.email.message}` : " "}
          />
          <TextField
            // error={errors.email ? true : false}
            type="Text"
            label="Phone number"
            // {...register("email")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
            // helperText={errors.email ? `${errors.email.message}` : " "}
          />
          <TextField
            // error={errors.email ? true : false}
            type="number"
            label="Number of rooms"
            // {...register("email")}
            variant="outlined"
            sx={{ bgcolor: "white" }}
            // helperText={errors.email ? `${errors.email.message}` : " "}
          />
        </Stack>
      </Box>
    </Box>
  );
}
