"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuxiliarController_1 = __importDefault(require("../controllers/AuxiliarController"));
class AuxiliarRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/FiltrarRUC/:Ruc', AuxiliarController_1.default.ListaAuxiliaresRUC);
        this.router.get('/FiltrarRazonSocial/:RazonSocial', AuxiliarController_1.default.ListaAuxiliaresRazonSocial);
        // this.router.get('/', AuxiliarController.ListaAuxiliares);
        // this.router.post('/', AuxiliarController.GuardarAuxiliar);
        // this.router.put('/:id', AuxiliarController.ActualizarAuxiliar);
        // this.router.delete('/:id', AuxiliarController.EliminarAuxiliar);
    }
}
exports.default = new AuxiliarRoutes().router;
