-- CreateTable
CREATE TABLE "Serie" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "clasificacion" TEXT NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personaje" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "anosExperiencia" INTEGER NOT NULL,

    CONSTRAINT "Personaje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asignacion" (
    "id" SERIAL NOT NULL,
    "serieId" INTEGER NOT NULL,
    "personajeId" INTEGER NOT NULL,
    "papel" TEXT NOT NULL,
    "tipoPapel" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "temporadas" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Asignacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Asignacion" ADD CONSTRAINT "Asignacion_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asignacion" ADD CONSTRAINT "Asignacion_personajeId_fkey" FOREIGN KEY ("personajeId") REFERENCES "Personaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
