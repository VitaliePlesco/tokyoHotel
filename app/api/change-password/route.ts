import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { password, resetPasswordToken } = body;

  const resetToken = await db.resetPassword.findUnique({
    where: {
      resetPasswordToken: resetPasswordToken,
    }
  });

  if (!resetToken) {
    return NextResponse.json({ token: null, message: "Reset password token invalid" })
  }

  const resetPasswordTokenExpire = resetToken.resetPasswordTokenExpire;


  const today = new Date();

  if (today > resetPasswordTokenExpire) {
    return NextResponse.json({ message: "Token expired" });
  }

  const hashedPassword = await hash(password, 12);

  await db.user.update({
    where: {
      id: resetToken.userId
    },
    data: {
      password: hashedPassword,

    }
  })
  return NextResponse.json({ message: "Password change succesfully" })
}