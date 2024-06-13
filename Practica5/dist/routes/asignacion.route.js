"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// asignacionRoutes.ts
const express_1 = require("express");
const AsignacionController_1 = require("../controllers/AsignacionController");
const router = (0, express_1.Router)();
const asignacionController = new AsignacionController_1.AsignacionController();
router.get('/', asignacionController.getAll);
router.get('/:id', asignacionController.getById);
router.post('/', asignacionController.create);
router.put('/:id', asignacionController.update);
router.delete('/:id', asignacionController.delete);
exports.default = router;
