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
class CategoriaController {
    // ==========================================
    // Obtener todos los Auxiliares filtrados por RUC
    // ==========================================
    ListaAuxiliaresRUC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ruc = req.params.Ruc;
            yield database_1.default.query('SELECT * FROM Auxiliar WHERE RUC = ?', [ruc], function (err, datos, fields) {
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
    // Obtener todos los Auxiliares filtrados por Razón Social
    // ==========================================
    ListaAuxiliaresRazonSocial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const razonSocial = req.params.RazonSocial;
            yield database_1.default.query('SELECT * FROM Auxiliar WHERE RazonSocial = ?', [razonSocial], function (err, datos, fields) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error en la Base de Datos cargando Auxiliares',
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
    // Obtener todos los Auxiliares
    // ==========================================
    ListaAuxiliares(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Auxiliar', function (err, dato, fields) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error en la Base de Datos cargando Auxiliares',
                        errors: err,
                    });
                }
                return res.status(200).json({
                    ok: true,
                    auxiliares: dato,
                });
            });
        });
    }
    // ==========================================
    // Crear un nuevo Auxiliar
    // ==========================================
    GuardarAuxiliar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var auxiliar = new AuxiliarModel();
            var body = req.body;
            auxiliar.Id_Auxiliar = null;
            auxiliar.Id_TipoDocumentoIdentidad = body.Id_TipoDocumentoIdentidad;
            auxiliar.RUC = body.RUC;
            auxiliar.ApellidoPaterno = body.ApellidoPaterno;
            auxiliar.ApellidoMaterno = body.ApellidoMaterno;
            auxiliar.Nombres = body.Nombres;
            auxiliar.RazonSocial = body.RazonSocial;
            auxiliar.Direccion = body.Direccion;
            auxiliar.TipoPersona = body.TipoPersona;
            yield database_1.default.query('INSERT INTO Auxiliar set ?', auxiliar, (err, auxiliarGuardado) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Error al crear Auxiliar',
                        errors: err,
                    });
                }
                auxiliar.Id_Auxiliar = auxiliarGuardado.insertId;
                res.status(201).json({
                    ok: true,
                    auxiliar: auxiliar,
                    Info: auxiliarGuardado,
                });
            });
        });
    }
    // ==========================================
    // Actualizar Auxiliar
    // ==========================================
    ActualizarAuxiliar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            var auxiliar = new AuxiliarModel();
            var body = req.body;
            auxiliar.Id_Auxiliar = id;
            auxiliar.Id_TipoDocumentoIdentidad = body.Id_TipoDocumentoIdentidad;
            auxiliar.RUC = body.RUC;
            auxiliar.ApellidoPaterno = body.ApellidoPaterno;
            auxiliar.ApellidoMaterno = body.ApellidoMaterno;
            auxiliar.Nombres = body.Nombres;
            auxiliar.RazonSocial = body.RazonSocial;
            auxiliar.Direccion = body.Direccion;
            auxiliar.TipoPersona = body.TipoPersona;
            yield database_1.default.query('UPDATE Auxiliar set ? WHERE Id_Auxiliar = ?', [auxiliar, id], (err, auxiliarGuardado) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Error al crear Auxiliar',
                        errors: err,
                    });
                }
                res.status(201).json({
                    ok: true,
                    auxiliar: auxiliar,
                    Info: auxiliarGuardado,
                });
            });
        });
    }
    // ============================================
    //   Borrar un Auxiliar por el id
    // ============================================
    EliminarAuxiliar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('DELETE FROM Auxiliar WHERE Id_Auxiliar=?', [id], function (err, auxiliarBorrado, fields) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error al borrar Auxiliar',
                        errors: err,
                    });
                }
                if (!auxiliarBorrado) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'No existe un Auxiliar con ese id',
                        errors: { message: 'No existe un Auxiliar con ese id' },
                    });
                }
                res.status(200).json({
                    ok: true,
                    auxiliar: auxiliarBorrado,
                });
            });
        });
    }
}
const categoriaController = new CategoriaController();
exports.default = categoriaController;
