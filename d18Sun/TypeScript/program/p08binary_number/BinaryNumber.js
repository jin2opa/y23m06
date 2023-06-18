"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryNumber = void 0;
class BinaryNumber {
    constructor(num) {
        this.num = num;
    }
    getNumber() {
        let binaryNumber = [];
        for (let i = 0; i < 8; i++) {
            binaryNumber.push(this.num % 2);
            this.num = Math.floor(this.num / 2);
        }
        // return binaryNumber.reverse().toString().replace(/,/g, "");
        // return binaryNumber.reverse().toString().split(",").join("");
        // return binaryNumber.reverse().toString(); 
        return binaryNumber.reverse().join('');
        // return binaryNumber.reverse().toString().split(",");
    }
}
exports.BinaryNumber = BinaryNumber;
