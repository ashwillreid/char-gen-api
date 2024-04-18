/*
  Warnings:

  - Added the required column `hitDice` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Character` ADD COLUMN `hitDice` ENUM('D4', 'D6', 'D8', 'D10', 'D12', 'D20') NOT NULL;
