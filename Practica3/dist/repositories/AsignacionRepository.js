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
exports.AsignacionRepository = void 0;
// AsignacionRepository.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AsignacionRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.asignacion.findMany({
                where: {
                    estado: {
                        not: 'Eliminado'
                    }
                }
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.asignacion.findUnique({
                where: { id }
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.asignacion.create({ data: data });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.asignacion.update({
                where: { id },
                data
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.asignacion.update({
                where: { id },
                data: { estado: 'Eliminado' }
            });
        });
    }
}
exports.AsignacionRepository = AsignacionRepository;
