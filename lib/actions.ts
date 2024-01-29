"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createHotel(formData: FormData) {
  const { hotel, city, number, streetAddress, email, phoneNumber } = {
    hotel: formData.get("name"),
    city: formData.get("city"),
    number: formData.get("strNo"),
    streetAddress: formData.get("street"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
  }
  const num = parseInt(number as string);
  const phone = parseInt(phoneNumber as string);
  try {
    await db.hotel.create({
      data: {
        hotelName: hotel as string,
        city: city as string,
        buildingNumber: num,
        streetName: streetAddress as string,
        email: email as string,
        phoneNumber: phone

      }
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.'
    }
  }
  revalidatePath('/dashboard/hotels');
  redirect('/dashboard/hotels');

}