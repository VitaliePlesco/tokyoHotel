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
    required_error: "Number is required",
    invalid_type_error: "Please enter a number greater than 0"
  }).gt(0, {
    message: "Please enter a number greater than 0"
  }).lte(100, {
    message: "Number must be between 1 & 100"
  }),

  type: z.string({
    required_error: "Room type is required",
    invalid_type_error: "Room type must be a string",
  }).min(1, {
    message: "Room type is required"
  })
})

