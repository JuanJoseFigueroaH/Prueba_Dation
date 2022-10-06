"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = __importDefault(require("../controllers/client.controller"));
const middlewares_1 = require("../middlewares");
const clientController = new client_controller_1.default();
const clientRoute = express_1.Router();
clientRoute.post('/save-address', middlewares_1.currentUser, clientController.saveAddress);
clientRoute.post('/search-filters-interlocutor', middlewares_1.currentUser, clientController.searchFiltersInterlocutor);
clientRoute.post('/save-interlocutor', middlewares_1.currentUser, clientController.saveInterlocutor);
exports.default = clientRoute;
//# sourceMappingURL=client.route.js.map