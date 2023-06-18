"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calc02 = void 0;
const calc01_1 = require("./calc01");
class Calc02 extends calc01_1.Calc01 {
    constructor(first, second, third, fourth) {
        super(first, second, third);
        this.fourth = fourth;
    }
    multiply() {
        return super.subtraction() * this.fourth;
    }
}
exports.Calc02 = Calc02;
