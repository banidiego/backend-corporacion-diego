import { Request, Response } from 'express';

import pool from '../database';
import { TipoDocumentoModel } from '../models/tipoDocumento.model';

class TipoDocumentoController {
  // ==========================================
  // Lista de Medio de Pagos
  // ==========================================
  public async Lista(req: Request, res: Response) {
    await pool.query(
      'SELECT * FROM TipoDocumento ',

      function (err, datos, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error cargando Tipo Documento',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          TipoDocumentos: datos,
        });
      }
    );
  }

  // ==========================================
  // Filtrar TipoDocumento desde Codigo_TipoDocumento - Para obtener TipoRegistro
  // ==========================================
  public async TipoDocumentoCodigo(req: Request, res: Response) {
    const codigo_TipoDocumento = req.params.Codigo_TipoDocumento;

    await pool.query(
      'SELECT * FROM TipoDocumento where Codigo_TipoDocumento = ?',
      [codigo_TipoDocumento],

      function (err, datos, fields) {
        if (err) {
          return res.status(500).json({
            ok: false,
            mensaje: 'Error filtrando Tipo Documento',
            errors: err,
          });
        }

        return res.status(200).json({
          ok: true,
          TipoDocumento: datos,
        });
      }
    );
  }
}
const tipoDocumentoController = new TipoDocumentoController();
export default tipoDocumentoController;
