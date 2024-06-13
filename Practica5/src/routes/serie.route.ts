// serieRoutes.ts
import { Router } from 'express'
import { SerieController } from '../controllers/SerieController'

const router = Router()
const serieController = new SerieController()

router.get('/', serieController.getAll)
router.get('/:id', serieController.getById)
router.post('/', serieController.create)
router.put('/:id', serieController.update)
router.delete('/:id', serieController.delete)

export default router
