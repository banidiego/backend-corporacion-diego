export class AuxiliarModel {
  Id_Auxiliar: any;
  TipoPersona: Number;
  Id_TipoDocumentoIdentidad: Number;
  RUC: String;
  ApellidoPaterno: String;
  ApellidoMaterno: String;
  Nombres: String;
  RazonSocial: String;
  Direccion: String;
  constructor() {
    this.Id_Auxiliar = 1;
    this.TipoPersona = 0;
    this.Id_TipoDocumentoIdentidad = 0;
    this.RUC = '';
    this.ApellidoPaterno = '';
    this.ApellidoMaterno = '';
    this.Nombres = '';
    this.RazonSocial = '';
    this.Direccion = '';
  }
}
