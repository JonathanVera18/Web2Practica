// personajeRoutes.ts
import { Router } from 'express'
import { PersonajeController } from '../controllers/PersonajeController'

const router = Router()
const personajeController = new PersonajeController()

router.get('/', personajeController.getAll)
router.get('/:id', personajeController.getById)
router.post('/', personajeController.create)
router.put('/:id', personajeController.update)
router.delete('/:id', personajeController.delete)

export default router
