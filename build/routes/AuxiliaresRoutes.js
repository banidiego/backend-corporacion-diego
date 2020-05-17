"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuxiliaresController_1 = __importDefault(require("../controllers/AuxiliaresController"));
class AuxiliarRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/FiltrarRUC/:Ruc', AuxiliaresController_1.default.ListaAuxiliaresRUC);
        this.router.get('/FiltrarRazonSocial/:RazonSocial', AuxiliaresController_1.default.ListaAuxiliaresRazonSocial);
        this.router.get('/', AuxiliaresController_1.default.ListaAuxiliares);
        this.router.post('/', AuxiliaresController_1.default.GuardarAuxiliar);
        this.router.put('/:id', AuxiliaresController_1.default.ActualizarAuxiliar);
        this.router.delete('/:id', AuxiliaresController_1.default.EliminarAuxiliar);
    }
}
exports.default = new AuxiliarRoutes().router;
