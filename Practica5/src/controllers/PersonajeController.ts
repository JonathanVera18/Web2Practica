// PersonajeController.ts
import { Request, Response } from 'express'
import { PersonajeRepository } from '../repositories/PersonajeRepository'

const personajeRepository = new PersonajeRepository()

export class PersonajeController {
  async getAll(req: Request, res: Response) {
    const personajes = await personajeRepository.findAll()
    res.json(personajes)
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const personaje = await personajeRepository.findById(parseInt(id))
    if (personaje && personaje.estado !== 'Eliminado') {
      res.json(personaje)
    } else {
      res.status(404).json({ message: 'Personaje no encontrado o eliminado' })
    }
  }

  async create(req: Request, res: Response) {
    const { nombre, anosExperiencia } = req.body
    const personaje = await personajeRepository.create({
      nombre,
      anosExperiencia,
      estado: "Activo"
    })
    res.json(personaje)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { nombre, anosExperiencia, estado } = req.body
    const personaje = await personajeRepository.update(parseInt(id), {
      nombre,
      anosExperiencia,
      estado
    })
    res.json(personaje)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const personaje = await personajeRepository.delete(parseInt(id))
    res.json(personaje)
  }
}
