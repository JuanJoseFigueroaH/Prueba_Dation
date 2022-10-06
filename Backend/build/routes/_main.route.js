"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_route_1 = __importDefault(require("./client.route"));
const mainRoute = express_1.Router();
mainRoute.use('/client', client_route_1.default);
exports.default = mainRoute;
//# sourceMappingURL=_main.route.js.map