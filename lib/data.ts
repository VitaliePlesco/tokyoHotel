import { db } from "@/lib/db";

import { unstable_noStore as noStore } from 'next/cache';


export async function fetchHotels() {
  try {
    const hotels = await db.hotel.findMany();
    return hotels;
  } catch (error) {
    throw new Error("Failed to fetch the hotels.");
  }
}

export async function fetchHotelById(id: string) {
  noStore();
  try {
    const hotel = await db.hotel.findUnique({
      where: {
        hotelName: id
      }
    })
    return hotel;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch hotel.")
  }
}

export async function fetchRoomTypes() {
  noStore();
  try {
    const categories = await db.roomType.findMany();
    return categories
  } catch (error) {
    throw new Error("Failed to fetch categories")
  }
}