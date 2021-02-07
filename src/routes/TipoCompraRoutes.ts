import express, { Router } from 'express';

import TipoCompraController from '../controllers/TipoCompraController';

class TipoCompraRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', TipoCompraController.Lista);
  }
}

export default new TipoCompraRoutes().router;
