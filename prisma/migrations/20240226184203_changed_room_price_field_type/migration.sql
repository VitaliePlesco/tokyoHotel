/*
  Warnings:

  - You are about to alter the column `roomPrice` on the `RoomType` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "RoomType" ALTER COLUMN "roomPrice" SET DATA TYPE DECIMAL(5,2);
