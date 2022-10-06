"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedError = void 0;
const custom_error_1 = require("./custom-error");
class DeletedError extends custom_error_1.CustomError {
    constructor() {
        super('Element was deleted');
        this.statusCode = 410;
        Object.setPrototypeOf(this, DeletedError.prototype);
    }
    serializeErrors() {
        return [{
                message: 'Element was deleted'
            }];
    }
}
exports.DeletedError = DeletedError;
//# sourceMappingURL=deleted-error.js.map