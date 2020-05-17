import express, { Router } from 'express';

import TipoRegistroController from '../controllers/TipoRegistroController';

class TipoRegistroRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', TipoRegistroController.Lista);
  }
}

export default new TipoRegistroRoutes().router;
