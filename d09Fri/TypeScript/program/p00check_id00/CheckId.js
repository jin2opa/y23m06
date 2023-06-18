"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckId {
    constructor() {
        this._id = "";
        this._pw = "";
    }
    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }
    set pw(value) {
        this._pw = value;
    }
    get pw() {
        return this._pw;
    }
    checkId() {
        if (this._id === "jin" && this._pw === "111") {
            console.log("y");
        }
        else {
            console.log("n");
        }
    }
}
exports.default = CheckId;
