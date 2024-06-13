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
exports.SerieController = void 0;
const SerieRepository_1 = require("../repositories/SerieRepository");
const serieRepository = new SerieRepository_1.SerieRepository();
class SerieController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const series = yield serieRepository.findAll();
            res.json(series);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const serie = yield serieRepository.findById(parseInt(id));
            if (serie && serie.estado !== 'Eliminado') {
                res.json(serie);
            }
            else {
                res.status(404).json({ message: 'Serie no encontrada o eliminada' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, clasificacion } = req.body;
            const serie = yield serieRepository.create({
                clasificacion: clasificacion,
                estado: "Activo",
                nombre: nombre
            });
            res.json(serie);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nombre, clasificacion, estado } = req.body;
            const serie = yield serieRepository.update(parseInt(id), {
                nombre,
                clasificacion,
                estado
            });
            res.json(serie);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const serie = yield serieRepository.delete(parseInt(id));
            res.json(serie);
        });
    }
}
exports.SerieController = SerieController;
