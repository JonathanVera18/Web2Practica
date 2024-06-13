"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// serieRoutes.ts
const express_1 = require("express");
const SerieController_1 = require("../controllers/SerieController");
const router = (0, express_1.Router)();
const serieController = new SerieController_1.SerieController();
router.get('/', serieController.getAll);
router.get('/:id', serieController.getById);
router.post('/', serieController.create);
router.put('/:id', serieController.update);
router.delete('/:id', serieController.delete);
exports.default = router;
