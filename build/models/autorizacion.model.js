"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorizacionModel = void 0;
class AutorizacionModel {
    constructor() {
        this.Id_Autorizacion = null;
        this.Tipo = 0;
        this.Numero = 0;
        this.ResponsableAutorizacion = '';
        this.RUCResponsable = '';
        this.Fecha = new Date();
        this.ResponsableGiro = '';
        this.RUCGiro = '';
        this.ChequeDolares = '';
        this.ChequeSoles = '';
        this.TC = 0;
        this.ImporteSoles = 0;
        this.ImporteDolares = 0;
        this.Mes = '';
        this.Ano = 0;
        this.Codigo_Proyecto = '';
        this.Anulado = false;
    }
}
exports.AutorizacionModel = AutorizacionModel;
