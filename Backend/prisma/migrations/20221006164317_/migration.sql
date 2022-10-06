-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "priority" DROP NOT NULL,
ALTER COLUMN "priorityColor" DROP NOT NULL;
