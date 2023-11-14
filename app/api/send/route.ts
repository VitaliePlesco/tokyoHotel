import { db } from "@/lib/db";
import { sendEmail } from "@/utils/sendEmail";
import { NextResponse } from "next/server";
import crypto from "crypto";





export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;



  const user = await db.user.findUnique({
    where: {
      email: email
    }
  })

  if (!user) {
    return NextResponse.json({ user: null, message: "there is no user with this email" }, { status: 204 })
  }

  const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
  const today = new Date();
  const expiryDate = new Date(today.setDate(today.getDate() + 1));

  await db.user.update({
    where: {
      id: user.id
    },
    data: {
      resetPasswordToken: resetPasswordToken,
      resetPasswordTokenExpire: expiryDate
    }
  })

  const message = `

      <h2>Password reset for ${email}</h2>
      <a href="http://localhost:3000/changepassword?token=${resetPasswordToken}">Click here to reset your password</a>`;

  try {
    await sendEmail({
      email: email,
      subject: "Password reset",
      text: message

    });



    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {

    console.log(error)
    return NextResponse.json({ error });
  }
}