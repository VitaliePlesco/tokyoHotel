import { z } from "zod";

export const hotelSchema = z.object({
  hotelName: z.string(),
  city: z.string(),
  buildingNumber: z.coerce.number(),
  streetName: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  phoneNumber: z.coerce.number()
})

export type ThotelSchema = z.infer<typeof hotelSchema>;