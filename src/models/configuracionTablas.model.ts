export class ConfiguracionTablasModel {
  Id_ConfiguracionTablas: any;
  Descripcion: String;
  Nivel1: Number;
  Nivel2: Number;
  Nivel3: Number;
  Nivel4: Number;
  Nivel5: Number;
  Nivel6: Number;
  Ano: Number;
  Codigo_Proyecto: String;

  constructor() {
    this.Id_ConfiguracionTablas = null;
    this.Descripcion = '';
    this.Nivel1 = 0;
    this.Nivel2 = 0;
    this.Nivel3 = 0;
    this.Nivel4 = 0;
    this.Nivel5 = 0;
    this.Nivel6 = 0;
    this.Ano = 0;
    this.Codigo_Proyecto = '';
  }
}
