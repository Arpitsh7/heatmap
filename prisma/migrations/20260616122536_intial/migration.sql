-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('Google');

-- CreateEnum
CREATE TYPE "ActType" AS ENUM ('developement', 'problems');

-- CreateEnum
CREATE TYPE "CountStats" AS ENUM ('passive', 'agressive', 'max_aggressive');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "provider" "AuthProvider" NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "PId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "Pname" TEXT NOT NULL,
    "Purl" TEXT NOT NULL,
    "isConnected" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("PId")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ActTypes" "ActType" NOT NULL,
    "Count" "CountStats" NOT NULL,
    "value" INTEGER NOT NULL,
    "metadata" JSONB,
    "date" TIMESTAMP(3) NOT NULL,
    "platformId" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Platform" ADD CONSTRAINT "Platform_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("PId") ON DELETE RESTRICT ON UPDATE CASCADE;
