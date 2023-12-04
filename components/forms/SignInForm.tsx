"use client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema, TAuthSchema } from "@/lib/validations/auth";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function SignInForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data: TAuthSchema) => {
    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.push("/");
    }

    reset();
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
            Sign in with
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
              Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookRoundedIcon />}
            >
              Facebook
            </Button>
          </Box>
          <Divider>OR CONTINUE WITH</Divider>
          <TextField
            error={errors.email ? true : false}
            type="email"
            label="Email"
            autoFocus
            {...register("email")}
            variant="outlined"
            helperText={errors.email ? `${errors.email.message}` : " "}
          />
          <TextField
            error={errors.password ? true : false}
            type={showPassword ? "text" : "password"}
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", { required: "Must be 8 or more" })}
            variant="outlined"
            helperText={errors.password ? `${errors.password.message}` : " "}
          />

          <Link href="/auth/forgotpassword">Forgot your password?</Link>

          <Button
            disabled={isSubmitting}
            type="submit"
            size="large"
            variant="contained"
            sx={{
              color: "white",
            }}
          >
            Sign in
          </Button>
          <Typography>
            Don&apos;t have an account?{" "}
            <Link href={"/auth/signup"}>Sign Up Now</Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
