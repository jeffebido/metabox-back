/*
  Warnings:

  - You are about to drop the column `publicUrl` on the `collections` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[publicUrlSlug]` on the table `collections` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `publicUrlSlug` to the `collections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collections" DROP COLUMN "publicUrl",
ADD COLUMN     "publicUrlSlug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "collections_publicUrlSlug_key" ON "collections"("publicUrlSlug");
