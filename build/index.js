"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const AuxiliaresRoutes_1 = __importDefault(require("./routes/AuxiliaresRoutes"));
const AutorizacionRoutes_1 = __importDefault(require("./routes/AutorizacionRoutes"));
const DetalleSRRoutes_1 = __importDefault(require("./routes/DetalleSRRoutes"));
const MedioPagoRoutes_1 = __importDefault(require("./routes/MedioPagoRoutes"));
const OperacionPrincipalRoutes_1 = __importDefault(require("./routes/OperacionPrincipalRoutes"));
const OperacionRoutes_1 = __importDefault(require("./routes/OperacionRoutes"));
const OrigenRoutes_1 = __importDefault(require("./routes/OrigenRoutes"));
const PlanContableRoutes_1 = __importDefault(require("./routes/PlanContableRoutes"));
const PlanProyectoRoutes_1 = __importDefault(require("./routes/PlanProyectoRoutes"));
const ProyectoRoutes_1 = __importDefault(require("./routes/ProyectoRoutes"));
const SRRoutes_1 = __importDefault(require("./routes/SRRoutes"));
const TipoDocumentoIdentidadRoutes_1 = __importDefault(require("./routes/TipoDocumentoIdentidadRoutes"));
const TipoDocumentoRoutes_1 = __importDefault(require("./routes/TipoDocumentoRoutes"));
const TipoRegistroRoutes_1 = __importDefault(require("./routes/TipoRegistroRoutes"));
const VariablesSesionRoutes_1 = __importDefault(require("./routes/VariablesSesionRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/Autorizacion', AutorizacionRoutes_1.default);
        this.app.use('/Auxiliar', AuxiliaresRoutes_1.default);
        // this.app.use('/ConfiguracionTablas', Configu);
        // this.app.use('/DatosOrganizacion', Datos);
        // this.app.use('/DetalleAutorizacionDolares', Detall);
        // this.app.use('/DetalleAutorizacionSoles', Deta);
        this.app.use('/DetalleSR', DetalleSRRoutes_1.default);
        this.app.use('/MedioPago', MedioPagoRoutes_1.default);
        this.app.use('/OperacionPrincipal', OperacionPrincipalRoutes_1.default);
        this.app.use('/Operacion', OperacionRoutes_1.default);
        this.app.use('/Origen', OrigenRoutes_1.default);
        this.app.use('/PlanContable', PlanContableRoutes_1.default);
        this.app.use('/PlanProyecto', PlanProyectoRoutes_1.default);
        this.app.use('/Proyecto', ProyectoRoutes_1.default);
        this.app.use('/SR', SRRoutes_1.default);
        this.app.use('/TipoDocumentoIdentidad', TipoDocumentoIdentidadRoutes_1.default);
        this.app.use('/TipoDocumento', TipoDocumentoRoutes_1.default);
        this.app.use('/TipoRegistro', TipoRegistroRoutes_1.default);
        // this.app.use('/Usuario', Usuario);
        this.app.use('/VariablesSesion', VariablesSesionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
