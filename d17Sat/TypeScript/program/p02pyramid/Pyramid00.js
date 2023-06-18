"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pyramid00 {
    constructor() {
        this._story00 = 0;
    }
    set story00(value) {
        this._story00 = value;
    }
    get story00() {
        return this._story00;
    }
    pyramid() {
        for (let i = 0; i < this.story00; i++) {
            let space = " ".repeat(this.story00 - i - 1);
            let star = "*".repeat(i * 2 + 1);
            console.log(space + star);
        }
    }
}
exports.default = Pyramid00;
