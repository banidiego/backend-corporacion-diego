import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import path from 'path';

import indexRoutes from './routes/indexRoutes';
import AuxiliarRoutes from './routes/AuxiliarRoutes';
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
import TipoComprobanteRoutes from './routes/TipoComprobanteRoutes';
import VariablesSesionRoutes from './routes/VariablesSesionRoutes';
import LoginRoutes from './routes/LoginRoutes';
import CategoriaRoutes from './routes/CategoriaRoutes';
import CostoFijoRoutes from './routes/CostoFijoRoutes';
import EmpresaRoutes from './routes/EmpresaRoutes';
import ManoObraRoutes from './routes/ManoObraRoutes';
import MateriaPrimaRoutes from './routes/MateriaPrimaRoutes';
import OtroGastoRoutes from './routes/OtroGastoRoutes';
import CostoProductoRoutes from './routes/CostoProductoRoutes';
import CostoProductoDetalleRoutes from './routes/CostoProductoDetalleRoutes';
import AuthRoutes from './routes/AuthRoutes';
import RegistroCompras81Routes from './routes/RegistroCompras81Routes';
import TipoCompraRoutes from './routes/TipoCompraRoutes';
import VentaSimpleRoutes from './routes/VentaSimpleRoutes';
import ReportesGlobalesRoutes from './routes/ReportesGlobalesRoutes';
import UsuarioRoutes from './routes/UsuarioRoutes';

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
    this.app.use('/Auth', AuthRoutes);
    this.app.use('/Categoria', CategoriaRoutes);
    this.app.use('/CostoFijo', CostoFijoRoutes);
    this.app.use('/Empresa', EmpresaRoutes);
    this.app.use('/ManoObra', ManoObraRoutes);
    this.app.use('/MateriaPrima', MateriaPrimaRoutes);
    this.app.use('/OtroGasto', OtroGastoRoutes);
    this.app.use('/CostoProducto', CostoProductoRoutes);
    this.app.use('/CostoProductoDetalle', CostoProductoDetalleRoutes);
    this.app.use('/RegistroCompra81', RegistroCompras81Routes);
    this.app.use('/TipoComprobante', TipoComprobanteRoutes);
    this.app.use('/TipoDocumentoIdentidad', TipoDocumentoIdentidadRoutes);
    this.app.use('/TipoCompra', TipoCompraRoutes);
    this.app.use('/Auxiliar', AuxiliarRoutes);
    this.app.use('/VentaSimple', VentaSimpleRoutes);
    this.app.use('/ReportesGlobales', ReportesGlobalesRoutes);
    this.app.use('/Usuario', UsuarioRoutes);
    this.app.use('/uploads', express.static(path.resolve('uploads')));
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();
