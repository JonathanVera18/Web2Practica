"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionController = void 0;
const AsignacionRepository_1 = require("../repositories/AsignacionRepository");
const asignacionRepository = new AsignacionRepository_1.AsignacionRepository();
class AsignacionController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asignaciones = yield asignacionRepository.findAll();
            res.json(asignaciones);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asignacion = yield asignacionRepository.findById(parseInt(id));
            if (asignacion && asignacion.estado !== 'Eliminado') {
                res.json(asignacion);
            }
            else {
                res.status(404).json({ message: 'Asignacion no encontrada o eliminada' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { serieId, personajeId, papel, tipoPapel, fechaInicio, fechaFin, temporadas } = req.body;
            const asignacion = yield asignacionRepository.create({
                serieId,
                personajeId,
                papel,
                tipoPapel,
                fechaInicio,
                fechaFin,
                temporadas,
                estado: "Activo"
            });
            res.json(asignacion);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { serieId, personajeId, papel, tipoPapel, fechaInicio, fechaFin, temporadas, estado } = req.body;
            const asignacion = yield asignacionRepository.update(parseInt(id), {
                serieId,
                personajeId,
                papel,
                tipoPapel,
                fechaInicio,
                fechaFin,
                temporadas,
                estado
            });
            res.json(asignacion);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asignacion = yield asignacionRepository.delete(parseInt(id));
            res.json(asignacion);
        });
    }
}
exports.AsignacionController = AsignacionController;
