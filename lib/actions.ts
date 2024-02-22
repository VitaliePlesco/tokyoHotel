"use server";
import { db } from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hotelSchema, manageRoomsSchema } from "./validations/hotelSchemas";
import { RoomType } from "@prisma/client";

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

export type State = {
  errors?: {
    number?: string[],
    type?: string[]
  }
  message?: string | null;
}

export async function addRooms(id: string, prevState: State, formData: FormData) {
  const validateFields = manageRoomsSchema.safeParse({
    number: parseInt(formData.get("number") as string),
    type: formData.get("type")
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to add rooms."
    };
  }

  const { number, type } = validateFields.data;

  const roomCategories = await db.roomType.findMany();
  const filteredCategory = roomCategories.filter(category => category.roomTypeName === type)

  const rooms = []
  for (let i = 0; i < number; i++) {
    rooms.push({
      roomTypeId: filteredCategory[0].id,
      hotelId: id
    })
  }

  try {
    await db.room.createMany({
      data: rooms
    })
  } catch (error) {
    return {
      message: "Failed to add rooms."
    }
  }

}
export async function addCategory(prevState: State, formData: FormData) {
  const validateFields = manageRoomsSchema.safeParse({
    type: formData.get("type"),
    number: parseInt(formData.get("number") as string)
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to add rooms."
    };
  }

  const { type, number } = validateFields.data;
}