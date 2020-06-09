import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import AuxiliaresRoutes from './routes/AuxiliaresRoutes';
import AutorizacionRoutes from './routes/AutorizacionRoutes';
import DetalleSRRoutes from './routes/DetalleSRRoutes';
import MedioPagoRoutes from './routes/MedioPagoRoutes';
import OperacionPrincipalRoutes from './routes/OperacionPrincipalRoutes';
import OperacionRoutes from './routes/OperacionRoutes';
import OrigenRoutes from './routes/OrigenRoutes';
import PlanContableRoutes from './routes/PlanContableRoutes';
import PlanProyectoRoutes from './routes/PlanProyectoRoutes';
import ProyectoRoutes from './routes/ProyectoRoutes';
import SRRoutes from './routes/SRRoutes';
import TipoDocumentoIdentidadRoutes from './routes/TipoDocumentoIdentidadRoutes';
import TipoDocumentoRoutes from './routes/TipoDocumentoRoutes';
import TipoRegistroRoutes from './routes/TipoRegistroRoutes';
import VariablesSesionRoutes from './routes/VariablesSesionRoutes';
import LoginRoutes from './routes/LoginRoutes';

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000);

    this.app.use(morgan('dev'));
    this.app.use(cors({ origin: '*' }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use('/', indexRoutes);
    this.app.use('/Login', LoginRoutes);
    this.app.use('/Autorizacion', AutorizacionRoutes);
    this.app.use('/Auxiliar', AuxiliaresRoutes);
    // this.app.use('/ConfiguracionTablas', Configu);
    // this.app.use('/DatosOrganizacion', Datos);
    // this.app.use('/DetalleAutorizacionDolares', Detall);
    // this.app.use('/DetalleAutorizacionSoles', Deta);
    this.app.use('/DetalleSR', DetalleSRRoutes);
    this.app.use('/MedioPago', MedioPagoRoutes);
    this.app.use('/OperacionPrincipal', OperacionPrincipalRoutes);
    this.app.use('/Operacion', OperacionRoutes);
    this.app.use('/Origen', OrigenRoutes);
    this.app.use('/PlanContable', PlanContableRoutes);
    this.app.use('/PlanProyecto', PlanProyectoRoutes);
    this.app.use('/Proyecto', ProyectoRoutes);
    this.app.use('/SR', SRRoutes);
    this.app.use('/TipoDocumentoIdentidad', TipoDocumentoIdentidadRoutes);
    this.app.use('/TipoDocumento', TipoDocumentoRoutes);
    this.app.use('/TipoRegistro', TipoRegistroRoutes);
    // this.app.use('/Usuario', Usuario);
    this.app.use('/VariablesSesion', VariablesSesionRoutes);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();
