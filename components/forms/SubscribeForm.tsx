"use client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useForm } from "react-hook-form";
import { subscribeSchema } from "@/lib/validations/subscribe";
import { type TSubscribeSchema } from "@/lib/validations/subscribe";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SubscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSubscribeSchema>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = (data: TSubscribeSchema) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      noValidate
      autoComplete="off"
      // sx={{ maxWidth: "35%" }}
    >
      <Stack
        spacing={2}
        sx={{
          padding: "0 0.85em 0.85em 0.85em",
          bgcolor: "#e7e7e7",
          borderRadius: "0.4rem",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ display: "block", paddingTop: "4px" }}
        >
          Subscribe to get hotel deals and offers by email.
        </Typography>
        <TextField
          error={errors.name ? true : false}
          type="text"
          label="Name"
          {...register("name", { required: "You must enter a name" })}
          variant="outlined"
          size="small"
          helperText={errors.name ? `${errors.name.message}` : " "}
        />

        <TextField
          error={errors.email ? true : false}
          type="email"
          label="Email"
          {...register("email")}
          variant="outlined"
          size="small"
          helperText={errors.email ? `${errors.email.message}` : " "}
        />
        <FormControlLabel
          {...register("acceptPromo")}
          label={
            <Typography variant="caption" sx={{ marginTop: "2px" }}>
              I agree to receive marketing and promotion emails
            </Typography>
          }
          control={<Checkbox sx={{ paddingLeft: 0 }} />}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          sx={{
            color: "white",
          }}
        >
          Subscribe
        </Button>
      </Stack>
    </Box>
  );
}
