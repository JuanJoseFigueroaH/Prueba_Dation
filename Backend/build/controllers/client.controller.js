"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const _base_controller_1 = __importDefault(require("./_base.controller"));
class ClientController extends _base_controller_1.default {
    constructor() {
        super(...arguments);
        this.headers = {
            'X-IBM-Client-Id': 'fd4107e95148416ac287080f1ce403a8',
            'Content-Type': 'application/json'
        };
        this.saveAddress = (req, res) => __awaiter(this, void 0, void 0, function* () {
            axios_1.default.post('https://csb-proxy.masnominadigital.com/api/consubanco/dev/common-crm-service/saveAddress', req.body, { headers: this.headers })
                .then(function (response) {
                res.status(response.data.saveAddressResBO.code).send({ data: response.data.saveAddressResBO });
            });
        });
        this.searchFiltersInterlocutor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            axios_1.default.post('https://csb-proxy.masnominadigital.com/api/consubanco/dev/common-crm-service/searchFiltersInterlocutor', req.body, { headers: this.headers })
                .then(function (response) {
                res.status(response.data.searchFiltersInterlocutorResponseBO.code).send({ data: response.data.searchFiltersInterlocutorResponseBO });
            });
        });
        this.saveInterlocutor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            axios_1.default.post('https://csb-proxy.masnominadigital.com/api/consubanco/dev/common-crm-service/saveInterlocutor', req.body, { headers: this.headers })
                .then(function (response) {
                res.status(response.data.saveInterlocutorReqBO.code).send({ data: response.data.saveInterlocutorReqBO });
            });
        });
    }
}
exports.default = ClientController;
//# sourceMappingURL=client.controller.js.map