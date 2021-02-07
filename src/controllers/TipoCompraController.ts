import { Request, Response } from 'express';

import pool from '../database';
import { TipoCompraModel } from '../models/TipoCompra.model';

class TipoCompraController {
  // ==========================================
  // Lista de Tipo de Compra
  // ==========================================
  public async Lista(req: Request, res: Response) {
    await pool.query(
      'SELECT * FROM TipoCompra order by Codigo_TipoCompra',

      function (err, datos, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Tipo de Compra',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          TipoCompra: datos,
        });
      }
    );
  }
}
const tipoCompraController = new TipoCompraController();
export default tipoCompraController;
