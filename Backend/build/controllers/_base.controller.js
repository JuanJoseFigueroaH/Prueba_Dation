"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const texts_util_1 = __importDefault(require("../utils/texts.util"));
const files_util_1 = __importDefault(require("../utils/files.util"));
const prisma_utils_1 = __importDefault(require("../utils/prisma.utils"));
const textUtils = new texts_util_1.default();
const fileUtils = new files_util_1.default();
class BaseController {
    constructor() {
        this.db = prisma_utils_1.default;
        this.textUtils = textUtils;
        this.fileUtils = fileUtils;
    }
}
exports.default = BaseController;
//# sourceMappingURL=_base.controller.js.map