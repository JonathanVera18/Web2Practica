import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

// Obtener todas las asignaciones
router.get('/', async (req, res) => {
  const asignaciones = await prisma.asignacion.findMany({
    where: {
      estado: {
        not: 'Eliminado'
      }
    }
  })
  res.json(asignaciones)
})

// Obtener una asignación por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const asignacion = await prisma.asignacion.findUnique({
    where: {
      id: parseInt(id),
      estado: {
        not: 'Eliminado'
      }
    }
  })
  if (asignacion) {
    res.json(asignacion)
  } else {
    res.status(404).json({ message: 'Asignación no encontrada o eliminada' })
  }
})

// Crear una nueva asignación
router.post('/', async (req, res) => {
  const { serieId, personajeId, papel, tipoPapel, fechaInicio, fechaFin, temporadas } = req.body
  const asignacion = await prisma.asignacion.create({
    data: {
      serieId,
      personajeId,
      papel,
      tipoPapel,
      fechaInicio,
      fechaFin,
      temporadas,
      estado: 'Activo'
    }
  })
  res.json(asignacion)
})

// Actualizar una asignación por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { serieId, personajeId, papel, tipoPapel, fechaInicio, fechaFin, temporadas, estado } = req.body
  const asignacion = await prisma.asignacion.update({
    where: {
      id: parseInt(id)
    },
    data: {
      serieId,
      personajeId,
      papel,
      tipoPapel,
      fechaInicio,
      fechaFin,
      temporadas,
      estado
    }
  })
  res.json(asignacion)
})

// Eliminar una asignación (eliminación lógica)
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const asignacion = await prisma.asignacion.update({
    where: {
      id: parseInt(id)
    },
    data: {
      estado: 'Eliminado'
    }
  })
  res.json(asignacion)
})

export default router
