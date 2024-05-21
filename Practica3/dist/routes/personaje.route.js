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
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// Obtener todos los personajes no eliminados
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personajes = yield prisma.personaje.findMany({
            where: {
                estado: {
                    not: 'Eliminado',
                },
            },
        });
        res.json(personajes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener personajes', error });
    }
}));
// Obtener un personaje por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const personaje = yield prisma.personaje.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (personaje && personaje.estado !== 'Eliminado') {
            res.json(personaje);
        }
        else {
            res.status(404).json({ message: 'Personaje no encontrado o eliminado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener personaje', error });
    }
}));
// Crear un nuevo personaje
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, anosExperiencia } = req.body;
    try {
        const personaje = yield prisma.personaje.create({
            data: {
                nombre,
                anosExperiencia,
                estado: 'Activo', // Estado predeterminado
            },
        });
        res.json(personaje);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear personaje', error });
    }
}));
// Actualizar un personaje por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, anosExperiencia, estado } = req.body;
    try {
        const personaje = yield prisma.personaje.update({
            where: {
                id: parseInt(id),
            },
            data: {
                nombre,
                anosExperiencia,
                estado,
            },
        });
        res.json(personaje);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar personaje', error });
    }
}));
// Eliminar (marcar como eliminado) un personaje por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const personaje = yield prisma.personaje.update({
            where: {
                id: parseInt(id),
            },
            data: {
                estado: 'Eliminado', // Cambiar el estado a 'Eliminado' en lugar de eliminar el registro
            },
        });
        res.json(personaje);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar personaje', error });
    }
}));
exports.default = router;
