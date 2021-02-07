"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import fileUpload from 'express-fileupload'
const fileUpload = require('express-fileupload');
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
class UploadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.post(
        //   '/Upload/:id',
        //   VariablesSesionController.VariableSesionId
        // );
        this.router.use(fileUpload());
        this.router.put('/UploadFile/:Id', UsuarioController_1.default.ActualizarFoto);
    }
}
exports.default = new UploadRoutes().router;
