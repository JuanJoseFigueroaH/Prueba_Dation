/*
  Warnings:

  - You are about to drop the column `inDate` on the `tasks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[responsible_id]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `responsible_id` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "inDate",
ADD COLUMN     "responsible_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tasks_responsible_id_unique" ON "tasks"("responsible_id");

-- AddForeignKey
ALTER TABLE "tasks" ADD FOREIGN KEY ("responsible_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
