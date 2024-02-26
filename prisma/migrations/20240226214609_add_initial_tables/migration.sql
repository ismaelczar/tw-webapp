-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "taxIdentifier" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "memo" TEXT NOT NULL,
    "generatedStatus" TEXT NOT NULL,
    "regimeList" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calls" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdDate" TEXT NOT NULL,
    "closedDate" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Calls_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calls" ADD CONSTRAINT "Calls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
