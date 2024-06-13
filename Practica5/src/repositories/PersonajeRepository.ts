// PersonajeRepository.ts
// PersonajeRepository.ts
import { PrismaClient, Personaje } from '@prisma/client'
const prisma = new PrismaClient()

export class PersonajeRepository {
  async findAll() {
    return await prisma.personaje.findMany({
      where: {
        estado: {
          not: 'Eliminado'
        }
      }
    })
  }

  async findById(id: number) {
    return await prisma.personaje.findUnique({
      where: { id }
    })
  }

  async create(data: Omit<Personaje, 'id'>) {  // Excluir el campo 'id'
    return await prisma.personaje.create({ data })
  }

  async update(id: number, data: Partial<Personaje>) {
    return await prisma.personaje.update({
      where: { id },
      data
    })
  }

  async delete(id: number) {
    return await prisma.personaje.update({
      where: { id },
      data: { estado: 'Eliminado' }
    })
  }
}
