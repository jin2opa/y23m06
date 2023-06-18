"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckId {
    constructor() {
        this._id = "";
        this._pw = "";
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set pw(pw) {
        this._pw = pw;
    }
    get pw() {
        return this._pw;
    }
    checkId() {
        if (this._id === "jin" && this._pw === "111") {
            console.log("yes");
        }
        else {
            console.log("no");
        }
    }
}
exports.default = CheckId;
