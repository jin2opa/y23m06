"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factor = void 0;
class Factor {
    constructor(num) {
        this._num = num;
    }
    /* get num(): number{
      return this._num;
    }
    set num(num: number){
      this._num = num;
    } */
    factor() {
        let res = "";
        for (let i = 1; i <= this._num; i++) {
            if (this._num % i == 0) {
                res += i + " ";
            }
        }
        console.log(res);
    }
}
exports.Factor = Factor;
