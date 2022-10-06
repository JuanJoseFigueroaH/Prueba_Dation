"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAvailableError = void 0;
const custom_error_1 = require("./custom-error");
class NotAvailableError extends custom_error_1.CustomError {
    constructor(message = null) {
        super(message || 'Service Unavailable at the moment');
        this.statusCode = 503;
        this.messageError = message || null;
        Object.setPrototypeOf(this, NotAvailableError.prototype);
    }
    serializeErrors() {
        return [
            { message: this.messageError || 'Service Unavailable at the moment' }
        ];
    }
}
exports.NotAvailableError = NotAvailableError;
//# sourceMappingURL=not-available-error.js.map