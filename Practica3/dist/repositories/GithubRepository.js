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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubRepository = void 0;
const axios_1 = __importDefault(require("axios"));
const token = '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';
class GitHubRepository {
    getUserRepos(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get('https://api.github.com/user/repos', {
                    headers: {
                        'Authorization': `token ${token}`
                    }
                });
                if (response.status === 200) {
                    return response.data;
                }
                else {
                    throw new Error(`Error fetching repos: ${response.statusText}`); // More specific error message
                }
            }
            catch (error) {
                if (error.response) {
                    // La solicitud se realizó pero el servidor respondió con un código de estado diferente de 2xx
                    console.error('Error de respuesta:', error.response.data);
                    throw new Error('Error al obtener repositorios del usuario');
                }
                else if (error.request) {
                    // La solicitud se hizo pero no se recibió respuesta
                    console.error('No se recibió respuesta del servidor');
                    throw new Error('Error de conexión al obtener repositorios del usuario');
                }
                else {
                    // Se produjo un error al configurar la solicitud
                    console.error('Error al configurar la solicitud:', error.message);
                    throw new Error('Error al configurar la solicitud');
                }
            }
        });
    }
}
exports.GitHubRepository = GitHubRepository;
