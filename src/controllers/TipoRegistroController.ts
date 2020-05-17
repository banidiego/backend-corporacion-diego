import { Request, Response } from 'express';

import pool from '../database';
import { TipoRegistroModel } from '../models/tipoRegistro.model';

class TipoRegistroController {
  // ==========================================
  // Lista de Tipo de Registro
  // ==========================================
  public async Lista(req: Request, res: Response) {
    await pool.query(
      'SELECT * FROM TipoRegistro ',

      function (err, datos, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Tipo Registro',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          TipoRegistros: datos,
        });
      }
    );
  }
}
const tipoRegistroController = new TipoRegistroController();
export default tipoRegistroController;
