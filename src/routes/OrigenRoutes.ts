import express, { Router } from 'express';

import OrigenController from '../controllers/OrigenController';

class OrigenRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get(
      '/TablaMovimientoDiario/:Ano/:Origen',
      OrigenController.OrigenAnoCodigoProyecto
    );
    this.router.get(
      '/DatosMenuInformacion/:Ano/:Nombre',
      OrigenController.OrigenAnoNombreProyecto
    );
    this.router.get('/MenuInformacion/:Ano', OrigenController.OrigenAno);
    this.router.get(
      '/NombreOrigen/:TipoOrigen/:Origen/:Ano',
      OrigenController.NombreOrigenTipoOrigenOrigenAno
    );
  }
}

export default new OrigenRoutes().router;
