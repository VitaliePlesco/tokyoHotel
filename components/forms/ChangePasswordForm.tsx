"use client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TChangePasswordSchema } from "@/lib/validations/auth";
import { changePasswordSchema } from "@/lib/validations/auth";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ChangePasswordFormProps = {
  resetPasswordToken: string;
};

export default function ChangePasswordForm({
  resetPasswordToken,
}: ChangePasswordFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        resetPasswordToken: resetPasswordToken,
      }),
    });

    if (response.ok) {
      reset();
      router.push("/auth/signin");
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
            Enter your new password
          </Typography>

          <TextField
            error={errors.password ? true : false}
            type={showPassword ? "text" : "password"}
            label="Password"
            {...register("password", { required: "Must be 8 or more" })}
            variant="outlined"
            helperText={errors.password ? `${errors.password.message}` : " "}
          />
          <TextField
            error={errors.confirmPassword ? true : false}
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            {...register("confirmPassword", { required: "Must be 8 or more" })}
            variant="outlined"
            helperText={
              errors.confirmPassword ? `${errors.confirmPassword.message}` : " "
            }
          />

          <FormControlLabel
            control={
              <Checkbox value="toggle password visibility" color="primary" />
            }
            checked={showPassword}
            onClick={handleClickShowPassword}
            label="Show password"
          />

          <Button
            disabled={isSubmitting}
            type="submit"
            size="large"
            variant="contained"
            sx={{
              color: "white",
            }}
          >
            Update password
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
