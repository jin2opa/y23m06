"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pyramid00_1 = __importDefault(require("./Pyramid00"));
class Pyramid01 extends Pyramid00_1.default {
    constructor() {
        super(...arguments);
        this._story01 = 0;
    }
    set story01(value) {
        this._story01 = value;
    }
    get story01() {
        return this._story01;
    }
    rPyramid() {
        for (let i = 0; i < this._story01; i++) {
            let space = " ".repeat(i);
            let star = "*".repeat((this._story01 - i) * 2 - 1);
            console.log(space + star);
        }
    }
}
exports.default = Pyramid01;
