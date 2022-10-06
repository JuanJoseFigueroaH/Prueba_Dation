"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TextUtils {
    constructor() {
        this.generateSlug = (str) => str.split(' ').join('-').toLowerCase();
        this.capitalizeText = (str) => str
            .toLocaleLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    }
}
exports.default = TextUtils;
//# sourceMappingURL=texts.util.js.map