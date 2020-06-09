import { Request, Response } from 'express';

import pool from '../database';
import { ProyectoModel } from '../models/proyecto.model';

class ProyectoController {
  // ==========================================
  // Obtener de Proyecto Actual (para SR)
  // ==========================================
  public async ProyectoCodigoProyecto(req: Request, res: Response) {
    const codigo_Proyecto = req.params.Codigo_Proyecto;

    await pool.query(
      'SELECT * FROM Proyecto WHERE Codigo_Proyecto = ?',
      [codigo_Proyecto],
      function (err, resp, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Variables de Sesión',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          Proyecto: resp,
        });
      }
    );
  }

  // ==========================================
  // Crear Proyecto
  // ==========================================
  public async GuardarProyecto(req: Request, res: Response) {
    var proyecto = new ProyectoModel();
    var body = req.body;

    proyecto.Id_Proyecto = null;
    proyecto.Codigo_Proyecto = body.Codigo_Proyecto;
    proyecto.Nombre_Proyecto = body.Nombre_Proyecto;
    proyecto.Cooperante = body.Cooperante;
    proyecto.Estado = body.Estado;
    proyecto.Origen = body.Origen;
    proyecto.Serie = body.Serie;

    await pool.query('INSERT INTO Proyecto set ?', proyecto, (err, resp) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          mensaje: 'Error al crear Operación',
          errors: err,
        });
      }

      proyecto.Id_Proyecto = resp.insertId;

      res.status(201).json({
        ok: true,
        proyecto: proyecto,
      });
    });
  }
}
const proyectoController = new ProyectoController();
export default proyectoController;
