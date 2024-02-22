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
});
export type ThotelSchema = z.infer<typeof hotelSchema>;

export const manageRoomsSchema = z.object({
  number: z.coerce.number({
    required_error: "Please enter a number",
    invalid_type_error: "Please enter a number greater than 0"
  }).gt(0),
  type: z.string().min(1, {
    message: "Please select a category"
  })
})

