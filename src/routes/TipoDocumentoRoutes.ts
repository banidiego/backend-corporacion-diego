import express, { Router } from 'express';

import TipoDocumentoController from '../controllers/TipoDocumentoController';

class TipoDocumentoRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', TipoDocumentoController.Lista);
    this.router.get(
      '/FiltrarTipoDocumento/:Codigo_TipoDocumento',
      TipoDocumentoController.TipoDocumentoCodigo
    );
  }
}

export default new TipoDocumentoRoutes().router;
