"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_utils_1 = __importDefault(require("../utils/prisma.utils"));
class BaseService {
    constructor() {
        this.db = prisma_utils_1.default;
    }
}
exports.default = BaseService;
//# sourceMappingURL=_base.service.js.map