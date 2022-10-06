"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const errors_1 = require("../errors");
const currentUser = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (authHeader) {
        return next();
    }
    else {
        throw new errors_1.BadRequestError('You are not authorized to generate this request');
    }
};
exports.currentUser = currentUser;
//# sourceMappingURL=currentuser.middleware.js.map