"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// personajeRoutes.ts
const express_1 = require("express");
const PersonajeController_1 = require("../controllers/PersonajeController");
const router = (0, express_1.Router)();
const personajeController = new PersonajeController_1.PersonajeController();
router.get('/', personajeController.getAll);
router.get('/:id', personajeController.getById);
router.post('/', personajeController.create);
router.put('/:id', personajeController.update);
router.delete('/:id', personajeController.delete);
exports.default = router;
