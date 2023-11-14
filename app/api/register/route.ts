import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, id } = body;

    // check if user with this email exists
    const user = await db.user.findUnique({
      where: { email: email }
    });
    if (user) {
      return NextResponse.json({ user: null, message: "User with this email exists" }, { status: 409 })
    }

    const hashedPassword = await hash(password, 12);

    const createUser = await db.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })
    const { email: userEmail } = createUser;
    return NextResponse.json({ user: userEmail, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}