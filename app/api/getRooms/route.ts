import { db } from "@/lib/db";
import { subDays } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  try {
    const searchParams = req.nextUrl.searchParams;

    const hotelId = searchParams.get('hotel');
    const startDate = new Date(searchParams.get("checkin") as string);
    const endDate = new Date(searchParams.get("checkout") as string);

    const reservations = await db.booking.findMany({
      where: {
        hotelId: hotelId!,
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
        hotelId: hotelId!,
        roomNumber: {
          notIn: [...reservations.map((reservation) => reservation.roomNumber)]
        },
        Booking: {
          none: {
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


    return NextResponse.json([...reservations.map((room) => room.room), ...vacantRooms], { status: 200 });
  } catch (error) {

    return NextResponse.json({ message: "Failed to fetch available rooms." }, { status: 500 })
  }
}