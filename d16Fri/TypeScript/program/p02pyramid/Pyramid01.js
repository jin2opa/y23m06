"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pyramid00_1 = __importDefault(require("./Pyramid00"));
class Pyramid01 extends Pyramid00_1.default {
    constructor() {
        super(...arguments);
        this._story1 = 0;
    }
    set story1(value) {
        this._story1 = value;
    }
    get story1() {
        return this._story1;
    }
    rPyramid() {
        for (let i = 0; i < this.story1; i++) {
            for (let j = 0; j < i; j++) {
                process.stdout.write(" ");
            }
            for (let k = 0; k < (this.story1 - i) * 2 - 1; k++) {
                process.stdout.write("*");
            }
            console.log();
        }
    }
}
exports.default = Pyramid01;
