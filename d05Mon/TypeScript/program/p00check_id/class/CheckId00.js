"use strict";
class CheckId00 {
    constructor(id, pw) {
        this._id = id;
        this._pw = pw;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
}
