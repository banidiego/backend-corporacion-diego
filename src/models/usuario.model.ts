export class UsuarioModel {
  Id_Usuario: any;
  Usuario: string;
  Password: string;
  Nombres: string;
  Email: string;
  Imagen: string;

  constructor() {
    this.Id_Usuario = null;
    this.Usuario = '';
    this.Password = '';
    this.Nombres = '';
    this.Email = '';
    this.Imagen = '';
  }
}
