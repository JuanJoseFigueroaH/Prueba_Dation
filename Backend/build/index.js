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
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const PORT = process.env.PORT || 3002;
    process.env.NODE_ENV = 'dev';
    if (!PORT) {
        throw new Error('Port must be defined');
    }
    console.log(process.env.NODE_ENV);
    try {
        app_1.httpServer.listen(PORT, () => {
            console.log(`listen on port: ${PORT} microservice authenticate`);
            console.log(`Swagger route: http://localhost:${PORT}/swagger`);
        });
    }
    catch (error) {
        console.error(error);
    }
});
start();
//# sourceMappingURL=index.js.map