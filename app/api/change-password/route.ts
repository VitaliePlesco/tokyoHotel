import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { password, resetPasswordToken } = body;

  const user = await db.user.findUnique({
    where: {
      resetPasswordToken: resetPasswordToken,
    }
  });

  if (!user) {
    return NextResponse.json({ token: null, message: "Reset password token invalid" })
  }

  const resetPasswordTokenExpire = user.resetPasswordTokenExpire;
  if (!resetPasswordTokenExpire) {
    return NextResponse.json({ message: "Token expired" });
  }

  const today = new Date();

  if (today > resetPasswordTokenExpire) {
    return NextResponse.json({ message: "Token expired" });
  }

  const hashedPassword = await hash(password, 12);

  await db.user.update({
    where: {
      id: user.id
    },
    data: {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordTokenExpire: null,
    }
  })
  return NextResponse.json({ message: "Password change succesfully" })
}