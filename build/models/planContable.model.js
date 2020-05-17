"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanContableModel = void 0;
class PlanContableModel {
    constructor() {
        this.Id_PlanContable = null;
        this.Codigo_PlanCuenta = '';
        this.Nombre_PlanCuenta = '';
        this.DebeApertura = 0;
        this.HaberApertura = 0;
        this.DebeMovimientoAnual = 0;
        this.HaberMovimientoAnual = 0;
        this.DeudorSaldos = 0;
        this.AcreedorSaldos = 0;
        this.DeudorSaldosAjustados = 0;
        this.AcreedorSaldosAjustados = 0;
        this.ActivoBG = 0;
        this.PasivoBG = 0;
        this.PerdidaFuncion = 0;
        this.GananciaFuncion = 0;
        this.PerdidaNaturaleza = 0;
        this.GananciaNaturaleza = 0;
        this.Movimiento = false;
        this.CuentaActiva = false;
        this.Codigo_Proyecto = '';
        this.Ano = 0;
    }
}
exports.PlanContableModel = PlanContableModel;
