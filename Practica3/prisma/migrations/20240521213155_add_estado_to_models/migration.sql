-- AlterTable
ALTER TABLE "Asignacion" ALTER COLUMN "estado" SET DEFAULT 'Activo',
ALTER COLUMN "estado" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Personaje" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "Serie" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'Activo';
