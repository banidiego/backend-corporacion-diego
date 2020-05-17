import { Request, Response } from 'express';

import pool from '../database';
import { AuxiliarModel } from '../models/auxiliar.model';

class AuxiliarController {
  // ==========================================
  // Obtener todos los Auxiliares filtrados por RUC
  // ==========================================
  public async ListaAuxiliaresRUC(req: Request, res: Response) {
    const ruc = req.params.Ruc;

    await pool.query('SELECT * FROM Auxiliar WHERE RUC = ?', [ruc], function (
      err,
      datos,
      fields
    ) {
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
  }

  // ==========================================
  // Obtener todos los Auxiliares filtrados por Razón Social
  // ==========================================
  public async ListaAuxiliaresRazonSocial(req: Request, res: Response) {
    const razonSocial = req.params.RazonSocial;

    await pool.query(
      'SELECT * FROM Auxiliar WHERE RazonSocial = ?',
      [razonSocial],
      function (err, datos, fields) {
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
      }
    );
  }

  // ==========================================
  // Obtener todos los Auxiliares
  // ==========================================
  public async ListaAuxiliares(req: Request, res: Response) {
    await pool.query(
      'SELECT * FROM Auxiliar',

      function (err, dato, fields) {
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
      }
    );
  }

  // ==========================================
  // Crear un nuevo Auxiliar
  // ==========================================
  public async GuardarAuxiliar(req: Request, res: Response) {
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

    await pool.query(
      'INSERT INTO Auxiliar set ?',
      auxiliar,
      (err, auxiliarGuardado) => {
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
      }
    );
  }

  // ==========================================
  // Actualizar Auxiliar
  // ==========================================
  public async ActualizarAuxiliar(req: Request, res: Response) {
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

    await pool.query(
      'UPDATE Auxiliar set ? WHERE Id_Auxiliar = ?',
      [auxiliar, id],
      (err, auxiliarGuardado) => {
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
      }
    );
  }

  // ============================================
  //   Borrar un Auxiliar por el id
  // ============================================
  public async EliminarAuxiliar(req: Request, res: Response) {
    const id = req.params.id;

    await pool.query(
      'DELETE FROM Auxiliar WHERE Id_Auxiliar=?',
      [id],

      function (err, auxiliarBorrado, fields) {
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
      }
    );
  }
}

const auxiliarController = new AuxiliarController();
export default auxiliarController;
