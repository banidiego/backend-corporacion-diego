"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TipoCompraController_1 = __importDefault(require("../controllers/TipoCompraController"));
class TipoCompraRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', TipoCompraController_1.default.Lista);
    }
}
exports.default = new TipoCompraRoutes().router;
