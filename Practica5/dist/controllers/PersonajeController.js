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
exports.PersonajeController = void 0;
const PersonajeRepository_1 = require("../repositories/PersonajeRepository");
const personajeRepository = new PersonajeRepository_1.PersonajeRepository();
class PersonajeController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personajes = yield personajeRepository.findAll();
            res.json(personajes);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaje = yield personajeRepository.findById(parseInt(id));
            if (personaje && personaje.estado !== 'Eliminado') {
                res.json(personaje);
            }
            else {
                res.status(404).json({ message: 'Personaje no encontrado o eliminado' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, anosExperiencia } = req.body;
            const personaje = yield personajeRepository.create({
                nombre,
                anosExperiencia,
                estado: "Activo"
            });
            res.json(personaje);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nombre, anosExperiencia, estado } = req.body;
            const personaje = yield personajeRepository.update(parseInt(id), {
                nombre,
                anosExperiencia,
                estado
            });
            res.json(personaje);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaje = yield personajeRepository.delete(parseInt(id));
            res.json(personaje);
        });
    }
}
exports.PersonajeController = PersonajeController;
