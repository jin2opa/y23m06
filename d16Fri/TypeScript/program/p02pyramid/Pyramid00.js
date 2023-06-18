"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pyramid00 {
    constructor() {
        this._story0 = 0;
    }
    set story0(value) {
        this._story0 = value;
    }
    get story0() {
        return this._story0;
    }
    pyramid() {
        for (let i = 0; i < this._story0; i++) {
            let space = " ".repeat(this._story0 - i - 1);
            let star = "*".repeat(i * 2 + 1);
            console.log(space + star);
        }
    }
}
exports.default = Pyramid00;
