import { Request, Response } from 'express';

import pool from '../database';
import { OperacionPrincipalModel } from '../models/operacionPrincipal.model';

class OperacionPrincipalController {
  // ==========================================
  // Obtener Asientes del Mes por Año, Mes y TipoOrigen
  // ==========================================
  public async ListaMensualAnoMesTipoOrigen(req: Request, res: Response) {
    const ano = parseInt(req.params.Ano);
    const mes = req.params.Mes;
    const tipoOrigen = req.params.TipoOrigen;
    await pool.query(
      'SELECT * FROM OperacionPrincipal WHERE Ano = ? and Mes = ? and TipoOrigen = ? Order by FechaOperacion',
      [ano, mes, tipoOrigen],

      function (err, datos, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Operacion Principal',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          OperacionPrincipal: datos,
        });
      }
    );
  }

  // ==========================================
  // Obtener Origen por Año y Nombre de Proyecto para cargar Menu información con Datos
  // ==========================================
  public async ListaAnoNombreProyecto(req: Request, res: Response) {
    const ano = parseInt(req.params.Ano);
    const nombre = req.params.Nombre;

    await pool.query(
      'SELECT * FROM OperacionPrincipal WHERE Ano = ? and Nombre = ? ',
      [ano, nombre],

      function (err, datos, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Variables de Sesión',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          Origen: datos,
        });
      }
    );
  }

  // ==========================================
  // Obtener Operacion Principal a partir de Id_OperacionPrincipal
  // ==========================================
  public async ListaIdOperacionPrincipal(req: Request, res: Response) {
    const id = req.params.Id;

    await pool.query(
      'SELECT * FROM OperacionPrincipal WHERE Id_OperacionPrincipal = ? ',
      [id],

      function (err, datos, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando OperaciónPrincipal',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          OperacionPrincipal: datos,
        });
      }
    );
  }

  // ==========================================
  // Obtener Lista de Origenes (por Año) -- Para Menu Información
  // ==========================================
  public async ListaAno(req: Request, res: Response) {
    const ano = parseInt(req.params.Ano);

    await pool.query(
      'SELECT * FROM OperacionPrincipal WHERE Ano = ? Group by Origen,Nombre,Indice',
      [ano],

      function (err, lista, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Lista de Origenes',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          Año: ano,
          Lista: lista,
        });
      }
    );
  }

  // ==========================================
  // Obtener Número de Operación (Maximo por Tipo Origen, por Mes y por Año)
  // ==========================================
  public async MaxNumeroOperacion(req: Request, res: Response) {
    const tipoOrigen = req.params.TipoOrigen;
    const ano = parseInt(req.params.Ano);
    const mes = req.params.Mes;
    const codigo_Proyecto = req.params.Codigo_Proyecto;

    await pool.query(
      'SELECT MAX(Numero) FROM OperacionPrincipal WHERE Ano = ? and Mes = ? and TipoOrigen = ? and Codigo_Proyecto = ?',
      [ano, mes, tipoOrigen, codigo_Proyecto],

      function (err, resp, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Lista de Origenes',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          Numero: resp,
        });
      }
    );
  }

  // ==========================================
  // Crear Operación Principal
  // ==========================================
  public async GuardarOperacionPrincipal(req: Request, res: Response) {
    var operacionPrincipal = new OperacionPrincipalModel();
    var body = req.body;

    let Diferencia: Number;

    Diferencia =
      body.C01 +
      body.C02 +
      body.C03 +
      body.C04 +
      body.C06 +
      body.C07 +
      body.C08 +
      body.C09 +
      body.C10 +
      body.C11 +
      body.C12 +
      body.C13 +
      body.C14 +
      body.C16 +
      body.C17 +
      body.C18 +
      body.C19 +
      body.C20 +
      body.C21 +
      body.C22 +
      body.C23 +
      body.C24 +
      body.C25 +
      body.C26 +
      body.C27 +
      body.C28 +
      body.C29 +
      body.C30 +
      body.C31 +
      body.C32 +
      body.C33 +
      body.C34 +
      body.C35 +
      body.C36 +
      body.C37 +
      body.C38 +
      body.C39 +
      body.C40 +
      body.C41 +
      body.C42 +
      body.C43 +
      body.C44 +
      body.C45 +
      body.C46 +
      body.C47 +
      body.C48 +
      body.C49 +
      body.C50 +
      body.C51 +
      body.C52 +
      body.C56 +
      body.C57 +
      body.C58 +
      body.C59 +
      body.C60 +
      body.C61 +
      body.C62 +
      body.C63 +
      body.C64 +
      body.C65 +
      body.C66 +
      body.C67 +
      body.C69 +
      body.C70 +
      body.C71 +
      body.C72 +
      body.C73 +
      body.C74 +
      body.C75 +
      body.C76 +
      body.C77 +
      body.C78 +
      body.C79 +
      body.C80 +
      body.C81 +
      body.C82 +
      body.C83 +
      body.C84 +
      body.C85 +
      body.C87 +
      body.C88 +
      body.C89 +
      body.C91 +
      body.C92 +
      body.C93 +
      body.C94 +
      body.C95 +
      body.C96;

    operacionPrincipal.Id_OperacionPrincipal = null;
    operacionPrincipal.DescripcionOperacion = body.DescripcionOperacion;
    operacionPrincipal.FechaOperacion = body.FechaOperacion;
    operacionPrincipal.ResponsableGiro = body.ResponsableGiro;
    operacionPrincipal.CodigoOperacion = body.CodigoOperacion;
    operacionPrincipal.Numero = body.Numero;
    operacionPrincipal.Ano = body.Ano;
    operacionPrincipal.Mes = body.Mes;
    operacionPrincipal.Codigo_Proyecto = body.Codigo_Proyecto;
    operacionPrincipal.C01 = body.C01;
    operacionPrincipal.C02 = body.C02;
    operacionPrincipal.C03 = body.C03;
    operacionPrincipal.C04 = body.C04;
    operacionPrincipal.C06 = body.C06;
    operacionPrincipal.C07 = body.C07;
    operacionPrincipal.C08 = body.C08;
    operacionPrincipal.C09 = body.C09;
    operacionPrincipal.C10 = body.C10;
    operacionPrincipal.C11 = body.C11;
    operacionPrincipal.C12 = body.C12;
    operacionPrincipal.C13 = body.C13;
    operacionPrincipal.C14 = body.C14;
    operacionPrincipal.C16 = body.C16;
    operacionPrincipal.C17 = body.C17;
    operacionPrincipal.C18 = body.C18;
    operacionPrincipal.C19 = body.C19;
    operacionPrincipal.C20 = body.C20;
    operacionPrincipal.C21 = body.C21;
    operacionPrincipal.C22 = body.C22;
    operacionPrincipal.C23 = body.C23;
    operacionPrincipal.C24 = body.C24;
    operacionPrincipal.C25 = body.C25;
    operacionPrincipal.C26 = body.C26;
    operacionPrincipal.C27 = body.C27;
    operacionPrincipal.C28 = body.C28;
    operacionPrincipal.C29 = body.C29;
    operacionPrincipal.C30 = body.C30;
    operacionPrincipal.C31 = body.C31;
    operacionPrincipal.C32 = body.C32;
    operacionPrincipal.C33 = body.C33;
    operacionPrincipal.C34 = body.C34;
    operacionPrincipal.C35 = body.C35;
    operacionPrincipal.C36 = body.C36;
    operacionPrincipal.C37 = body.C37;
    operacionPrincipal.C38 = body.C38;
    operacionPrincipal.C39 = body.C39;
    operacionPrincipal.C40 = body.C40;
    operacionPrincipal.C41 = body.C41;
    operacionPrincipal.C42 = body.C42;
    operacionPrincipal.C43 = body.C43;
    operacionPrincipal.C44 = body.C44;
    operacionPrincipal.C45 = body.C45;
    operacionPrincipal.C46 = body.C46;
    operacionPrincipal.C47 = body.C47;
    operacionPrincipal.C48 = body.C48;
    operacionPrincipal.C49 = body.C49;
    operacionPrincipal.C50 = body.C50;
    operacionPrincipal.C51 = body.C51;
    operacionPrincipal.C52 = body.C52;
    operacionPrincipal.C56 = body.C56;
    operacionPrincipal.C57 = body.C57;
    operacionPrincipal.C58 = body.C58;
    operacionPrincipal.C59 = body.C59;
    operacionPrincipal.C60 = body.C60;
    operacionPrincipal.C61 = body.C61;
    operacionPrincipal.C62 = body.C62;
    operacionPrincipal.C63 = body.C63;
    operacionPrincipal.C64 = body.C64;
    operacionPrincipal.C65 = body.C65;
    operacionPrincipal.C66 = body.C66;
    operacionPrincipal.C67 = body.C67;
    operacionPrincipal.C69 = body.C69;
    operacionPrincipal.C70 = body.C70;
    operacionPrincipal.C71 = body.C71;
    operacionPrincipal.C72 = body.C72;
    operacionPrincipal.C73 = body.C73;
    operacionPrincipal.C74 = body.C74;
    operacionPrincipal.C75 = body.C75;
    operacionPrincipal.C76 = body.C76;
    operacionPrincipal.C77 = body.C77;
    operacionPrincipal.C78 = body.C78;
    operacionPrincipal.C79 = body.C79;
    operacionPrincipal.C80 = body.C80;
    operacionPrincipal.C81 = body.C81;
    operacionPrincipal.C82 = body.C82;
    operacionPrincipal.C83 = body.C83;
    operacionPrincipal.C84 = body.C84;
    operacionPrincipal.C85 = body.C85;
    operacionPrincipal.C87 = body.C87;
    operacionPrincipal.C88 = body.C88;
    operacionPrincipal.C89 = body.C89;
    operacionPrincipal.C91 = body.C91;
    operacionPrincipal.C92 = body.C92;
    operacionPrincipal.C93 = body.C93;
    operacionPrincipal.C94 = body.C94;
    operacionPrincipal.C95 = body.C95;
    operacionPrincipal.C96 = body.C96;
    operacionPrincipal.TipoOrigen = body.TipoOrigen;
    operacionPrincipal.Solicitud = body.Solicitud;
    operacionPrincipal.AutorizacionDolares = body.AutorizacionDolares;
    operacionPrincipal.AutorizacionSoles = body.AutorizacionSoles;
    operacionPrincipal.Diferencia = Diferencia;
    operacionPrincipal.Cuadrado = body.Cuadrado;

    await pool.query(
      'INSERT INTO OperacionPrincipal set ?',
      operacionPrincipal,
      (err, OperacionPrincipalGuardado) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            mensaje: 'Error al crear Operación Principal',
            errors: err,
          });
        }

        res.status(201).json({
          ok: true,
          OperacionPrincipal: OperacionPrincipalGuardado,
        });
      }
    );
  }

  // ==========================================
  // Actualizar Operación Principal
  // ==========================================
  public async ActualizarOperacionPrincipal(req: Request, res: Response) {
    const id = req.params.id;

    var operacionPrincipal = new OperacionPrincipalModel();
    var body = req.body;

    let Diferencia: Number;

    Diferencia =
      body.C01 +
      body.C02 +
      body.C03 +
      body.C04 +
      body.C06 +
      body.C07 +
      body.C08 +
      body.C09 +
      body.C10 +
      body.C11 +
      body.C12 +
      body.C13 +
      body.C14 +
      body.C16 +
      body.C17 +
      body.C18 +
      body.C19 +
      body.C20 +
      body.C21 +
      body.C22 +
      body.C23 +
      body.C24 +
      body.C25 +
      body.C26 +
      body.C27 +
      body.C28 +
      body.C29 +
      body.C30 +
      body.C31 +
      body.C32 +
      body.C33 +
      body.C34 +
      body.C35 +
      body.C36 +
      body.C37 +
      body.C38 +
      body.C39 +
      body.C40 +
      body.C41 +
      body.C42 +
      body.C43 +
      body.C44 +
      body.C45 +
      body.C46 +
      body.C47 +
      body.C48 +
      body.C49 +
      body.C50 +
      body.C51 +
      body.C52 +
      body.C56 +
      body.C57 +
      body.C58 +
      body.C59 +
      body.C60 +
      body.C61 +
      body.C62 +
      body.C63 +
      body.C64 +
      body.C65 +
      body.C66 +
      body.C67 +
      body.C69 +
      body.C70 +
      body.C71 +
      body.C72 +
      body.C73 +
      body.C74 +
      body.C75 +
      body.C76 +
      body.C77 +
      body.C78 +
      body.C79 +
      body.C80 +
      body.C81 +
      body.C82 +
      body.C83 +
      body.C84 +
      body.C85 +
      body.C87 +
      body.C88 +
      body.C89 +
      body.C91 +
      body.C92 +
      body.C93 +
      body.C94 +
      body.C95 +
      body.C96;

    operacionPrincipal.Id_OperacionPrincipal = id;
    operacionPrincipal.DescripcionOperacion = body.DescripcionOperacion;
    operacionPrincipal.FechaOperacion = body.FechaOperacion;
    operacionPrincipal.ResponsableGiro = body.ResponsableGiro;
    operacionPrincipal.CodigoOperacion = body.CodigoOperacion;
    operacionPrincipal.Numero = body.Numero;
    operacionPrincipal.Ano = body.Ano;
    operacionPrincipal.Mes = body.Mes;
    operacionPrincipal.Codigo_Proyecto = body.Codigo_Proyecto;
    operacionPrincipal.C01 = body.C01;
    operacionPrincipal.C02 = body.C02;
    operacionPrincipal.C03 = body.C03;
    operacionPrincipal.C04 = body.C04;
    operacionPrincipal.C06 = body.C06;
    operacionPrincipal.C07 = body.C07;
    operacionPrincipal.C08 = body.C08;
    operacionPrincipal.C09 = body.C09;
    operacionPrincipal.C10 = body.C10;
    operacionPrincipal.C11 = body.C11;
    operacionPrincipal.C12 = body.C12;
    operacionPrincipal.C13 = body.C13;
    operacionPrincipal.C14 = body.C14;
    operacionPrincipal.C16 = body.C16;
    operacionPrincipal.C17 = body.C17;
    operacionPrincipal.C18 = body.C18;
    operacionPrincipal.C19 = body.C19;
    operacionPrincipal.C20 = body.C20;
    operacionPrincipal.C21 = body.C21;
    operacionPrincipal.C22 = body.C22;
    operacionPrincipal.C23 = body.C23;
    operacionPrincipal.C24 = body.C24;
    operacionPrincipal.C25 = body.C25;
    operacionPrincipal.C26 = body.C26;
    operacionPrincipal.C27 = body.C27;
    operacionPrincipal.C28 = body.C28;
    operacionPrincipal.C29 = body.C29;
    operacionPrincipal.C30 = body.C30;
    operacionPrincipal.C31 = body.C31;
    operacionPrincipal.C32 = body.C32;
    operacionPrincipal.C33 = body.C33;
    operacionPrincipal.C34 = body.C34;
    operacionPrincipal.C35 = body.C35;
    operacionPrincipal.C36 = body.C36;
    operacionPrincipal.C37 = body.C37;
    operacionPrincipal.C38 = body.C38;
    operacionPrincipal.C39 = body.C39;
    operacionPrincipal.C40 = body.C40;
    operacionPrincipal.C41 = body.C41;
    operacionPrincipal.C42 = body.C42;
    operacionPrincipal.C43 = body.C43;
    operacionPrincipal.C44 = body.C44;
    operacionPrincipal.C45 = body.C45;
    operacionPrincipal.C46 = body.C46;
    operacionPrincipal.C47 = body.C47;
    operacionPrincipal.C48 = body.C48;
    operacionPrincipal.C49 = body.C49;
    operacionPrincipal.C50 = body.C50;
    operacionPrincipal.C51 = body.C51;
    operacionPrincipal.C52 = body.C52;
    operacionPrincipal.C56 = body.C56;
    operacionPrincipal.C57 = body.C57;
    operacionPrincipal.C58 = body.C58;
    operacionPrincipal.C59 = body.C59;
    operacionPrincipal.C60 = body.C60;
    operacionPrincipal.C61 = body.C61;
    operacionPrincipal.C62 = body.C62;
    operacionPrincipal.C63 = body.C63;
    operacionPrincipal.C64 = body.C64;
    operacionPrincipal.C65 = body.C65;
    operacionPrincipal.C66 = body.C66;
    operacionPrincipal.C67 = body.C67;
    operacionPrincipal.C69 = body.C69;
    operacionPrincipal.C70 = body.C70;
    operacionPrincipal.C71 = body.C71;
    operacionPrincipal.C72 = body.C72;
    operacionPrincipal.C73 = body.C73;
    operacionPrincipal.C74 = body.C74;
    operacionPrincipal.C75 = body.C75;
    operacionPrincipal.C76 = body.C76;
    operacionPrincipal.C77 = body.C77;
    operacionPrincipal.C78 = body.C78;
    operacionPrincipal.C79 = body.C79;
    operacionPrincipal.C80 = body.C80;
    operacionPrincipal.C81 = body.C81;
    operacionPrincipal.C82 = body.C82;
    operacionPrincipal.C83 = body.C83;
    operacionPrincipal.C84 = body.C84;
    operacionPrincipal.C85 = body.C85;
    operacionPrincipal.C87 = body.C87;
    operacionPrincipal.C88 = body.C88;
    operacionPrincipal.C89 = body.C89;
    operacionPrincipal.C91 = body.C91;
    operacionPrincipal.C92 = body.C92;
    operacionPrincipal.C93 = body.C93;
    operacionPrincipal.C94 = body.C94;
    operacionPrincipal.C95 = body.C95;
    operacionPrincipal.C96 = body.C96;
    operacionPrincipal.TipoOrigen = body.TipoOrigen;
    operacionPrincipal.Solicitud = body.Solicitud;
    operacionPrincipal.AutorizacionDolares = body.AutorizacionDolares;
    operacionPrincipal.AutorizacionSoles = body.AutorizacionSoles;
    operacionPrincipal.Diferencia = Diferencia;
    operacionPrincipal.Cuadrado = body.Cuadrado;

    await pool.query(
      'UPDATE OperacionPrincipal set ? WHERE Id_OperacionPrincipal = ?',
      [operacionPrincipal, id],
      (err, resp) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            mensaje: 'Error al Actualizar Operación Principal',
            errors: err,
          });
        }

        res.status(201).json({
          ok: true,
          OperacionPrincipal: resp,
        });
      }
    );
  }
}
const operacionPrincipalController = new OperacionPrincipalController();
export default operacionPrincipalController;
