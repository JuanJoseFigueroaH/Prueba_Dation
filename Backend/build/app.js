"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const errors_1 = require("./errors");
const middlewares_1 = require("./middlewares");
const _main_route_1 = __importDefault(require("./routes/_main.route"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocs = swagger_jsdoc_1.default({
    swaggerDefinition: {
        info: {
            title: 'Microservice Client',
            description: 'Microservicio para cliente',
            version: '1.0',
            contact: {
                name: 'name'
            },
            servers: [
                {
                    url: 'http://localhost:3001/',
                    name: 'test'
                }
            ]
        },
        basePath: '/api/v1',
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                scheme: 'Bearer',
                description: 'For accessing the API a valid JWT token must be passed in all the queries in the Authorization header.' +
                    'The following syntax must be used in the Authorization header :' +
                    'Bearer xxxxxx.yyyyyyy.zzzzzz'
            }
        }
    },
    apis: ['src/routes/*.ts']
});
const app = express_1.default();
app.set('trust proxy', true);
app.use(express_1.default.json());
app.use(morgan_1.default('combined'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use('/api/v1/public', express_1.default.static(path_1.default.join(__dirname, '/public')));
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
});
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use('/api/v1', _main_route_1.default);
app.all('*', (req, res) => {
    throw new errors_1.NotFoundError();
});
app.use(middlewares_1.errorHandler);
const httpServer = http_1.createServer(app);
exports.httpServer = httpServer;
//# sourceMappingURL=app.js.map