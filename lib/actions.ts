"use server";
import { db } from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hotelSchema } from "./validations/hotelSchema";

export async function createHotel(formData: FormData) {
  const { hotelName, city, buildingNumber, streetName, email, phoneNumber } = {
    hotelName: formData.get("hotelName"),
    city: formData.get("city"),
    buildingNumber: formData.get("buildingNumber"),
    streetName: formData.get("streetName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
  }
  const num = parseInt(buildingNumber as string);
  const phone = parseInt(phoneNumber as string);
  try {
    await db.hotel.create({
      data: {
        hotelName: hotelName as string,
        city: city as string,
        buildingNumber: num,
        streetName: streetName as string,
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

export async function updateHotel(id: string, formData: FormData) {
  const validateFields = hotelSchema.safeParse({
    hotelName: formData.get("hotelName"),
    city: formData.get("city"),
    buildingNumber: formData.get("buildingNumber"),
    streetName: formData.get("streetName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
  });


  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing fields. Failde to update hotel."
    }
  }
  const { hotelName, city, buildingNumber, streetName, email, phoneNumber } = validateFields.data;

  try {
    await db.hotel.update({
      where: {
        hotelName: id
      },
      data: {
        hotelName: hotelName,
        city: city,
        buildingNumber: buildingNumber,
        streetName: streetName,
        email: email,
        phoneNumber: phoneNumber,
      }
    })

  } catch (error) {
    return {
      message: "Database error: Failed to update hotel."
    }
  }
  revalidatePath('/dashboard/hotels');
  redirect('/dashboard/hotels');
}

export async function deleteHotel(id: string) {


  try {
    await db.hotel.delete({
      where: {
        hotelName: id
      }
    });
    revalidatePath('/dashboard/hotels');
  } catch (error) {
    return {
      message: "Database error: Failed to delete hotel."
    }
  }
}