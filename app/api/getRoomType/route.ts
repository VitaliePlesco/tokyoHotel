import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const roomTypes = await db.roomType.findMany();

    return NextResponse.json(roomTypes, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to fetch room types." }, { status: 500 })
  }
}