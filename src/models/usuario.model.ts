export class UsuarioModel {
  Id_Usuario: any;
  nombre: String;
  email: String;
  password: String;
  img: String;
  role: String;
  google: String;
  Activado: Boolean;

  constructor() {
    this.Id_Usuario = null;
    this.nombre = '';
    this.email = '';
    this.password = '';
    this.img = '';
    this.role = '';
    this.google = '';
    this.Activado = false;
  }
}
