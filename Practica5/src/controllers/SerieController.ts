// SerieController.ts
import { Request, Response } from 'express'
import { SerieRepository } from '../repositories/SerieRepository'

const serieRepository = new SerieRepository()

export class SerieController {
  async getAll(req: Request, res: Response) {
    const series = await serieRepository.findAll()
    res.json(series)
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const serie = await serieRepository.findById(parseInt(id))
    if (serie && serie.estado !== 'Eliminado') {
      res.json(serie)
    } else {
      res.status(404).json({ message: 'Serie no encontrada o eliminada' })
    }
  }

  async create(req: Request, res: Response) {
    const { nombre, clasificacion } = req.body
    const serie = await serieRepository.create({
      clasificacion: clasificacion,
      estado: "Activo",
      nombre: nombre
    })
    res.json(serie)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { nombre, clasificacion, estado } = req.body
    const serie = await serieRepository.update(parseInt(id), {
      nombre,
      clasificacion,
      estado
    })
    res.json(serie)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const serie = await serieRepository.delete(parseInt(id))
    res.json(serie)
  }
}
