/*
  Warnings:

  - You are about to drop the column `booking` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordTokenExpire` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "RoomTypeName" AS ENUM ('DOUBLE', 'TWIN');

-- CreateEnum
CREATE TYPE "RoomStatus" AS ENUM ('OCCUPIED', 'VACANT', 'BOOKED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAID', 'NOTPAID', 'PENDING');

-- DropIndex
DROP INDEX "User_resetPasswordToken_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "booking",
DROP COLUMN "resetPasswordToken",
DROP COLUMN "resetPasswordTokenExpire",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "ResetPassword" (
    "id" SERIAL NOT NULL,
    "resetPasswordToken" TEXT NOT NULL,
    "resetPasswordTokenExpire" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ResetPassword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "hotelName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "buildingNumber" INTEGER NOT NULL,
    "streetName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("hotelName")
);

-- CreateTable
CREATE TABLE "Room" (
    "roomNumber" SERIAL NOT NULL,
    "roomStatus" "RoomStatus" NOT NULL DEFAULT 'VACANT',
    "hotelId" TEXT NOT NULL,
    "roomTypeId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("roomNumber")
);

-- CreateTable
CREATE TABLE "RoomType" (
    "id" SERIAL NOT NULL,
    "roomTypeName" "RoomTypeName" NOT NULL,
    "roomPrice" MONEY NOT NULL,

    CONSTRAINT "RoomType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "userId" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "totalAmount" MONEY NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'NOTPAID',
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResetPassword_resetPasswordToken_key" ON "ResetPassword"("resetPasswordToken");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_bookingId_key" ON "Payment"("bookingId");

-- AddForeignKey
ALTER TABLE "ResetPassword" ADD CONSTRAINT "ResetPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("hotelName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("roomNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
