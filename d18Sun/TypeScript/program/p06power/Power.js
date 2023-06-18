"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Power = void 0;
class Power {
    constructor(base, exponent) {
        this.base = base;
        this.exponent = exponent;
    }
    power() {
        let res = 1;
        for (let i = 0; i < this.exponent; i++) {
            res *= this.base;
        }
        return res;
    }
}
exports.Power = Power;
