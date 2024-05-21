import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router()

// Obtener todas las series que no están en estado 'Eliminado'
router.get('/', async (req, res) => {
  const series = await prisma.serie.findMany({
    where: {
      estado: {
        not: 'Eliminado'
      }
    }
  })
  res.json(series)
})

// Obtener una serie por su ID, asegurándose de que no esté en estado 'Eliminado'
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const serie = await prisma.serie.findUnique({
    where: {
      id: parseInt(id)
    }
  })
  if (serie && serie.estado !== 'Eliminado') {
    res.json(serie)
  } else {
    res.status(404).json({ message: 'Serie no encontrada o eliminada' })
  }
})

// Crear una nueva serie con estado 'Activo' por defecto
router.post('/', async (req, res) => {
  const { nombre, clasificacion } = req.body
  const serie = await prisma.serie.create({
    data: {
        clasificacion: clasificacion,
        estado: "Activo",
        nombre: nombre  // Estado por defecto al crear
    }
  })
  res.json(serie)
})

// Actualizar una serie por su ID
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { nombre, clasificacion, estado } = req.body
  const serie = await prisma.serie.update({
    where: {
      id: parseInt(id)
    },
    data: {
      nombre,
      clasificacion,
      estado
    }
  })
  res.json(serie)
})

// Eliminar una serie por su ID, cambiando su estado a 'Eliminado'
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const serie = await prisma.serie.update({
    where: {
      id: parseInt(id)
    },
    data: {
      estado: 'Eliminado' // Cambio de estado en lugar de eliminación física
    }
  })
  res.json(serie)
})

export default router
