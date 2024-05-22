import { db } from "@/lib/db";

import { unstable_noStore as noStore } from "next/cache";
import { addDays, subDays } from "date-fns";

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
        hotelName: id,
      },
    });
    return hotel;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch hotel.");
  }
}

export async function fetchRoomTypes() {
  noStore();
  try {
    const roomTypes = await db.roomType.findMany();
    return roomTypes;
  } catch (error) {
    throw new Error("Failed to fetch categories.");
  }
}

export async function fetchCardData(id: string) {
  noStore();
  try {
    const cardData = await db.room.findMany({
      where: {
        hotelId: id,
      },
    });
    return cardData;
  } catch (error) {
    throw new Error("Failed to fetch card data.");
  }
}

export async function fetchAvailableRooms(
  hotelId: string,
  startDate: any,
  endDate: any
) {
  noStore();
  try {
    const reservations = await db.booking.findMany({
      where: {
        hotelId: hotelId,
        OR: [
          {
            endDate: {
              lte: startDate,
              gte: subDays(startDate, 7),
            },
          },
        ],
        NOT: {
          OR: [
            {
              startDate: {
                gte: startDate,
                lte: endDate,
              },
            },
            {
              endDate: {
                gt: startDate,
                lte: endDate,
              },
            },
          ],
        }
      },
      orderBy: {
        endDate: "desc",
      },
      include: {
        room: true,
      },
    });

    const vacantRooms = await db.room.findMany({
      where: {
        hotelId: hotelId,

        Booking: {
          some: {
            OR: [
              {
                startDate: {
                  gte: startDate,
                  lte: endDate,
                },
              },
              {
                endDate: {
                  gt: startDate,
                  lte: endDate,
                },
              },
            ],
          },
        },
      },
    });



    return [...reservations.map((room) => room.room), ...vacantRooms];
  } catch (error) {
    throw new Error("Failed to fetch available rooms.");
  }
}
