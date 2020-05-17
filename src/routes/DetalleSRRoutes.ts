import express, { Router } from 'express';

import DetalleSRController from '../controllers/DetalleSRController';

class DetalleSRRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get(
      '/ListaDetalleSR/:Id_SR',
      DetalleSRController.ListaDetalleSRIdSR
    );
    this.router.post('/', DetalleSRController.GuardarDetalleSR);
    this.router.put('/:id', DetalleSRController.ActualizarDetalleSR);
    this.router.delete('/:id', DetalleSRController.EliminarDetalleSR);
  }
}

export default new DetalleSRRoutes().router;
