/*
  Warnings:

  - Added the required column `meta` to the `Platform` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "types" AS ENUM ('auto', 'manual');

-- AlterTable
ALTER TABLE "Platform" ADD COLUMN     "meta" "types" NOT NULL;
