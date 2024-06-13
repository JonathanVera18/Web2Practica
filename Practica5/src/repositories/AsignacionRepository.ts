// AsignacionRepository.ts
import { PrismaClient, Asignacion } from '@prisma/client'
const prisma = new PrismaClient()

export class AsignacionRepository {
  async findAll() {
    return await prisma.asignacion.findMany({
      where: {
        estado: {
          not: 'Eliminado'
        }
      }
    })
  }

  async findById(id: number) {
    return await prisma.asignacion.findUnique({
      where: { id }
    })
  }

  async create(data: Omit<Asignacion, 'id'>) {  // Excluir el campo 'id'
    return await prisma.asignacion.create({ data })
  }

  async update(id: number, data: Partial<Asignacion>) {
    return await prisma.asignacion.update({
      where: { id },
      data
    })
  }

  async delete(id: number) {
    return await prisma.asignacion.update({
      where: { id },
      data: { estado: 'Eliminado' }
    })
  }
}
