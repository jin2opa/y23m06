"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultiTable {
    constructor() {
        this._start = 0;
        this._end = 0;
    }
    set start(start) {
        this._start = start;
    }
    get start() {
        return this._start;
    }
    set end(end) {
        this._end = end;
    }
    get end() {
        return this._end;
    }
    multiTable() {
        for (let i = this._start; i <= this._end; i++) {
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} * ${j} = ${i * j}`);
            }
            console.log("=======================");
        }
    }
}
exports.default = MultiTable;
