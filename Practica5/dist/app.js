"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express_1.default.json());
app.use('/personaje', routes_1.personajeRouter);
app.use('/serie', routes_1.serieRouter);
app.use('/asignacion', routes_1.asignacionRouter);
app.use('/github', routes_1.githubRouter);
app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});
