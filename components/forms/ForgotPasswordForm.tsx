"use client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { TEmailSchema, emailSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TEmailSchema>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: TEmailSchema) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    });
    if (response.ok) {
      reset();
      router.push("/");
    }
  };

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ marginTop: "2px" }}>
            Request new password
          </Typography>

          <TextField
            // error={errors.email ? true : false}
            type="email"
            label="Email"
            autoFocus
            {...register("email")}
            variant="outlined"
            helperText={errors.email ? `${errors.email.message}` : " "}
          />

          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{
              color: "white",
            }}
          >
            Request a recovery link
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
