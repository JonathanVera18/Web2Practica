"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubRouter = exports.asignacionRouter = exports.serieRouter = exports.personajeRouter = void 0;
const personaje_route_1 = __importDefault(require("./personaje.route"));
exports.personajeRouter = personaje_route_1.default;
const serie_route_1 = __importDefault(require("./serie.route"));
exports.serieRouter = serie_route_1.default;
const asignacion_route_1 = __importDefault(require("./asignacion.route"));
exports.asignacionRouter = asignacion_route_1.default;
const github_route_1 = __importDefault(require("./github.route")); // Asegúrate de que la ruta sea correcta
exports.githubRouter = github_route_1.default;
