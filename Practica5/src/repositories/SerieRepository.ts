// SerieRepository.ts
import { PrismaClient, Serie } from '@prisma/client'
const prisma = new PrismaClient()

export class SerieRepository {
  async findAll() {
    return await prisma.serie.findMany({
      where: {
        estado: {
          not: 'Eliminado'
        }
      }
    })
  }

  async findById(id: number) {
    return await prisma.serie.findUnique({
      where: { id }
    })
  }

  async create(data: Partial<Serie>) {
    return await prisma.serie.create({ data: data as Serie })
  }

  async update(id: number, data: Partial<Serie>) {
    return await prisma.serie.update({
      where: { id },
      data
    })
  }

  async delete(id: number) {
    return await prisma.serie.update({
      where: { id },
      data: { estado: 'Eliminado' }
    })
  }
}
