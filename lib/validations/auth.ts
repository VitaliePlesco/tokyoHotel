import { z } from "zod"

export const authSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    }),

})

export const changePasswordSchema = z.object({
  password: z.string().min(8)
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const emailSchema = z.object({
  email: authSchema.shape.email,
})
export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;
export type TAuthSchema = z.infer<typeof authSchema>;
export type TEmailSchema = z.infer<typeof emailSchema>;