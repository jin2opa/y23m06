"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calc01 = void 0;
const calc00_1 = require("./calc00");
class Calc01 extends calc00_1.Calc00 {
    constructor(first, second, third) {
        super(first, second);
        this.third = third;
    }
    subtraction() {
        return super.add() - this.third;
    }
}
exports.Calc01 = Calc01;
