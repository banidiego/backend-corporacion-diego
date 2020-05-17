import express, { Router } from 'express';

import ProyectoController from '../controllers/ProyectoController';

class ProyectoRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get(
      '/ProyectoActual/:Codigo_Proyecto',
      ProyectoController.ProyectoCodigoProyecto
    );
    this.router.post('/', ProyectoController.GuardarProyecto);
  }
}

export default new ProyectoRoutes().router;
