import { db } from "@/lib/db";

import { unstable_noStore as noStore } from 'next/cache';
import { DateRange } from "react-day-picker";


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
    const roomTypes = await db.roomType.findMany();
    return roomTypes;
  } catch (error) {
    throw new Error("Failed to fetch categories.")
  }
}

export async function fetchCardData(id: string) {
  noStore();
  try {
    const cardData = await db.room.findMany({
      where: {
        hotelId: id
      }
    })
    return cardData;
  } catch (error) {
    throw new Error('Failed to fetch card data.')
  }
}

export async function fetchAvailableRooms(hotelId: string) {
  noStore();
  try {
    const availableRooms = await db.room.findMany({
      where: {
        hotelId: hotelId,
        roomStatus: "VACANT"
      },

    })
    // console.log(availableRooms.length)
    return availableRooms;
  } catch (error) {
    throw new Error("Failed to fetch available rooms.")
  }
}