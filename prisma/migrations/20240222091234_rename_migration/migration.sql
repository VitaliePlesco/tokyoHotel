/*
  Warnings:

  - A unique constraint covering the columns `[roomTypeName]` on the table `RoomType` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `roomTypeName` on the `RoomType` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "RoomType" DROP COLUMN "roomTypeName",
ADD COLUMN     "roomTypeName" TEXT;

-- DropEnum
DROP TYPE "RoomTypeName";

-- CreateIndex
CREATE UNIQUE INDEX "RoomType_roomTypeName_key" ON "RoomType"("roomTypeName");
