import { Request, Response } from 'express';

import pool from '../database';
import { OrigenModel } from '../models/origen.model';

class OrigenController {
  // ==========================================
  // Obtener Origen por Año y Código de Proyecto para Tabla de Movimiento Diario (Año y Origen (Codigo_Proyecto))
  // ==========================================
  public async OrigenAnoCodigoProyecto(req: Request, res: Response) {
    const ano = parseInt(req.params.Ano);
    const origen = req.params.Origen;

    await pool.query(
      'SELECT * FROM Origen WHERE Ano = ? and Origen=?',
      [ano, origen],
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
  // Obtener Origen por Año y Nombre de Proyecto para cargar Menu información con Datos
  // ==========================================
  public async OrigenAnoNombreProyecto(req: Request, res: Response) {
    const ano = parseInt(req.params.Ano);
    const nombre = req.params.Nombre;

    await pool.query(
      'SELECT * FROM Origen WHERE Ano = ? and Nombre=?',
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
  // Obtener Lista de Origenes (por Año) -- Para Menu Información
  // ==========================================
  public async OrigenAno(req: Request, res: Response) {
    const ano = parseInt(req.params.Ano);

    await pool.query(
      'SELECT * FROM Origen WHERE Ano = ? Group by Origen, Nombre, Indice',
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
  // Obtener Nombre de Origen desde TipoOrigen, Origen(Codigo_proyecto) y Año  (Para el Titulo de Asientos Mensuales)
  // ==========================================
  public async NombreOrigenTipoOrigenOrigenAno(req: Request, res: Response) {
    const tipoOrigen = req.params.TipoOrigen;
    const origen = req.params.Origen;
    const ano = parseInt(req.params.Ano);

    await pool.query(
      'SELECT * FROM Origen WHERE Codigo_Origen = ? and Origen = ? and Ano = ?',
      [tipoOrigen, origen, ano],
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
}

const origenController = new OrigenController();
export default origenController;
