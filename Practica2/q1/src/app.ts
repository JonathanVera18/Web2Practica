
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Agregar registros a Serie
  await prisma.serie.create({
    data: {
      // Asegúrate de proporcionar todos los campos requeridos aquí
      nombre: "Simpson",
      clasificacion: "Comedia",
    },
  })
  // Agregar registros a Personaje
  await prisma.personaje.create({
    data: {
      // Asegúrate de proporcionar todos los campos requeridos aquí
      nombre: "Homero",
      anosExperiencia: 5,
    },
  })
  // Agregar registros a Asignacion
await prisma.asignacion.create({
  data: {
    // Asegúrate de proporcionar todos los campos requeridos aquí
    papel: "Padre",
    tipoPapel: "Principal",
    fechaInicio: new Date(),
    fechaFin: new Date(),
    serieId: 1, // Asegúrate de que este ID exista en la tabla Serie
    personajeId: 1, // Asegúrate de que este ID exista en la tabla Personaje
    estado: true,
    temporadas: 1, // Proporciona un valor para el campo 'temporadas'
  },
})

}


async function eliminar(id: 1) {
  await prisma.asignacion.update({
    where: { id },
    data: { estado: false },
  })
}

async function recuperar(id: 1) {
  await prisma.asignacion.update({
    where: { id },
    data: { estado: true },
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

