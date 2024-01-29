import { z } from "zod";

export const hotelSchema = z.object({
  name: z.string(),
  city: z.string(),
  strNo: z.number(),
  street: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  phoneNumber: z.string()
})

export type ThotelSchema = z.infer<typeof hotelSchema>;