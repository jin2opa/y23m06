"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factorial = void 0;
class Factorial {
    static factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}
exports.Factorial = Factorial;
