import { db } from "@/lib/db";


export async function fetchHotels() {
  try {
    const hotels = await db.hotel.findMany();
    return hotels;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the hotels.")
  }
}