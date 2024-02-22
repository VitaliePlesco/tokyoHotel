/*
  Warnings:

  - Made the column `roomTypeName` on table `RoomType` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RoomType" ALTER COLUMN "roomTypeName" SET NOT NULL;
