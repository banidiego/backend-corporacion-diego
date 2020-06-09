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
const database_1 = __importDefault(require("../database"));
const proyecto_model_1 = require("../models/proyecto.model");
class ProyectoController {
    // ==========================================
    // Obtener de Proyecto Actual (para SR)
    // ==========================================
    ProyectoCodigoProyecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigo_Proyecto = req.params.Codigo_Proyecto;
            yield database_1.default.query('SELECT * FROM Proyecto WHERE Codigo_Proyecto = ?', [codigo_Proyecto], function (err, resp, fields) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando Variables de Sesión',
                        errors: err,
                    });
                }
                return res.status(200).json({
                    ok: true,
                    Proyecto: resp,
                });
            });
        });
    }
    // ==========================================
    // Crear Proyecto
    // ==========================================
    GuardarProyecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var proyecto = new proyecto_model_1.ProyectoModel();
            var body = req.body;
            proyecto.Id_Proyecto = null;
            proyecto.Codigo_Proyecto = body.Codigo_Proyecto;
            proyecto.Nombre_Proyecto = body.Nombre_Proyecto;
            proyecto.Cooperante = body.Cooperante;
            proyecto.Estado = body.Estado;
            proyecto.Origen = body.Origen;
            proyecto.Serie = body.Serie;
            yield database_1.default.query('INSERT INTO Proyecto set ?', proyecto, (err, resp) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Error al crear Operación',
                        errors: err,
                    });
                }
                proyecto.Id_Proyecto = resp.insertId;
                res.status(201).json({
                    ok: true,
                    proyecto: proyecto,
                });
            });
        });
    }
}
const proyectoController = new ProyectoController();
exports.default = proyectoController;
