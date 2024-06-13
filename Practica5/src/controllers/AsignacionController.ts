// AsignacionController.ts
import { Request, Response } from 'express'
import { AsignacionRepository } from '../repositories/AsignacionRepository'

const asignacionRepository = new AsignacionRepository()

export class AsignacionController {
  async getAll(req: Request, res: Response) {
    const asignaciones = await asignacionRepository.findAll()
    res.json(asignaciones)
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const asignacion = await asignacionRepository.findById(parseInt(id))
    if (asignacion && asignacion.estado !== 'Eliminado') {
      res.json(asignacion)
    } else {
      res.status(404).json({ message: 'Asignación no encontrada o eliminada' })
    }
  }

  async create(req: Request, res: Response) {
    const { serieId, personajeId, papel, tipoPapel, fechaInicio, fechaFin, temporadas } = req.body
    const asignacion = await asignacionRepository.create({
      serieId,
      personajeId,
      papel,
      tipoPapel,
      fechaInicio,
      fechaFin,
      temporadas,
      estado: "Activo"
    })
    res.json(asignacion)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { serieId, personajeId, papel, tipoPapel, fechaInicio, fechaFin, temporadas, estado } = req.body
    const asignacion = await asignacionRepository.update(parseInt(id), {
      serieId,
      personajeId,
      papel,
      tipoPapel,
      fechaInicio,
      fechaFin,
      temporadas,
      estado
    })
    res.json(asignacion)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const asignacion = await asignacionRepository.delete(parseInt(id))
    res.json(asignacion)
  }
}
