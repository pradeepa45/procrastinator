/*
  Warnings:

  - Added the required column `createdAt` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `List` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "createdAt" DATE NOT NULL;

-- AlterTable
ALTER TABLE "List" ADD COLUMN     "createdAt" DATE NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" DATE NOT NULL;
