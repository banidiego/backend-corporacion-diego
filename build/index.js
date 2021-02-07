"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const AuxiliarRoutes_1 = __importDefault(require("./routes/AuxiliarRoutes"));
const TipoDocumentoIdentidadRoutes_1 = __importDefault(require("./routes/TipoDocumentoIdentidadRoutes"));
const TipoComprobanteRoutes_1 = __importDefault(require("./routes/TipoComprobanteRoutes"));
const LoginRoutes_1 = __importDefault(require("./routes/LoginRoutes"));
const CategoriaRoutes_1 = __importDefault(require("./routes/CategoriaRoutes"));
const CostoFijoRoutes_1 = __importDefault(require("./routes/CostoFijoRoutes"));
const EmpresaRoutes_1 = __importDefault(require("./routes/EmpresaRoutes"));
const ManoObraRoutes_1 = __importDefault(require("./routes/ManoObraRoutes"));
const MateriaPrimaRoutes_1 = __importDefault(require("./routes/MateriaPrimaRoutes"));
const OtroGastoRoutes_1 = __importDefault(require("./routes/OtroGastoRoutes"));
const CostoProductoRoutes_1 = __importDefault(require("./routes/CostoProductoRoutes"));
const CostoProductoDetalleRoutes_1 = __importDefault(require("./routes/CostoProductoDetalleRoutes"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const RegistroCompras81Routes_1 = __importDefault(require("./routes/RegistroCompras81Routes"));
const TipoCompraRoutes_1 = __importDefault(require("./routes/TipoCompraRoutes"));
const VentaSimpleRoutes_1 = __importDefault(require("./routes/VentaSimpleRoutes"));
const ReportesGlobalesRoutes_1 = __importDefault(require("./routes/ReportesGlobalesRoutes"));
const UsuarioRoutes_1 = __importDefault(require("./routes/UsuarioRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default({ origin: '*' }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/Login', LoginRoutes_1.default);
        this.app.use('/Auth', AuthRoutes_1.default);
        this.app.use('/Categoria', CategoriaRoutes_1.default);
        this.app.use('/CostoFijo', CostoFijoRoutes_1.default);
        this.app.use('/Empresa', EmpresaRoutes_1.default);
        this.app.use('/ManoObra', ManoObraRoutes_1.default);
        this.app.use('/MateriaPrima', MateriaPrimaRoutes_1.default);
        this.app.use('/OtroGasto', OtroGastoRoutes_1.default);
        this.app.use('/CostoProducto', CostoProductoRoutes_1.default);
        this.app.use('/CostoProductoDetalle', CostoProductoDetalleRoutes_1.default);
        this.app.use('/RegistroCompra81', RegistroCompras81Routes_1.default);
        this.app.use('/TipoComprobante', TipoComprobanteRoutes_1.default);
        this.app.use('/TipoDocumentoIdentidad', TipoDocumentoIdentidadRoutes_1.default);
        this.app.use('/TipoCompra', TipoCompraRoutes_1.default);
        this.app.use('/Auxiliar', AuxiliarRoutes_1.default);
        this.app.use('/VentaSimple', VentaSimpleRoutes_1.default);
        this.app.use('/ReportesGlobales', ReportesGlobalesRoutes_1.default);
        this.app.use('/Usuario', UsuarioRoutes_1.default);
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
