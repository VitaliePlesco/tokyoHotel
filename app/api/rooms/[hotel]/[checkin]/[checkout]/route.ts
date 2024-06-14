import { db } from "@/lib/db";
import { subDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { hotel: string, checkin: string, checkout: string } }) {


  try {

    const hotelId = params.hotel
    const startDate = params.checkin;
    const endDate = params.checkout;

    const reservations = await db.booking.findMany({
      where: {
        hotelId: hotelId,
        OR: [
          {
            endDate: {
              lte: new Date(startDate),
              gte: subDays(startDate, 7),
            },
          },
        ],
        NOT: {
          OR: [
            {
              startDate: {
                gte: new Date(startDate),
                lte: new Date(endDate),
              },
            },
            {
              endDate: {
                gt: new Date(startDate),
                lte: new Date(endDate),
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
        roomNumber: {
          notIn: [...reservations.map((reservation) => reservation.roomNumber)]
        },
        Booking: {
          none: {
            OR: [
              {
                startDate: {
                  gte: new Date(startDate),
                  lte: new Date(endDate),
                },
              },
              {
                endDate: {
                  gt: new Date(startDate),
                  lte: new Date(endDate),
                },
              },
            ],
          },
        },
      },
    });

    // console.log(reservations)
    return NextResponse.json([...reservations.map((room) => room.room), ...vacantRooms], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to fetch available rooms." }, { status: 500 })
  }
}