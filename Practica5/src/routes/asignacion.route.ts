// asignacionRoutes.ts
import { Router } from 'express'
import { AsignacionController } from '../controllers/AsignacionController'

const router = Router()
const asignacionController = new AsignacionController()

router.get('/', asignacionController.getAll)
router.get('/:id', asignacionController.getById)
router.post('/', asignacionController.create)
router.put('/:id', asignacionController.update)
router.delete('/:id', asignacionController.delete)

export default router
