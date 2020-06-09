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
const planProyecto_model_1 = require("../models/planProyecto.model");
class PlanProyectoController {
    // ==========================================
    // Obtener todos el PlanProyecto filtrados por Codigo_PlanProyecto
    // ==========================================
    ListaCodigoPlanProyecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ruc = req.params.Ruc;
            yield database_1.default.query('SELECT * FROM PlanProyecto WHERE RUC = ? ', [ruc], function (err, datos, fields) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error fltrando Auxiliar',
                        errors: err,
                    });
                }
                return res.status(200).json({
                    ok: true,
                    Auxiliar: datos,
                });
            });
        });
    }
    // ==========================================
    // Obtener todos PlanProyecto
    // ==========================================
    ListaAnoCodigoProyecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ano = parseInt(req.params.Ano);
            const codigo_Proyecto = req.params.Codigo_Proyecto;
            yield database_1.default.query('SELECT * FROM PlanProyecto WHERE Ano = ? and Codigo_Proyecto =  ? and Movimiento = 1', [ano, codigo_Proyecto], function (err, datos, fields) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error fltrando Auxiliar',
                        errors: err,
                    });
                }
                return res.status(200).json({
                    ok: true,
                    PlanProyecto: datos,
                    Año: ano,
                    Codigo_Proyecto: codigo_Proyecto,
                });
            });
        });
    }
    // ==========================================
    // Crear un nuevo Plan de Proyecto
    // ==========================================
    GuardarPlanProyecto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var planproyecto = new planProyecto_model_1.PlanProyectoModel();
            var body = req.body;
            planproyecto.Id_PlanProyecto = null;
            planproyecto.Codigo_PlanProyecto = body.Codigo_PlanProyecto;
            planproyecto.Nombre_PlanProyecto = body.Nombre_PlanProyecto;
            planproyecto.EneroSolesP = body.EneroSolesP;
            planproyecto.FebreroSolesP = body.FebreroSolesP;
            planproyecto.MarzoSolesP = body.MarzoSolesP;
            planproyecto.AbrilSolesP = body.AbrilSolesP;
            planproyecto.MayoSolesP = body.MayoSolesP;
            planproyecto.JunioSolesP = body.JunioSolesP;
            planproyecto.JulioSolesP = body.JulioSolesP;
            planproyecto.AgostoSolesP = body.AgostoSolesP;
            planproyecto.SeptiembreSolesP = body.SeptiembreSolesP;
            planproyecto.OctubreSolesP = body.OctubreSolesP;
            planproyecto.NoviembreSolesP = body.NoviembreSolesP;
            planproyecto.DiciembreSolesP = body.DiciembreSolesP;
            planproyecto.EneroDolaresP = body.EneroDolaresP;
            planproyecto.FebreroDolaresP = body.FebreroDolaresP;
            planproyecto.MarzoDolaresP = body.MarzoDolaresP;
            planproyecto.AbrilDolaresP = body.AbrilDolaresP;
            planproyecto.MayoDolaresP = body.MayoDolaresP;
            planproyecto.JunioDolaresP = body.JunioDolaresP;
            planproyecto.JulioDolaresP = body.JulioDolaresP;
            planproyecto.AgostoDolaresP = body.AgostoDolaresP;
            planproyecto.SeptiembreDolaresP = body.SeptiembreDolaresP;
            planproyecto.OctubreDolaresP = body.OctubreDolaresP;
            planproyecto.NoviembreDolaresP = body.NoviembreDolaresP;
            planproyecto.DiciembreDolaresP = body.DiciembreDolaresP;
            planproyecto.EneroSolesG = body.EneroSolesG;
            planproyecto.FebreroSolesG = body.FebreroSolesG;
            planproyecto.MarzoSolesG = body.MarzoSolesG;
            planproyecto.AbrilSolesG = body.AbrilSolesG;
            planproyecto.MayoSolesG = body.MayoSolesG;
            planproyecto.JunioSolesG = body.JunioSolesG;
            planproyecto.JulioSolesG = body.JulioSolesG;
            planproyecto.AgostoSolesG = body.AgostoSolesG;
            planproyecto.SeptiembreSolesG = body.SeptiembreSolesG;
            planproyecto.OctubreSolesG = body.OctubreSolesG;
            planproyecto.NoviembreSolesG = body.NoviembreSolesG;
            planproyecto.DiciembreSolesG = body.DiciembreSolesG;
            planproyecto.EneroDolaresG = body.EneroDolaresG;
            planproyecto.FebreroDolaresG = body.FebreroDolaresG;
            planproyecto.MarzoDolaresG = body.MarzoDolaresG;
            planproyecto.AbrilDolaresG = body.AbrilDolaresG;
            planproyecto.MayoDolaresG = body.MayoDolaresG;
            planproyecto.JunioDolaresG = body.JunioDolaresG;
            planproyecto.JulioDolaresG = body.JulioDolaresG;
            planproyecto.AgostoDolaresG = body.AgostoDolaresG;
            planproyecto.SeptiembreDolaresG = body.SeptiembreDolaresG;
            planproyecto.OctubreDolaresG = body.OctubreDolaresG;
            planproyecto.NoviembreDolaresG = body.NoviembreDolaresG;
            planproyecto.DiciembreDolaresG = body.DiciembreDolaresG;
            planproyecto.Codigo_Proyecto = body.Codigo_Proyecto;
            planproyecto.Ano = body.Ano;
            planproyecto.Movimiento = body.Movimiento;
            yield database_1.default.query('INSERT INTO PlanProyecto set ?', planproyecto, (err, PlanProyectoGuardado) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Error al crear Auxiliar',
                        errors: err,
                    });
                }
                planproyecto.Id_PlanProyecto = PlanProyectoGuardado.insertId;
                res.status(201).json({
                    ok: true,
                    PlanProyecto: planproyecto,
                });
            });
        });
    }
}
const planProyectoController = new PlanProyectoController();
exports.default = planProyectoController;
