var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var serie = [
    {
        idserie: "1",
        Nombredelaserie: "Adventure Show",
        Clasificacion: "CIencia ficcion"
    },
    {
        idserie: "2",
        Nombredelaserie: "Mystery Theater",
        Clasificacion: "Misterio"
    },
    {
        idserie: "3",
        Nombredelaserie: "Comedy Central",
        Clasificacion: "Comedia"
    },
    {
        idserie: "4",
        Nombredelaserie: "Horror Night",
        Clasificacion: "Terror"
    },
    {
        idserie: "5",
        Nombredelaserie: "Futurama",
        Clasificacion: "Comedia"
    }
];
var personaje = [
    {
        idpersonaje: "1",
        Nombrepersonaje: "Finn",
        Añosdeexperiencia: "5",
    },
    {
        idpersonaje: "2",
        Nombrepersonaje: "Chris",
        Añosdeexperiencia: "6",
    },
    {
        idpersonaje: "3",
        Nombrepersonaje: "Pablo",
        Añosdeexperiencia: "2",
    },
    {
        idpersonaje: "4",
        Nombrepersonaje: "Troy",
        Añosdeexperiencia: "10",
    },
    {
        idpersonaje: "5",
        Nombrepersonaje: "Bart",
        Añosdeexperiencia: "6",
    }
];
var asignacion = [
    {
        idasignacion: "1",
        serie: {
            idserie: "1",
            Nombredelaserie: "Adventure Show"
        },
        personaje: {
            idpersonaje: "1",
            Nombrepersonaje: "Finn",
        },
        papel: "luchador",
        Tipodepapel: "principal",
        fechainicio: "13 de mayo del 2010",
        fechafin: "20 de junio del 2020",
        temporadas: 10,
    },
    {
        idasignacion: "2",
        serie: {
            idserie: "2",
            Nombredelaserie: "Mystery Theater"
        },
        personaje: {
            idpersonaje: "2",
            Nombrepersonaje: "Chris",
        },
        papel: "detective",
        Tipodepapel: "secundario",
        fechainicio: "15 de marzo del 2015",
        fechafin: "20 de diciembre del 2020",
        temporadas: 6,
    },
    {
        idasignacion: "3",
        serie: {
            idserie: "3",
            Nombredelaserie: "Comedy Central"
        },
        personaje: {
            idpersonaje: "3",
            Nombrepersonaje: "Pablo",
        },
        papel: "comediante",
        Tipodepapel: "principal",
        fechainicio: "1 de enero del 2018",
        fechafin: "31 de diciembre del 2021",
        temporadas: 4,
    },
    {
        idasignacion: "4",
        serie: {
            idserie: "4",
            Nombredelaserie: "Horror Night"
        },
        personaje: {
            idpersonaje: "4",
            Nombrepersonaje: "Troy",
        },
        papel: "víctima",
        Tipodepapel: "secundario",
        fechainicio: "31 de octubre del 2019",
        fechafin: "31 de octubre del 2022",
        temporadas: 3,
    },
    {
        idasignacion: "5",
        serie: {
            idserie: "5",
            Nombredelaserie: "Futurama"
        },
        personaje: {
            idpersonaje: "5",
            Nombrepersonaje: "Bart",
        },
        papel: "protagonista",
        Tipodepapel: "principal",
        fechainicio: "1 de enero del 2000",
        fechafin: "31 de diciembre del 2010",
        temporadas: 11,
    }
];
function eliminarAsignacionPorId(asignaciones, id, callback) {
    var index = asignaciones.findIndex(function (asignacion) { return asignacion.idasignacion === id; });
    if (index !== -1) {
        var asignacionEliminada = asignaciones.splice(index, 1)[0];
        callback(asignacionEliminada);
    }
}
// Uso de la función con un callback que imprime el elemento eliminado
eliminarAsignacionPorId(asignacion, "1", function (asignacionEliminada) {
    console.log("Asignación eliminada:", asignacionEliminada);
});
// Luego, utilizamos fetch para hacer la solicitud a la API
fetch('https://api.coingecko.com/api/v3/coins/list')
    .then(function (response) {
    if (!response.ok) {
        throw new Error('Network response failed');
    }
    return response.json();
})
    .then(function (data) {
    var crypto = data[0];
    console.log("Información de la criptomoneda (Fetch con Promises):");
    console.log("ID: " + crypto.id);
    console.log("Símbolo: " + crypto.symbol);
    console.log("Nombre: " + crypto.name);
})
    .catch(function (error) {
    console.error('Fetch error:', error);
});
// async/await
function getCryptoAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, crypto_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://api.coingecko.com/api/v3/coins/list')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    crypto_1 = data[0];
                    console.log("Información de la criptomoneda (Async/await):");
                    console.log("ID: " + crypto_1.id);
                    console.log("Símbolo: " + crypto_1.symbol);
                    console.log("Nombre: " + crypto_1.name);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Async/await error:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getCryptoAsync();
